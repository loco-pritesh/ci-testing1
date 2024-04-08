import * as React from "react";
import { FunctionComponent } from "react";
import FrameComponent3 from "./frame-component3";
import * as styles from "./frame-component21.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className={styles.gameFeatures}>
      <div className={styles.featureBlocks}>
        <FrameComponent3 rectangle23="/rectangle-23@2x.png" />
        <FrameComponent3
          rectangle23="/rectangle-24@2x.png"
          propPadding="0px var(--padding-22xl)"
        />
        <FrameComponent3
          rectangle23="/rectangle-25@2x.png"
          propPadding="0px var(--padding-22xl)"
        />
        <FrameComponent3
          rectangle23="/rectangle-26@2x.png"
          propPadding="0px var(--padding-14xl)"
        />
      </div>
    </section>
  );
};

export default FrameComponent2;
