import * as React from "react";
import { FunctionComponent, useMemo, type CSSProperties } from "react";
import * as styles from "./group-component2.module.css";

export type GroupComponentType = {
  bill1?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propPadding1?: CSSProperties["padding"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  bill1,
  propPadding,
  propGap,
  propWidth,
  propHeight,
  propPadding1,
}) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  const bill1Icon1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={styles.rectangleParent} style={groupDiv1Style}>
      <div className={styles.frameChild} />
      <img
        className={styles.bill1Icon}
        loading="lazy"
        alt=""
        src={bill1}
        style={bill1Icon1Style}
      />
      <div className={styles.frameWrapper} style={frameDivStyle}>
        <div className={styles.johnPeterParent}>
          <div className={styles.johnPeter}>John peter</div>
          <div className={styles.cooWrapper}>
            <div className={styles.coo}>COO</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
