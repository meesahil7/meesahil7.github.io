import React from "react";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./Portfolio";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />}></Route>
    </Routes>
  );
};

export default MainRoutes;
