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
  entities.forEach(entity => {
    console.log(`  Name: ${entity.name}`);
    console.log(`  Type: ${entity.type}`);
    console.log(`  Score: ${entity.sentiment.score}`);
    console.log(`  Magnitude: ${entity.sentiment.magnitude}`);
  });

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

  console.log('Entities:');
  entities.forEach(entity => {
    console.log(entity.name);
    console.log(` - Type: ${entity.type}, Salience: ${entity.salience}`);
    if (entity.metadata && entity.metadata.wikipedia_url) {
      console.log(` - Wikipedia URL: ${entity.metadata.wikipedia_url}`);
    }
  });
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
