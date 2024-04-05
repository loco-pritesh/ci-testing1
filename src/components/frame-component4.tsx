import * as React from "react";
import { FunctionComponent, useCallback } from "react";
import * as styles from "./frame-component4.module.css";

const FrameComponent4: FunctionComponent = () => {
  const onAboutUsTextClick = useCallback(() => {
    // Please sync "About us" to the project
  }, []);

  const onPortfolioTextClick = useCallback(() => {
    // Please sync "Services" to the project
  }, []);

  const onNewsTextClick = useCallback(() => {
    // Please sync "News" to the project
  }, []);

  const onGroupButtonClick = useCallback(() => {
    // Please sync "Contact us" to the project
  }, []);

  return (
    <header className={styles.homeInner}>
      <div className={styles.frameParent}>
        <div className={styles.logoWrapper}>
          <h2 className={styles.logo}>LOGO</h2>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.homeWrapper}>
              <div className={styles.home}>Home</div>
            </div>
            <div className={styles.iconPairParent}>
              <div className={styles.iconPair} />
              <div className={styles.iconPair1} />
            </div>
          </div>
        </div>
        <nav className={styles.frameContainer}>
          <nav className={styles.aboutUsParent}>
            <div className={styles.aboutUs} onClick={onAboutUsTextClick}>
              About us
            </div>
            <div className={styles.portfolio} onClick={onPortfolioTextClick}>
              Portfolio
            </div>
            <div className={styles.news} onClick={onNewsTextClick}>
              News
            </div>
          </nav>
        </nav>
        <div className={styles.frameDiv}>
          <button
            className={styles.rectangleParent}
            onClick={onGroupButtonClick}
          >
            <div className={styles.frameChild} />
            <div className={styles.contactUs}>Contact us</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent4;
