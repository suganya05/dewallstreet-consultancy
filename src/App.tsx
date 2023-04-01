import React from "react";
import { Routes, Route } from "react-router-dom";
import Root from "./pages/Root";
import { Divisions, Home, Impacts } from "./pages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/home" element={<Home />} />
        <Route path="/divisions" element={<Divisions />} />
        <Route path="/impacts" element={<Impacts />} />
      </Routes>
    </>
  );
};

export default App;
