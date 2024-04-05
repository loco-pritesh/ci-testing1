import * as React from "react";
import { FunctionComponent, useMemo, type CSSProperties } from "react";
import * as styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  metricIcons?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  followersFlex?: CSSProperties["flex"];
  followersAlignSelf?: CSSProperties["alignSelf"];
  followersDisplay?: CSSProperties["display"];
  followersWidth?: CSSProperties["width"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  metricIcons,
  propPadding,
  followersFlex,
  followersAlignSelf,
  followersDisplay,
  followersWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const followersStyle: CSSProperties = useMemo(() => {
    return {
      flex: followersFlex,
      alignSelf: followersAlignSelf,
      display: followersDisplay,
      width: followersWidth,
    };
  }, [followersFlex, followersAlignSelf, followersDisplay, followersWidth]);

  return (
    <div className={styles.metricIconsParent}>
      <img
        className={styles.metricIcons}
        loading="lazy"
        alt=""
        src={metricIcons}
      />
      <div className={styles.frameWrapper} style={frameDivStyle}>
        <div className={styles.frameParent}>
          <div className={styles.fire1Wrapper}>
            <img
              className={styles.fire1Icon}
              loading="lazy"
              alt=""
              src="/fire-1.svg"
            />
          </div>
          <a
            className={styles.followers}
            href="https://www.google.com"
            target="_blank"
            style={followersStyle}
          >
            40 Followers
          </a>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
