import { features } from "../../constants";
import styles, { layout } from "../../style";
import { Route as RouteNames,RoutePrefix } from '../../constants/roots';

import { Link } from 'react-router-dom';
import Button from "./Button";



const Prop = ({ icon, title, content, index }) => (
  
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Roadmap = () => (
  <section id="roadmap" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h1 className={styles.heading1}>Year-Wise Roadmap</h1>
      <h2 className={styles.heading2}>
        Strive guided, <br className="sm:block hidden" /> achieve greatness.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Strive with purpose, guided by wisdom and mentorship, to unlock your potential
        and achieve greatness in your academic and professional journey.
      </p>


      <Link to={`${RoutePrefix}/${RouteNames.yearwiseRoadmap}`}>
      <Button styles={`mt-10`} />
      </Link>
      
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <Prop key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);
export default Roadmap;
