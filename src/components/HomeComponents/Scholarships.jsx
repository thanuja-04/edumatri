import {bill } from "../../assets";
import styles, { layout } from "../../style";
import Button from "./Button";

import { Link } from 'react-router-dom';
import { Route as RouteNames,RoutePrefix } from '../../constants/roots';

const Scholarships = () => (
  <section id="scholarships" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5] rounded-3xl" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div> 

    <div className={layout.sectionInfo}>
      <h1 className={styles.heading1}>Scholarships</h1>
      <h2 className={styles.heading2}>
      Crafting Futures: <br className="sm:block hidden" /> Scholarships for Visionaries.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Empower your vision. Scholarships unlocking futures for innovative minds, fostering change and advancing knowledge.
      </p>

      <Link to={`${RoutePrefix}/${RouteNames.scholar}`}>
      <Button styles={`mt-10`} />
      </Link>
    </div>

    
  </section>
);

export default Scholarships;
