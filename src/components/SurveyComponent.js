import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";
import "../index.css";
import { json } from "../json";
import { themeJson } from "../theme";
import Loader from "./Loader";
import { WEB_SERVICE_URL } from "../constant";

const SurveyComponent = () => {
  const { SURVEY_ID, UTM } = useParams();
  const [surveyJson, setSurveyJson] = useState(json);
  console.log("SURVEY_ID:", SURVEY_ID);
  console.log("UTM:", UTM);

  const getSurveyJson = async () => {
    if (!SURVEY_ID) return;
    const response = await fetch(
      `${WEB_SERVICE_URL}/formDefinitions/${SURVEY_ID}`
    );
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    setSurveyJson(JSON.parse(jsonResponse.formDefinition));
  };
  useEffect(() => {
    getSurveyJson();
  }, []);

  const alertResults = useCallback((sender) => {
    //const results = JSON.stringify(sender.data);
    //alert(results);
    saveSurveyResults(sender.data, SURVEY_ID, UTM);
  }, []);

  if (!surveyJson) return <Loader />;
  const survey = new Model(surveyJson);
  survey.applyTheme(themeJson);
  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
};

function saveSurveyResults(json, surveyId, uid) {
  const dataStr = JSON.stringify(json);
  const data = { formData: dataStr, formId: surveyId, utm: uid };
  fetch(`${WEB_SERVICE_URL}/formDatas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        // Handle success
      } else {
        // Handle error
      }
    })
    .catch((error) => {
      // Handle error
    });
}

export default SurveyComponent;