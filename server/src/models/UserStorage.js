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
  };
}

export const getEntityInstance = function (entity) {
  getEntityInstance.prototype.getType = function () {
    return "getEntityInstance";
  }

  return {
    name: entity.name,
    /** 단어의 타입 */
    type: entity.type,
    /** 감정을 표현하는 중요도 */
    salience: entity.salience,
    /** 해당 단어 검색 url */
    wikipedia_url: entity.metadata.wikipedia_url,
    /** 긍정의 정도를 표현하는 값 */
    // sentimentScore: entity.sentiment.score,
    /** 감정의 정도를 표현하는 값 */
    // sentimentMagnitude: entity.sentiment.magnitude,
  };
}

export const getCategoryInstance = function (category) {
  getCategoryInstance.prototype.getType = function () {
    return "getCategoryInstance";
  }

  return {
    name: category.name,
    confidence: category.confidence,
  };
}
