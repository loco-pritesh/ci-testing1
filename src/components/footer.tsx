import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./footer1.module.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerChild} />
      <div className={styles.footerContent}>
        <div className={styles.frameParent}>
          <div className={styles.aboutUsParent}>
            <div className={styles.aboutUs}>About us</div>
            <div className={styles.zeuxPortfolioCareersContainer}>
              <p className={styles.zeux}>Zeux</p>
              <p className={styles.portfolio}>Portfolio</p>
              <p className={styles.careers}>Careers</p>
              <p className={styles.contactUs}>Contact us</p>
            </div>
          </div>
          <div className={styles.contactInfoArea}>
            <div className={styles.contactDetails}>
              <div className={styles.contactUs1}>Contact us</div>
              <div className={styles.contactAddress}>
                <div
                  className={styles.loremIpsumIs}
                >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}</div>
                <div className={styles.contactInfo}>+908 89097 890</div>
              </div>
            </div>
            <div className={styles.socialIconsArea}>
              <div className={styles.socialIcons}>
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
          <div className={styles.logoParent}>
            <h3 className={styles.logo}>LOGO</h3>
            <div className={styles.loremIpsumIsSimplyDummyTeParent}>
              <div
                className={styles.loremIpsumIs1}
              >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}</div>
              <div className={styles.logo1}>@Logo</div>
            </div>
          </div>
        </div>
        <div className={styles.footerContentChild} />
      </div>
      <div className={styles.copyrightNoticeArea}>
        <div className={styles.copyright2021}>
          Copyright ® 2021 Lorem All rights Rcerved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
