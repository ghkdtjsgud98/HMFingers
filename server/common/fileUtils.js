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
export const storeLocalScript = (path, script) => {
  fs.writeFileSync(__dirname + path, JSON.stringify({ data: script }));
}

export const getLocalScriptToJson = (path) => {
  const result = fs.readFileSync(__dirname + path, "utf8");
  return JSON.parse(result);
}