import * as React from "react";
import { FunctionComponent } from "react";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent4 from "../components/frame-component41";
import FrameComponent3 from "../components/frame-component31";
import FrameComponent2 from "../components/frame-component21";
import FrameComponent1 from "../components/frame-component11";
import Footer from "../components/footer1";
import FrameComponent from "../components/frame-component7";
import * as styles from "./about-us.module.css";

const AboutUs: FunctionComponent = () => {
  return (
    <div className={styles.aboutUs}>
      <FrameComponent6 />
      <FrameComponent5 />
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <section className={styles.stringConcatenator}>
        <Footer />
        <FrameComponent />
      </section>
    </div>
  );
};

export default AboutUs;
