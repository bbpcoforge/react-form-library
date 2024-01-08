import { BrowserRouter, Routes, Route } from "react-router-dom";
import SurveyComponent from "./components/SurveyComponent";
import Home from "./components/Home";
import "./tailwind.css";
import "./fontFace.css";

function App() {
  return (
    <div className="bg-[#edf6f8] lg:flex m-auto justify-center">
      <div className="md:w-[100%] lg:w-1/2 justify-center">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:SURVEY_ID" element={<SurveyComponent />} />
            <Route path="/:SURVEY_ID/:UTM" element={<SurveyComponent />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
