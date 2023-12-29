import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SurveyComponent from "./components/SurveyComponent";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { WEB_SERVICE_URL } from "./constant";
import "./tailwind.css";

function App() {
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
    <BrowserRouter>
      <Navbar />
      <div className="flex justify-between mx-auto bg-[#eef6f8]">
        <Sidebar items={surveyJsons} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:SURVEY_ID/:UTM" element={<SurveyComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
