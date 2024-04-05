import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./frame-component.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.homeInner}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.stayInTheLoopParent}>
          <h2 className={styles.stayInThe}>Stay in the loop</h2>
          <div className={styles.subscribeToReceiveContainer}>
            <p className={styles.subscribeToReceive}>
              Subscribe to receive the latest news and updates about TDA.
            </p>
            <p
              className={styles.wePromiseNot}
            >{`We promise not to spam you! `}</p>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.enterEmailAddressWrapper}>
              <div className={styles.enterEmailAddress}>
                Enter email address
              </div>
            </div>
            <button className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <div className={styles.continue1}>Continue</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
