/* const FileType = {
  fieldName: 'file',
  originalFilename: 'audioEx.mp3',
  path: '/Users/stella/Documents/HMFingers/server/resources/QtV9K4u1XSmusMXZjdtaoQCJ.mp3',
  headers: {
    'content-disposition': 'form-data; name="file"; filename="audioEx.mp3"',
    'content-type': 'audio/mpeg'
  },
  size: 1215144,
  name: 'audioEx.mp3',
  type: 'audio/mpeg',
  extension = 'mp3',
}
*/

export const getFileInstance = function (file) {
  getFileInstance.prototype.getType = function () {
    return "getFileInstance";
  }

  return {
    fieldName: file.fieldName,
    originalFilename: file.originalFilename,
    path: file.path,
    size: file.size,
    name: file.name,
    type: file.type,
    extension: file.path.substring(file.path.length - 3, file.path.length),
  }
} 