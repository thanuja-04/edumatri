import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import YearwiseRoadmap  from './components/YearWiseRoadmap/YearwiseRoadmap'
import { HomeComponents } from './components/Home/HomeComponents';
import {years}from './constants';
import { Route as RouteNames,RoutePrefix } from './constants/roots';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeComponents/>}/>
      <Route path={`${RoutePrefix}/${RouteNames.Home}`} element={<HomeComponents/>}/>
      <Route path={`${RoutePrefix}/${RouteNames.yearwiseRoadmap}`} element={<YearwiseRoadmap years={years}/>}/>

         
      
    </Routes>
  </BrowserRouter>
  )
}

export default App