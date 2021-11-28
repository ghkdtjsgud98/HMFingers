import speech from '@google-cloud/speech'
import path from 'path'
import dotenv from 'dotenv'
import { ENCODING_LINEAR16, LANGUAGE_CODE_KR } from '../../common/constants'
import { transFileToAudioBytes } from '../fileUtils/fileUtils'

dotenv.config()

const client = new speech.SpeechClient({ projectId: process.env.GCP_PROJECT_ID })

 export async function convertAudioToScript(filePath) {
  // audio 파일을 bytes string으로 변환
  const audioBytes = transFileToAudioBytes(filePath)

  // The audio file's encoding, sample rate in hertz, and BCP-47 language code
  const audio = {
    content: audioBytes,
  };
  const config = {
    encoding: ENCODING_LINEAR16,
    // ,wav 확장자 파일의 sampleRateHertz 값. 후에 파일 인코딩 방식이 정해지면 변경 가능.
    sampleRateHertz: 44100,
    // 해당 파일의 channel 수. 파일에 따라 달라질 수 있으므로 검토 필요.
    audioChannelCount: 2,
    enableSeparateRecognitionPerChannel: true,
    // 번역할 언어 설정.
    languageCode: LANGUAGE_CODE_KR,
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

