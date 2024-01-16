import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Model, ComponentCollection, Serializer } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";
import "../index.css";
//import { json } from "../json";
import { themeJson } from "../theme";
import Loader from "./Loader";
import { WEB_SERVICE_URL } from "../constant";
import { registerColorPicker } from "./custom/ColorPicker";
import { registerYesNoBoolean } from "./custom/YesNoBoolean";
import { registerAddressAutoComplete } from "./custom/AddressAutoComplete";

//Register new "color-picker" component
registerColorPicker();
//Register new "YesNoBoolean" component
registerYesNoBoolean();
//Register new "AddressAutoComplete" component
registerAddressAutoComplete();
//Register new "country" component
ComponentCollection.Instance.add({
  //Unique component name. It becomes a new question type. Please note, it should be written in lowercase.
  name: "country",
  //The text that shows on toolbox
  title: "Country",
  //The actual question that will do the job
  questionJSON: {
    type: "dropdown",
    placeholder: "Select a country...",
    choicesByUrl: {
      url: "https://surveyjs.io/api/CountriesExample",
    },
  },
});
//Register new "full name" component
ComponentCollection.Instance.add({
  name: "fullname",
  title: "Full Name",
  elementsJSON: [
    { type: "text", name: "firstName", title: "First Name", isRequired: true },
    // Optional question, hidden by default
    {
      type: "text",
      name: "middleName",
      title: "Middle Name",
      startWithNewLine: false,
      visible: false,
    },
    {
      type: "text",
      name: "lastName",
      title: "Last Name",
      isRequired: true,
      startWithNewLine: false,
    },
  ],

  onInit() {
    // Add a `showMiddleName` Boolean property to the `fullname` question type
    Serializer.addProperty("fullname", {
      name: "showMiddleName",
      type: "boolean",
      default: false,
      category: "general",
    });
  },
  // Set the Middle Name question visibility at startup
  onLoaded(question) {
    this.changeMiddleNameVisibility(question);
  },
  // Track the changes of the `showMiddleName` property
  onPropertyChanged(question, propertyName, newValue) {
    if (propertyName === "showMiddleName") {
      this.changeMiddleNameVisibility(question);
    }
  },
  changeMiddleNameVisibility(question) {
    const middleName = question.contentPanel.getQuestionByName("middleName");
    if (!!middleName) {
      // Set the `middleName` question's visibility based on the composite question's `showMiddleName` property
      middleName.visible = question.showMiddleName;
    }
  },
});
//Register new "address" component
ComponentCollection.Instance.add({
  name: "shippingaddress",
  title: "Shipping Address",
  elementsJSON: [
    {
      type: "comment",
      name: "businessAddress",
      title: "Business Address",
      isRequired: true,
    },
    {
      type: "boolean",
      name: "shippingSameAsBusiness",
      title: "Shipping address same as business address",
      defaultValue: true,
    },
    {
      type: "comment",
      name: "shippingAddress",
      title: "Shipping Address",
      // Use the `composite` prefix to access a question nested in the composite question
      enableIf: "{composite.shippingSameAsBusiness} <> true",
      isRequired: true,
    },
  ],
  onValueChanged(question, name) {
    const businessAddress =
      question.contentPanel.getQuestionByName("businessAddress");
    const shippingAddress =
      question.contentPanel.getQuestionByName("shippingAddress");
    const shippingSameAsBusiness = question.contentPanel.getQuestionByName(
      "shippingSameAsBusiness"
    );

    if (name === "businessAddress") {
      // If "Shipping address same as business address" is selected
      if (shippingSameAsBusiness.value == true) {
        // Copy the Business Address value to Shipping Address
        shippingAddress.value = businessAddress.value;
      }
    }
    if (name === "shippingSameAsBusiness") {
      // If "Shipping address same as business address" is selected, copy the Business Address to Shipping Address
      // Otherwise, clear the Shipping Address value
      shippingAddress.value =
        shippingSameAsBusiness.value == true ? businessAddress.value : "";
    }
  },
});

const SurveyComponent = () => {
  const [surveyJson, setSurveyJson] = useState(null);
  const [surveyTheme, setSurveyTheme] = useState(themeJson);
  const [surveyData, setSurveyData] = useState(null);
  var formDatas = null;
  // Get SURVEY_ID from url param
  const { SURVEY_ID } = useParams();
  console.log("SURVEY_ID:", SURVEY_ID);
  // Get UTM from search param and save in localStorage
  let search = window.location.search;
  let params = new URLSearchParams(search);
  const UTM = params.get("utm") || window.localStorage.getItem("utm");
  UTM && window.localStorage.setItem("utm", UTM);
  console.log("UTM:", UTM);
  // Get survey form definition
  const getSurveyJson = async () => {
    if (!SURVEY_ID) return;
    try {
      const response = await fetch(
        `${WEB_SERVICE_URL}/formDefinitions/${SURVEY_ID}`
      );
      const jsonResponse = await response.json();
      const jsonFormDefinition = JSON.parse(jsonResponse.formDefinition);
      console.log("jsonFormDefinition::", jsonFormDefinition);
      setSurveyJson(jsonFormDefinition.json);
      setSurveyTheme(jsonFormDefinition.theme);
    } catch (err) {
      console.log("Error in loding form definition!!");
    }
  };
  // Restore survey results /api/formDatas/search?formId=10003&utm=123123
  const getSurveyData = async () => {
    if (!SURVEY_ID || !UTM) return;
    try {
      const response = await fetch(
        `${WEB_SERVICE_URL}/formDatas/search?formId=${SURVEY_ID}&utm=${UTM}`
      );
      const responseJson = await response.json();
      if (responseJson.formData) {
        formDatas = responseJson;
        const formData = JSON.parse(responseJson.formData);
        console.log("formData", formData);
        setSurveyData(formData);
      }
    } catch (err) {
      console.log("Error in loding form data!!", err);
    }
  };
  //Populate UTM on form
  const updateUTM = () => {
    let el = document.getElementById("urn");
    if (el) el.textContent = UTM;
  };

  useEffect(() => {
    getSurveyJson();
    getSurveyData();
    setTimeout(updateUTM, 500);
  }, []);

  const saveResults = useCallback((sender) => {
    console.log("saveResults formDatas:", formDatas);
    console.log("saveResults sender:", sender);
    const dataId = formDatas && formDatas.id ? formDatas.id : null;
    saveSurveyResults(sender.data, SURVEY_ID, UTM, dataId);
  }, []);

  if (!surveyJson) return <Loader />;
  const survey = new Model(surveyJson);
  survey.applyTheme(surveyTheme);
  if (surveyData) survey.data = surveyData;
  survey.onComplete.add(saveResults);
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
  //css override for yes/no boolean
  survey.onUpdateQuestionCssClasses.add(function (_, options) {
    const classes = options.cssClasses;
    //classes.root = "question-root";
    if (options.question.getType() === "boolean") {
      classes.root += " question-root-boolean";
    }
  });

  return (
    <div id={`formId_${SURVEY_ID}`}>
      <Survey model={survey} />
    </div>
  );
};

function saveSurveyResults(json, surveyId, uid, dataId) {
  const dataStr = JSON.stringify(json);
  const data = { formData: dataStr, formId: surveyId, utm: uid };
  const url = dataId
    ? `${WEB_SERVICE_URL}/formDatas/${dataId}`
    : `${WEB_SERVICE_URL}/formDatas`;
  fetch(url, {
    method: dataId ? "PUT" : "POST",
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
