import { BrowserRouter, Routes, Route } from "react-router-dom";
import SurveyComponent from "./components/SurveyComponent";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./tailwind.css";

function App() {
  return (
    <div className="bg-[#deedf2] flex justify-center">
      <div className="md:w-1/2 w-[100%] justify-center">
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
