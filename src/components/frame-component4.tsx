import * as React from "react";
import { FunctionComponent, useCallback } from "react";
import { navigate } from "gatsby";
import * as styles from "./frame-component4.module.css";

const FrameComponent4: FunctionComponent = () => {
  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
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
    <header className={styles.rightContent}>
      <div className={styles.companyInfo}>
        <div className={styles.logoBox}>
          <h2 className={styles.logo}>LOGO</h2>
        </div>
        <div className={styles.navigationLinks}>
          <div className={styles.navigation1}>
            <div className={styles.homeLink}>
              <div className={styles.home}>Home</div>
            </div>
            <div className={styles.contactLink}>
              <div className={styles.socialIcons} />
              <div className={styles.socialIcons1} />
            </div>
          </div>
        </div>
        <nav className={styles.infoLinks}>
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
        <div className={styles.socialMedia}>
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
