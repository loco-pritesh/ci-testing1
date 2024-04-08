import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./frame-component.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.xMLHandlerWrapper}>
      <div className={styles.xMLHandler}>
        <div className={styles.xMLHandlerChild} />
        <div className={styles.jSONHandler}>
          <h2 className={styles.loremIpsum}>Lorem Ipsum</h2>
          <div
            className={styles.loremIpsumIs}
          >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}</div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.archiveHandler}>
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
          <div className={styles.shapeGenerator}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.plugInManager}>
                <div className={styles.enterEmailAddress}>
                  Enter email address
                </div>
              </div>
              <div className={styles.styleEditor}>
                <div className={styles.styleEditorChild} />
                <div className={styles.continue1}>Continue</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
