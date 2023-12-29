import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import YearwiseRoadmap from "./components/YearWiseRoadmap/YearwiseRoadmap";
import { HomeComponents } from "./components/Home/HomeComponents";
import { years } from "./constants";
import { Route as RouteNames, RoutePrefix } from "./constants/roots";
import Intern from "./components/Internship/Intern";
import Scholar from "./components/Scholarships/Scholar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponents />} />
        <Route path={RoutePrefix} element={<HomeComponents />} />
        <Route
          path={`${RoutePrefix}/${RouteNames.Home}`}
          element={<HomeComponents />}
        />
        <Route
          path={`${RoutePrefix}/${RouteNames.scholar}`}
          element={<Scholar />}
        />
        <Route
          path={`${RoutePrefix}/${RouteNames.yearwiseRoadmap}`}
          element={<YearwiseRoadmap years={years} />}
        />
        <Route
          path={`${RoutePrefix}/${RouteNames.intern}`}
          element={<Intern />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
