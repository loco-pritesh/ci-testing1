import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./frame-component4.module.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <section className={styles.decompressor}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.dataGathererIcon}
          loading="lazy"
          alt=""
          src="/rectangle-251@2x.png"
        />
        <div className={styles.shapeContainer}>
          <div className={styles.loremIpsumParent}>
            <div className={styles.loremIpsum}>Lorem ipsum</div>
            <h2
              className={styles.loremIpsumIs}
            >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}</h2>
            <div className={styles.loremIpsumIs1}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
