import * as React from "react";
import { FunctionComponent, useCallback } from "react";
import * as styles from "./frame-component61.module.css";

const FrameComponent6: FunctionComponent = () => {
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
    <section className={styles.logicGate}>
      <header className={styles.logoParent}>
        <h2 className={styles.logo}>LOGO</h2>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.frameContainer}>
              <div className={styles.homeParent}>
                <div className={styles.home}>Home</div>
                <div className={styles.frameGroup}>
                  <div className={styles.aboutUsWrapper}>
                    <div className={styles.aboutUs}>About us</div>
                  </div>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.frameItem} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.nestedContainer}>
              <div className={styles.portfolio} onClick={onPortfolioTextClick}>
                Portfolio
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.newsWrapper}>
                <div className={styles.news} onClick={onNewsTextClick}>
                  News
                </div>
              </div>
              <button
                className={styles.rectangleGroup}
                onClick={onGroupButtonClick}
              >
                <div className={styles.frameInner} />
                <div className={styles.contactUs}>Contact us</div>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.logicGateInner}>
        <div className={styles.frameParent1}>
          <div className={styles.frameWrapper1}>
            <div className={styles.homeAboutUsParent}>
              <div className={styles.homeAboutContainer}>
                <span className={styles.home1}>{`Home   > `}</span>
                <span className={styles.aboutUs1}>About us</span>
              </div>
              <div className={styles.loremIpsumIsSimplyDummyTeParent}>
                <h2 className={styles.loremIpsumIs}>
                  Lorem Ipsum is simply dummy text of the printing and.
                </h2>
                <div className={styles.loremIpsumIs1}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </div>
              <button className={styles.rectangleContainer}>
                <div className={styles.rectangleDiv} />
                <div className={styles.getInTouch}>Get in touch</div>
                <div className={styles.arrow6Wrapper}>
                  <img
                    className={styles.arrow6Icon}
                    alt=""
                    src="/arrow-6.svg"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className={styles.ellipseParent}>
            <div className={styles.ellipseDiv} />
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-6@2x.png"
            />
            <div className={styles.frameWrapper2}>
              <div className={styles.rectangleParent1}>
                <div className={styles.frameChild1} />
                <div className={styles.arrow6Container}>
                  <img
                    className={styles.arrow6Icon1}
                    loading="lazy"
                    alt=""
                    src="/arrow-6-1.svg"
                  />
                </div>
                <div className={styles.arrow7Wrapper}>
                  <img
                    className={styles.arrow7Icon}
                    loading="lazy"
                    alt=""
                    src="/arrow-7.svg"
                  />
                </div>
                <div className={styles.of2}>1 of 2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
