import * as React from "react";
import { FunctionComponent, useMemo, type CSSProperties } from "react";
import * as styles from "./group-component11.module.css";

export type GroupComponent1Type = {
  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  propBackgroundColor,
  propBackgroundColor1,
}) => {
  const groupButton1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <button className={styles.rectangleGroup} style={groupButton1Style}>
        <div className={styles.frameItem} style={rectangleDiv1Style} />
        <div className={styles.loremIpsum}>Lorem ipsum</div>
      </button>
      <div className={styles.loremIpsum1}>Lorem Ipsum</div>
      <div className={styles.loremIpsumIs}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </div>
    </div>
  );
};

export default GroupComponent1;
