import React from "react";
import { Routes, Route } from "react-router-dom";
import Root from "./pages/Root";
import { Home } from "./pages";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
