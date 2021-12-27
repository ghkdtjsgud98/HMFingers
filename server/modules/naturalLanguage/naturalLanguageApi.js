  // Imports the Google Cloud client library
import language from '@google-cloud/language';

// Instantiates a client
const client = new language.LanguageServiceClient();

export async function analyzeEntitySentimentOfText(text) {

  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

  // Detects the sentiment of the text
  const [result] = await client.analyzeEntitySentiment({document: document});
  const entities = result.entities;

  // score: 0을 기준으로 +이면 긍정, -이면 부정
  // magnitude: score의 정도를 판단함.


  console.log('Entities and sentiments:');
  // return sentiment;
}

export async function analyzeEntitiesOfText(text) {
  // [START language_entities_text]

  // Prepares a document, representing the provided text
  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

  // Detects entities in the document
  const [result] = await client.analyzeEntities({document});

  const entities = result.entities;

  return entities;
  // [END language_entities_text]
}

export async function classifyTextOfText(text) {
  // [START language_classify_text]

  /**
   * TODO(developer): Uncomment the following line to run this code.
   */
  // const text = 'Your text to analyze, e.g. Hello, world!';

  // Prepares a document, representing the provided text
  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

  // Classifies text in the document
  const [classification] = await client.classifyText({document});
  console.log('Categories:');
  classification.categories.forEach(category => {
    console.log(`Name: ${category.name}, Confidence: ${category.confidence}`);
  });
  // [END language_classify_text]
}

// await analyzeEntitiesOfText("Christmas is on December 25. Kwanzaa, a yearly celebration of African American culture, is held from December 26 to January 1. Lastly, there is New Year’s Eve on December 31 and New Year’s Day on January 1.")
