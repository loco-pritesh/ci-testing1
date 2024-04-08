import * as React from "react";
import { FunctionComponent } from "react";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import Footer from "../components/footer";
import FrameComponent from "../components/frame-component";
import * as styles from "./about-us.module.css";

const AboutUs: FunctionComponent = () => {
  return (
    <div className={styles.aboutUs1}>
      <FrameComponent6 />
      <FrameComponent5 />
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <section className={styles.valueProcessor}>
        <Footer />
        <FrameComponent />
      </section>
    </div>
  );
};

export default AboutUs;
