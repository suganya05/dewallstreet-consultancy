import React from "react";
import { Routes, Route } from "react-router-dom";
import Root from "./pages/Root";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />} />
      </Routes>
    </>
  );
};

export default App;
