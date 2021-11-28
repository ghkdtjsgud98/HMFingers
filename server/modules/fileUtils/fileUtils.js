import fs from 'fs'
import { BASE_64 } from '../../common/constants'

export const readLocalFile = (filePath) => {
  return fs.readFileSync(filePath) 
}

export const transFileToAudioBytes = (filePath) => {
  const file = readLocalFile(filePath)
  return file.toString(BASE_64)
}