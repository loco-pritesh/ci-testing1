import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./frame-component111.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.processorChain}>
          <div className={styles.inputSequence}>
            <div className={styles.outputSequence}>
              <div className={styles.functionSequence}>
                <h3 className={styles.logo}>LOGO</h3>
                <div className={styles.conditionStack}>
                  <div
                    className={styles.loremIpsumIs}
                  >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}</div>
                  <div className={styles.lorem}>@Lorem</div>
                </div>
              </div>
              <div className={styles.outputSequenceInner}>
                <div className={styles.functionSequenceParent}>
                  <div className={styles.functionSequence1}>
                    <div className={styles.aboutUs}>About us</div>
                    <div className={styles.zeuxPortfolioCareersContainer}>
                      <p className={styles.zeux}>Zeux</p>
                      <p className={styles.portfolio}>Portfolio</p>
                      <p className={styles.careers}>Careers</p>
                      <p className={styles.contactUs}>Contact us</p>
                    </div>
                  </div>
                  <div className={styles.operatorStack}>
                    <div className={styles.connectionStack}>
                      <div className={styles.contactUs1}>Contact us</div>
                      <div className={styles.storageQueue}>
                        <div
                          className={styles.loremIpsumIs1}
                        >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}</div>
                        <div className={styles.splitterQueue}>
                          +908 89097 890
                        </div>
                      </div>
                    </div>
                    <div className={styles.mergerQueue}>
                      <div className={styles.evaluatorQueue}>
                        <div className={styles.wrapperGroup5}>
                          <img
                            className={styles.wrapperGroup5Child}
                            loading="lazy"
                            alt=""
                            src="/group-5.svg"
                          />
                        </div>
                        <div className={styles.wrapperGroup11}>
                          <img
                            className={styles.wrapperGroup11Child}
                            loading="lazy"
                            alt=""
                            src="/group-11.svg"
                          />
                        </div>
                        <div className={styles.wrapperGroup10}>
                          <img
                            className={styles.wrapperGroup10Child}
                            loading="lazy"
                            alt=""
                            src="/group-10.svg"
                          />
                        </div>
                        <div className={styles.wrapperGroup9}>
                          <img
                            className={styles.wrapperGroup9Child}
                            loading="lazy"
                            alt=""
                            src="/group-9.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dataAggregator} />
        </div>
        <div className={styles.conditionSplitter}>
          <div className={styles.copyright2021}>
            Copyright ® 2021 Lorem All rights Rcerved
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FrameComponent1;
