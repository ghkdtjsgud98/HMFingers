import Translate from "@google-cloud/translate";
import dotenv from "dotenv";
import _ from "lodash";
import translate from "google-translate-api";
import { Language } from "../../common/constants.js";

dotenv.config();

const client = new Translate.v2.Translate({
  projectId: process.env.GCP_PROJECT_ID,
  keyFilename: "/home/ubuntu/gcloudCredentials/sttapikey.json",
});

export async function translateScript(text, to = Language.KO) {
  console.log(text);
  const [detections] = await client.detect(text);
  const detectionsList = Array.isArray(detections) ? detections : [detections];

  if (_.isEmpty(detectionsList)) {
    console.error("script language detection is failed")
    return
  }
  const from = detectionsList[0].language;

  const [translations] = await client.translate(text, to);
  const translationsList = Array.isArray(translations) ? translations : [translations];
  return translationsList.reduce((translationScript, translation, i) => {
    if (i === translationsList.length - 1) {
      return translationScript + translation;
    }
    return translationScript + translation + '\n';
  }, "");
}
