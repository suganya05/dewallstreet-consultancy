import React from "react";
import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Divisions, Home, WebDevelopment, Root, Impacts } from "./pages";
import StartUpUxServices from "./pages/StartUpUxServices";
import UserExperienceStudio from "./pages/UserExperienceStudio";
import PortFolio from "./components/PortFolio";
import InterActiveProtoType from "./components/InterActiveProtoType";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/home" element={<Home />} />
        <Route path="/division" element={<Divisions />} />
        <Route path="/user-experience" element={<UserExperienceStudio />} />
        <Route path="/startup-ux-services" element={<StartUpUxServices />} />
        <Route path="/divisions" element={<Divisions />} />
        <Route path="/impacts" element={<Impacts />} />
        <Route path="/webdevelopment" element={<WebDevelopment />} />
        <Route path="/inter-active" element={<InterActiveProtoType />} />
      </Routes>
    </>
  );
};

export default App;
