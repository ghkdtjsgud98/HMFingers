import fs from 'fs';
import path from 'path';
import { BASE_64 } from './constants.js';

const __dirname = path.resolve();

export const readLocalFile = (filePath) => {
  return fs.readFileSync(filePath) ;
}

export const transFileToAudioBytes = (filePath) => {
  const file = readLocalFile(filePath);
  return file?.toString(BASE_64);
}

/** script 형식은 json 파일, filename으로 path를 설정하여 저장한다. */
export const storeLocalScript = (script, filename) => {
  fs.writeFileSync(__dirname + '/resources/' + filename + '_script.json', script);
}
