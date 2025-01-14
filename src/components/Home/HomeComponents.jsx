import React from "react";
import styles from "../../style";
import Navbar from "../HomeComponents/Navbar";
import Home from "../HomeComponents/Home";
import Stats from "../HomeComponents/Stats";
import Roadmap from "../HomeComponents/Roadmap";
import Scholarships from "../HomeComponents/Scholarships";
import Internships from "../HomeComponents/Internships";
import Footer from "../HomeComponents/Footer";

export const HomeComponents = () => {
  window.scrollTo(0, 0);
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Home />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Roadmap />
          <Scholarships />
          <Internships />
          <Footer />
        </div>
      </div>
    </div>
  );
};
