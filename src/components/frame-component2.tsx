import * as React from "react";
import { FunctionComponent } from "react";
import FrameComponent3 from "./frame-component3";
import * as styles from "./frame-component2.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className={styles.homeInner}>
      <div className={styles.frameParent}>
        <FrameComponent3 metricIcons="/rectangle-23@2x.png" />
        <FrameComponent3
          metricIcons="/rectangle-24@2x.png"
          propPadding="0px var(--padding-22xl)"
          followersFlex="unset"
          followersAlignSelf="unset"
          followersDisplay="inline-block"
          followersWidth="136px"
        />
        <FrameComponent3
          metricIcons="/rectangle-25@2x.png"
          propPadding="0px var(--padding-22xl)"
          followersFlex="unset"
          followersAlignSelf="stretch"
          followersDisplay="flex"
          followersWidth="136px"
        />
        <FrameComponent3
          metricIcons="/rectangle-26@2x.png"
          propPadding="0px var(--padding-14xl)"
          followersFlex="unset"
          followersAlignSelf="unset"
          followersDisplay="inline-block"
          followersWidth="unset"
        />
      </div>
    </section>
  );
};

export default FrameComponent2;
