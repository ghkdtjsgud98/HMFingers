import Translate from "@google-cloud/translate";
import dotenv from "dotenv";

dotenv.config();

const client = new Translate.v2.Translate({
  projectId: "strategic-hull-331715",
  keyFilename: "/home/ubuntu/gcloudCredentials/sttapikey.json",
});

export async function translation(text) {
  let input = "";
  var [detections] = await client.detect(text);
  detections = Array.isArray(detections) ? detections : [detections];
  console.log("Detections:");
  detections.forEach((detection) => {
    console.log(`${detection.input} => ${detection.language}`);
    input = detection.language;
    //return detection.language;
  });

  var [translations] = await client.translate(text, input);
  translations = Array.isArray(translations) ? translations : [translations];
  console.log("Translations:");
  translations.forEach((translation, i) => {
    console.log(`${text} => (${input}) ${translation}`);
  });
}
