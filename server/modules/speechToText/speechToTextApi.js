import speech from '@google-cloud/speech'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

// es6에서는 __dirname 사용 불가 path.resolve()사용. 현재 프로젝트 경로.
const __dirname = path.resolve()

 async function convertAudioToScript() {
  // NOTE: projectId는 필수 값임.
  const client = new speech.SpeechClient({ projectId: process.env.GCP_PROJECT_ID })
  // NOTE: 프로젝트 파일의 절대 경로
  const file = fs.readFileSync(__dirname + '/modules/speechToText/' + 'testFile.wav')

  const audioBytes = file.toString('base64')

  // The audio file's encoding, sample rate in hertz, and BCP-47 language code
  const audio = {
    content: audioBytes,
  };
  const config = {
    encoding: 'LINEAR16',
    // ,wav 확장자 파일의 sampleRateHertz 값. 후에 파일 인코딩 방식이 정해지면 변경 가능.
    sampleRateHertz: 44100,
    // 해당 파일의 channel 수. 파일에 따라 달라질 수 있으므로 검토 필요.
    audioChannelCount: 2,
    enableSeparateRecognitionPerChannel: true,
    // 번역할 언어 설정.
    languageCode: 'ko-KR',
  };
  const request = {
    audio: audio,
    config: config,
  };

  // Detects speech in the audio file
  const [response] = await client.recognize(request);
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
  console.log(`Transcription: ${transcription}`);
}

await convertAudioToScript();

