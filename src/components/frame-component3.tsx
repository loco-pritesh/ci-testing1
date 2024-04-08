import * as React from "react";
import { FunctionComponent } from "react";
import GroupComponent from "./group-component";
import * as styles from "./frame-component31.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <section className={styles.functionCall}>
      <h3 className={styles.ourTeam}>Our Team</h3>
      <div className={styles.frameParent}>
        <GroupComponent bill1="/bill-1@2x.png" />
        <GroupComponent
          bill1="/beverly-1@2x.png"
          propPadding="var(--padding-22xl) var(--padding-xl) var(--padding-11xl)"
          propGap="unset"
          propWidth="117px"
          propHeight="117px"
          propPadding1="0px var(--padding-7xs) 0px var(--padding-6xs)"
        />
        <div className={styles.frameGroup}>
          <GroupComponent
            bill1="/claudia-1@2x.png"
            propPadding="var(--padding-26xl) var(--padding-xl) var(--padding-11xl)"
            propGap="4px"
            propWidth="109px"
            propHeight="109px"
            propPadding1="0px var(--padding-11xs) 0px var(--padding-10xs)"
          />
          <GroupComponent
            bill1="/avatar-1@2x.png"
            propPadding="var(--padding-28xl) var(--padding-xl) var(--padding-11xl) var(--padding-2xl)"
            propGap="5px"
            propWidth="106px"
            propHeight="106px"
            propPadding1="0px var(--padding-12xs)"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
