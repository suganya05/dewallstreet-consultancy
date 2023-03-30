import React from "react";
import { Routes, Route } from "react-router-dom";
import { Divisions, Home } from "./pages";
import StartUpUxServices from "./pages/StartUpUxServices";
import UserExperienceStudio from "./pages/UserExperienceStudio";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/division" element={<Divisions />} />
        <Route path="/user-experience" element={<UserExperienceStudio />} />
        <Route path="/startup-ux-services" element={<StartUpUxServices />} />
      </Routes>
    </>
  );
};

export default App;
