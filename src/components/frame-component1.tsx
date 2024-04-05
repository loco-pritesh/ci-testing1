import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./frame-component1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.formImageContainerParent}>
      <div className={styles.formImageContainer} />
      <div className={styles.frameWrapper}>
        <div className={styles.loremIpsumIsSimplyDummyTeParent}>
          <h2 className={styles.loremIpsumIs}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h2>
          <div className={styles.loremIpsumIsSimplyDummyTeWrapper}>
            <div className={styles.loremIpsumIs1}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobileGameDevelopmentParent}>
        <div className={styles.mobileGameDevelopment}>
          Mobile Game Development
        </div>
        <div className={styles.pcGameDevelopment}>PC Game Development</div>
        <div className={styles.ps4GameDevelopment}>PS4 Game Development</div>
        <div className={styles.arvrSolutions}>AR/VR Solutions</div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.arVrDesignParent}>
          <div className={styles.arVrDesign}>AR/ VR design</div>
          <div className={styles.dModelings}>3D Modelings</div>
        </div>
      </div>
      <div className={styles.db4d123c4b390965f684f22d4bf138Parent}>
        <img
          className={styles.db4d123c4b390965f684f22d4bf138Icon}
          alt=""
          src="/db4d123c4b390965f684f22d4bf13849-1@2x.png"
        />
        <img className={styles.arrow1Icon} alt="" src="/arrow-1.svg" />
        <img className={styles.frameChild} loading="lazy" alt="" />
        <img className={styles.arrow2Icon} alt="" src="/arrow-1.svg" />
        <img className={styles.frameItem} loading="lazy" alt="" />
        <img className={styles.arrow3Icon} alt="" src="/arrow-1.svg" />
        <img className={styles.frameInner} alt="" />
        <img className={styles.arrow4Icon} alt="" src="/arrow-1.svg" />
        <img className={styles.groupIcon} alt="" />
        <img className={styles.arrow5Icon} alt="" src="/arrow-5.svg" />
        <img className={styles.frameChild1} loading="lazy" alt="" />
        <img className={styles.arrow6Icon} alt="" src="/arrow-5.svg" />
        <img className={styles.frameChild2} loading="lazy" alt="" />
      </div>
    </section>
  );
};

export default FrameComponent1;
