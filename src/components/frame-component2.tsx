import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./frame-component2.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className={styles.dataSplitter}>
      <div className={styles.loremIpsumParent}>
        <h2 className={styles.loremIpsum}>Lorem Ipsum</h2>
        <div
          className={styles.loremIpsumIs}
        >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}</div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.outputSplitter}>
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
        <div className={styles.logicEvaluator}>
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

export default FrameComponent2;
