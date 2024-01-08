import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { WEB_SERVICE_URL } from "../constant";

function Home() {
  const [surveyJsons, setSurveyJsons] = useState([]);
  const getSurveyJson = async () => {
    const response = await fetch(`${WEB_SERVICE_URL}/formDefinitions`);
    const jsonResponse = await response.json();
    setSurveyJsons(jsonResponse);
  };
  useEffect(() => {
    getSurveyJson();
  }, []);
  return (
    <div className="flex justify-between mx-auto bg-[#edf6f8]">
      <Sidebar items={surveyJsons} />
      <h1 className="w-full mt-28 mb-28 flex justify-center font-SantanderHeadlineBold text-2xl">
        Form Renderer
      </h1>
      <br />
      <h2 className="w-full mt-28 mb-28 flex justify-center font-Sofia">
        Click on the form from sidebar navigation to render it.
      </h2>
    </div>
  );
}
export default Home;
