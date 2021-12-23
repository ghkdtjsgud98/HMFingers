import speech from "@google-cloud/speech";
import recorder from "node-record-lpcm16";
import dotenv from "dotenv";
import {
  ENCODING_UNSPECIFIED,
  ENCODING_LINEAR16,
  LANGUAGE_CODE_KR,
} from "../../common/constants.js";
import { transFileToAudioBytes } from "../../common/fileUtils.js";
import { groupBy } from "../../common/stringUtils.js";
import fs from "fs";

dotenv.config();

const client = new speech.SpeechClient({
  projectId: process.env.GCP_PROJECT_ID,
});

const STTConfig = (audioType) => {
  return {
    enableWordTimeOffsets: true,
    encoding: audioType === "mp3" ? ENCODING_UNSPECIFIED : ENCODING_LINEAR16,
    // .wav 확장자 파일의 sampleRateHertz 값. 후에 파일 인코딩 방식이 정해지면 변경 가능.
    sampleRateHertz: audioType === "wav" ? 44100 : 16000, // 44100,
    // 해당 파일의 channel 수. 파일에 따라 달라질 수 있으므로 검토 필요.
    audioChannelCount: audioType === "wav" ? 2 : 1,
    enableSeparateRecognitionPerChannel: true,
    // 번역할 언어 설정.
    languageCode: LANGUAGE_CODE_KR,
  };
}

export async function convertAudioToScript(filePath, audioType) {
  // audio 파일을 bytes string으로 변환
  console.log(filePath)
  const audioBytes = transFileToAudioBytes(filePath);

  // The audio file's encoding, sample rate in hertz, and BCP-47 language code
  const audio = {
    content: audioBytes,
  };

  const request = {
    audio: audio,
    config: STTConfig(audioType),
  };

  // Detects speech in the audio file
  const [response] = await client.recognize(request);

  if (!response) {
    throw Error("no speech to text response error");
  }
  const resultsByChannelTag = groupBy(response.results, "channelTag");
  const { firstKey, data } = resultsByChannelTag;
  const transcription = data[firstKey]
    .map((result) => {
      console.log(result.alternatives[0].words)
      result.alternatives[0].words.forEach(wordInfo => {
        // NOTE: If you have a time offset exceeding 2^32 seconds, use the
        // wordInfo.{x}Time.seconds.high to calculate seconds.
        const startSecs =
          `${wordInfo.startTime.seconds}` +
          '.' +
          wordInfo.startTime.nanos / 100000000;
        const endSecs =
          `${wordInfo.endTime.seconds}` +
          '.' +
          wordInfo.endTime.nanos / 100000000;
        console.log(`Word: ${wordInfo.word}`);
        console.log(`\t ${startSecs} secs - ${endSecs} secs`);
      });
      return result.alternatives[0].transcript;
    })
    .join("\n");
  return transcription;
}

export const convertLocalStreamingAudioToText = async () => {
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const filename = 'Local path to audio file, e.g. /path/to/audio.raw';
  // const encoding = 'Encoding of the audio file, e.g. LINEAR16';
  // const sampleRateHertz = 16000;
  // const languageCode = 'BCP-47 language code, e.g. en-US';

  const config = {
    encoding: audioType !== "wav" ? ENCODING_UNSPECIFIED : ENCODING_LINEAR16,
    // .wav 확장자 파일의 sampleRateHertz 값. 후에 파일 인코딩 방식이 정해지면 변경 가능.
    sampleRateHertz: 16000, // 44100,
    // 해당 파일의 channel 수. 파일에 따라 달라질 수 있으므로 검토 필요.
    audioChannelCount: 2,
    enableSeparateRecognitionPerChannel: true,
    // 번역할 언어 설정.
    languageCode: LANGUAGE_CODE_KR,
  };

  const request = {
    config: config,
    interimResults: false, // If you want interim results, set this to true
  };

  // Stream the audio to the Google Cloud Speech API
  const recognizeStream = client
    .streamingRecognize(request)
    .on("error", console.error)
    .on("data", (data) => {
      console.log(
        `Transcription: ${data.results[0].alternatives[0].transcript}`
      );
    });

  // Stream an audio file from disk to the Speech API, e.g. "./resources/audio.raw"
  fs.createReadStream(filename).pipe(recognizeStream);
};

export const convertLiveStreamingAudioToText = () => {
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const encoding = 'Encoding of the audio file, e.g. LINEAR16';
  // const sampleRateHertz = 16000;
  // const languageCode = 'BCP-47 language code, e.g. en-US';

  const config = {
    encoding: audioType !== "wav" ? ENCODING_UNSPECIFIED : ENCODING_LINEAR16,
    // .wav 확장자 파일의 sampleRateHertz 값. 후에 파일 인코딩 방식이 정해지면 변경 가능.
    sampleRateHertz: 16000, // 44100,
    // 해당 파일의 channel 수. 파일에 따라 달라질 수 있으므로 검토 필요.
    audioChannelCount: 2,
    enableSeparateRecognitionPerChannel: true,
    // 번역할 언어 설정.
    languageCode: LANGUAGE_CODE_KR,
  };

  const request = {
    config: config,
    interimResults: false, // If you want interim results, set this to true
  };

  // Create a recognize stream
  const recognizeStream = client
    .streamingRecognize(request)
    .on("error", console.error)
    .on("data", (data) =>
      process.stdout.write(
        data.results[0] && data.results[0].alternatives[0]
          ? `Transcription: ${data.results[0].alternatives[0].transcript}\n`
          : "\n\nReached transcription time limit, press Ctrl+C\n"
      )
    );

  // Start recording and send the microphone input to the Speech API.
  // Ensure SoX is installed, see https://www.npmjs.com/package/node-record-lpcm16#dependencies
  recorder
    .record({
      sampleRateHertz: 16000,
      threshold: 0,
      // Other options, see https://www.npmjs.com/package/node-record-lpcm16#options
      verbose: false,
      recordProgram: "rec", // Try also "arecord" or "sox"
      silence: "10.0",
    })
    .stream()
    .on("error", console.error)
    .pipe(recognizeStream);

  console.log("Listening, press Ctrl+C to stop.");
};
