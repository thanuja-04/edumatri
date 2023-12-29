import React, { useState } from "react";

import "./Yearwiseroadmap.css";
import Footer from "../HomeComponents/Footer";
const YearwiseRoadmap = ({ years }) => {
  const [selectedYear, setSelectedYear] = useState(years[0].id);

  const handleChange = (event) => {
    setSelectedYear(event.target.value);
  };
  

  return (
    <div className="bg-primary-700">
        <h1 className="heading-h1">Year-Wise Roadmap</h1><hr/>
      <div className="my-5 mx-auto text-center">
        <label htmlFor="yearSelect" className="text-white text-2xl">
          Select Year:
        </label>
        <select
          id="yearSelect"
          onChange={handleChange}
          className="mx-2 p-2 rounded-md"
        >
          {years.map((year) => (
            <option key={year.id} value={year.id}>
              {year.id.replace("year-", "")}
            </option>
          ))}
        </select>
      </div>
      <div className="timeline ">
        {years
          .find((year) => year.id === selectedYear)
          .data.map((step, index) => (
            <div
              key={`${selectedYear}-step-${index}`}
              className={`containers ${
                index % 2 === 0 ? "leftcontainer" : "rightcontainer"
              }`}
            >   <img
                src="https://img.freepik.com/free-vector/illustration-favorite-star_538
76-6163.jpg?w=1060&t=st=1703830461~exp=1703831061~hmac=dcad837b01f7d066
8228ff724418d4d6e6292e0cf6238e5fe1b65c7e166547cd"
                alt="img4"
              />
              <div className="textbox bg-gradient-to-r from-blue-400 to-teal-400 p-5 rounded-md text-white">
                <h2>{step.title}</h2>
                <small>{step.contentheading}</small>
                <p>{step.content}</p>
                <span
                  className={
                    index % 2 === 0
                      ? "leftcontainerarrow"
                      : "rightcontainerarrow"
                  }
                ></span>
              </div>
            </div>
          ))}
      </div>
      <Footer/>
    </div>
  );
};

export default YearwiseRoadmap;