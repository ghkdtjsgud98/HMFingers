import _ from 'lodash';
import { getEntityInstance } from "../../src/models/UserStorage.js";
import { analyzeEntitiesOfText, classifyTextOfText } from "./naturalLanguageApi.js"


export const getTextSummary = async (text) => {
  const entities = await analyzeEntitiesOfText(text);

  if (_.isEmpty(entities)) {
    return {};
  }
  console.log(entities)
  const sortedEntities = entities.map(entity => getEntityInstance(entity))
    .sort((a, b) => a.salience < b.salience)
    .reduce((prev, cur) => {
      if (prev === undefined || prev[cur.type] === undefined || !prev[cur.type]) {
        prev[cur.type] = [];
      }
      if (prev[cur.type].find(value => value.word === cur.name) === undefined) {
        const url = cur.wikipedia_url === "" ? `https://en.wikipedia.org/wiki/${cur.name.split(" ").join("%20")}` : cur.wikipedia_url;
        prev[cur.type].push({ word: cur.name, url: url });
      }
      return prev;
    }, {});
  
    return sortedEntities;
}
