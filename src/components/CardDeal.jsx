import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Internships Unleash Potential:<br className="sm:block hidden" />  Learn, Apply, Succeed. 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Unlock your capabilities through transformative internships, where learning, application, and success converge for boundless professional growth.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%] rounded-3xl" />
    </div>
  </section>
);

export default CardDeal;
