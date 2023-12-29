const Route = {
  Home: "home",
  yearwiseRoadmap: "yearwise-roadmap",
  intern:"internships",
  scholar:"scholarships"
};
const RoutePrefix = "/edumatri";
if (typeof module !== "undefined" && module.exports)
  module.exports = { Route, RoutePrefix };
if (typeof exports !== "undefined") exports.myVariable = { Route, RoutePrefix };
