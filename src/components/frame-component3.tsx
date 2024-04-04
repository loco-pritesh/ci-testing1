import * as React from "react";
import { FunctionComponent, useMemo, type CSSProperties } from "react";
import * as styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  rectangle23?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  rectangle23,
  propPadding,
}) => {
  const featureLabelsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.rectangleParent}>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src={rectangle23}
      />
      <div className={styles.featureLabels} style={featureLabelsStyle}>
        <div className={styles.individualLabelsParent}>
          <div className={styles.individualLabels}>
            <img
              className={styles.fire1Icon}
              loading="lazy"
              alt=""
              src="/fire-1.svg"
            />
          </div>
          <h3 className={styles.followers}>40 Followers</h3>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
