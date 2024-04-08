import * as React from "react";
import { FunctionComponent } from "react";
import GroupComponent1 from "./group-component1";
import * as styles from "./frame-component5.module.css";

const FrameComponent5: FunctionComponent = () => {
  return (
    <section className={styles.aboutUsInner}>
      <div className={styles.whyWorkWithUsParent}>
        <h3 className={styles.whyWorkWith}>Why work with us</h3>
        <div className={styles.frameParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <button className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.loremIpsum}>Lorem ipsum</div>
            </button>
            <div className={styles.loremIpsum1}>Lorem Ipsum</div>
            <div className={styles.loremIpsumIs}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </div>
          </div>
          <GroupComponent1 />
          <GroupComponent1
            propBackgroundColor="rgba(0, 220, 141, 0.11)"
            propBackgroundColor1="rgba(0, 220, 141, 0.11)"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
