import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerChild} />
      <div className={styles.nestedList}>
        <div className={styles.edgeConnectorWrapper}>
          <div className={styles.edgeConnector}>
            <div className={styles.inputFilter}>
              <div className={styles.outputCollector}>
                <img
                  className={styles.asset21}
                  alt=""
                  src="/asset-2-1@2x.png"
                />
                <div
                  className={styles.loremIpsumIs}
                >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}</div>
                <div className={styles.zeux}>@Zeux</div>
              </div>
            </div>
            <div className={styles.dataComparator}>
              <div className={styles.dataTransformer}>
                <div className={styles.aboutUs}>About us</div>
                <div className={styles.contactUs}>Contact us</div>
              </div>
              <div className={styles.dataMapper}>
                <div className={styles.dataParser}>
                  <div className={styles.zeuxPortfolioCareersContainer}>
                    <p className={styles.zeux1}>Zeux</p>
                    <p className={styles.portfolio}>Portfolio</p>
                    <p className={styles.careers}>Careers</p>
                    <p className={styles.contactUs1}>Contact us</p>
                  </div>
                  <div
                    className={styles.loremIpsumIs1}
                  >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}</div>
                </div>
                <div className={styles.constantProvider}>
                  <div className={styles.variableHolder}>+908 89097 890</div>
                </div>
              </div>
            </div>
            <div className={styles.functionBuilder}>
              <div className={styles.sequenceProcessor}>
                <img
                  className={styles.sequenceProcessorChild}
                  alt=""
                  src="/group-5.svg"
                />
                <img
                  className={styles.sequenceProcessorItem}
                  alt=""
                  src="/group-11.svg"
                />
                <img
                  className={styles.sequenceProcessorInner}
                  alt=""
                  src="/group-10.svg"
                />
                <img className={styles.groupIcon} alt="" src="/group-9.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.queueManager} />
      </div>
      <div className={styles.bufferPool}>
        <div className={styles.copyright2021}>
          Copyright ® 2021 KodeX All rights Rcerved
        </div>
      </div>
    </div>
  );
};

export default Footer;
