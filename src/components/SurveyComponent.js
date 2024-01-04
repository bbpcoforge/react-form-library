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
  const [surveyJson, setSurveyJson] = useState(json);

  const { SURVEY_ID } = useParams();
  console.log("SURVEY_ID:", SURVEY_ID);

  let search = window.location.search;
  let params = new URLSearchParams(search);
  const UTM = params.get("utm") || window.localStorage.getItem("utm");
  UTM && window.localStorage.setItem("utm", UTM);
  console.log("UTM:", params.get("utm"));

  const getSurveyJson = async () => {
    if (!SURVEY_ID) return;
    const response = await fetch(
      `${WEB_SERVICE_URL}/formDefinitions/${SURVEY_ID}`
    );
    const jsonResponse = await response.json();
    setSurveyJson(JSON.parse(jsonResponse.formDefinition));
  };
  const updateUTM = () => {
    let el = document.getElementById("urn");
    if (el) el.textContent = UTM;
  };
  useEffect(() => {
    getSurveyJson();
    setTimeout(updateUTM, 500);
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
  const customCss = {
    page: {
      title: "page-title",
    },
    /*navigation: {
      complete: "sd-btn--action sd-navigation__complete-btn",
      prev: "sd-navigation__prev-btn",
      next: "sd-navigation__next-btn",
      start: "sd-navigation__start-btn",
      preview: "sd-navigation__preview-btn",
      edit: "",
    },
    question: {
      content: "question-content",
      answered: "question-answered",
      titleRequired: "question-title-required",
    },*/
  };
  survey.css = customCss;
  /*survey.onUpdateQuestionCssClasses.add(function (_, options) {
    const classes = options.cssClasses;
    classes.root = "question-root";
    if (options.question.getType() === "title") {
      classes.root += " question-root-checkboxes";
    }
  });*/

  return (
    <div id={`formId_${SURVEY_ID}`}>
      <Survey model={survey} />
    </div>
  );
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
