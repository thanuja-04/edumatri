import { card } from "../../assets";
import styles, { layout } from "../../style";
import Button from "./Button";
import { Link } from 'react-router-dom';
import { Route as RouteNames,RoutePrefix } from '../../constants/roots';


const Internships = () => (
  <section id="internships" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Internships Unleash Potential:<br className="sm:block hidden" />  Learn, Apply, Succeed. 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Unlock your capabilities through transformative internships, where learning, application, and success converge for boundless professional growth.
      </p>

      <Link to={`${RoutePrefix}/${RouteNames.intern}`}>
      <Button styles={`mt-10`} />
      </Link>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%] rounded-3xl" />
    </div>
  </section>
);

export default Internships;
