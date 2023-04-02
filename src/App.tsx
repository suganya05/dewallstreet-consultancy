import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Divisions, Home, WebDevelopment, Impacts } from "./pages";
import StartUpUxServices from "./pages/StartUpUxServices";
import UserExperienceStudio from "./pages/UserExperienceStudio";
import InterActiveProtoType from "./components/InterActiveProtoType";
import RootPage from "./pages/RootPage";

const App: React.FC = () => {
  return (
    <>
      <Fragment>
        <Routes>
          <Route path="/" element={<RootPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user-experience" element={<UserExperienceStudio />} />
          <Route path="/startup-ux-services" element={<StartUpUxServices />} />
          <Route path="/divisions" element={<Divisions />} />
          <Route path="/impacts" element={<Impacts />} />
          <Route path="/webdevelopment" element={<WebDevelopment />} />
          <Route path="/inter-active" element={<InterActiveProtoType />} />
        </Routes>
      </Fragment>
    </>
  );
};

export default App;
