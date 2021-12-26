  // Imports the Google Cloud client library
import language from '@google-cloud/language';
async function analyzeSentimentOfText() {
  // Instantiates a client
  const client = new language.LanguageServiceClient();

  // The text to analyze
  const text = 'Hello, world!';

  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

  // Detects the sentiment of the text
  const [result] = await client.analyzeSentiment({document: document});
  const sentiment = result.documentSentiment;

  // score: 0을 기준으로 +이면 긍정, -이면 부정
  // magnitude: score의 정도를 판단함.
  console.log(`Text: ${text}`);
  console.log(`Sentiment score: ${sentiment.score}`);
  console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
}

await analyzeSentimentOfText();

