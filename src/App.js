import { BrowserRouter, Routes, Route } from "react-router-dom";
import SurveyComponent from "./components/SurveyComponent";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./tailwind.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:SURVEY_ID/:UTM" element={<SurveyComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
