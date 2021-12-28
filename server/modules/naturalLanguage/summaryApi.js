import _ from 'lodash';
import { getEntityInstance } from "../../src/models/UserStorage.js";
import { analyzeEntitiesOfText, classifyTextOfText } from "./naturalLanguageApi.js"


export const getTextSummary = async (text) => {
  const entities = await analyzeEntitiesOfText(text);

  if (_.isEmpty(entities)) {
    return {};
  }

  const sortedEntities = entities.map(entity => getEntityInstance(entity))
    .sort((a, b) => a.salience < b.salience)
    .reduce((prev, cur, index) => {
      if (prev === undefined || prev[cur.type] === undefined || !prev[cur.type]) {
        prev[cur.type] = [];
      }
      prev[cur.type].push(cur.name);
      return prev;
    }, {});
  
    return sortedEntities;
}

// await getTextSummary("Christmas is on December 25. Kwanzaa, a yearly celebration of African American culture, is held from December 26 to January 1. Lastly, there is New Year’s Eve on December 31 and New Year’s Day on January 1.")
/* Entities:
{
  EVENT: [ 'Christmas', 'Kwanzaa', "New Year's Day", "New Year's Eve" ],
  OTHER: [ 'culture' ],
  PERSON: [ 'African American' ],
  DATE: [
    'December 25',
    'December 26',
    'January 1',
    'December 31',
    'January 1'
  ],
  NUMBER: [ '25', '1', '1', '26', '31' ]
} */
