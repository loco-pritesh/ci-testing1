import * as React from "react";
import { FunctionComponent } from "react";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";
import * as styles from "./index.module.css";

const Home: FunctionComponent = () => {
  return (
    <div className={styles.home}>
      <section className={styles.leftContent}>
        <img
          className={styles.preScene61Icon}
          alt=""
          src="/prescene6-1@2x.png"
        />
        <div className={styles.mainContent}>
          <img
            className={styles.joyStick1Icon}
            alt=""
            src="/joy-stick-1@2x.png"
          />
          <img
            className={styles.unreal1Icon}
            loading="lazy"
            alt=""
            src="/unreal-1@2x.png"
          />
          <img
            className={styles.cry1Icon}
            loading="lazy"
            alt=""
            src="/cry-1@2x.png"
          />
        </div>
      </section>
      <FrameComponent4 />
      <div className={styles.dGameDevWrapper}>
        <b className={styles.dGameDev}>{`3D game Dev `}</b>
      </div>
      <div className={styles.services}>
        <div className={styles.servicesDescription}>
          <div className={styles.clientWorkBox}>
            <div className={styles.workThatWeProduceForOurCParent}>
              <h1 className={styles.workThatWe}>
                Work that we produce for our clients
              </h1>
              <div className={styles.loremIpsumIs}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </div>
            </div>
            <button className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.getMoreDetails}>Get more details</div>
            </button>
          </div>
          <img
            className={styles.unity1Icon}
            loading="lazy"
            alt=""
            src="/unity-1@2x.png"
          />
        </div>
      </div>
      <section className={styles.trending}>
        <div className={styles.trendingBox}>
          <h2 className={styles.currentlyTrendingGames}>
            Currently Trending Games
          </h2>
          <button className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.seeAll}>SEE ALL</div>
          </button>
        </div>
      </section>
      <div className={styles.homeChild} />
      <FrameComponent2 />
      <section className={styles.loremIpsumIsSimplyDummyTeWrapper}>
        <h1 className={styles.loremIpsumIs1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h1>
      </section>
      <div className={styles.contentBlocks}>
        <h2 className={styles.loremIpsum}>Lorem Ipsum</h2>
      </div>
      <section className={styles.clientFeedback}>
        <div className={styles.feedbackBox}>
          <div className={styles.loremIpsumIs2}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </div>
          <div className={styles.feedbackSource}>
            <img
              className={styles.feedbackSourceChild}
              loading="lazy"
              alt=""
              src="/group-21.svg"
            />
            <img
              className={styles.feedbackSourceItem}
              alt=""
              src="/rectangle-4@2x.png"
            />
          </div>
        </div>
      </section>
      <FrameComponent1 />
      <div className={styles.projectsTitle}>
        <h2 className={styles.ourRecentProjects}>Our Recent Projects</h2>
      </div>
      <section className={styles.projectDetails}>
        <div
          className={styles.loremIpsumIs3}
        >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}</div>
      </section>
      <section className={styles.contentBlocks1}>
        <div className={styles.rectangleContainer}>
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src="/rectangle-15@2x.png"
          />
          <img
            className={styles.rectangleIcon}
            loading="lazy"
            alt=""
            src="/rectangle-16@2x.png"
          />
          <img
            className={styles.frameChild1}
            loading="lazy"
            alt=""
            src="/rectangle-17@2x.png"
          />
        </div>
      </section>
      <section className={styles.contentBlocks2}>
        <div className={styles.frameDiv}>
          <img
            className={styles.frameChild2}
            loading="lazy"
            alt=""
            src="/rectangle-19@2x.png"
          />
          <img
            className={styles.frameChild3}
            loading="lazy"
            alt=""
            src="/rectangle-18@2x.png"
          />
          <img
            className={styles.frameChild4}
            loading="lazy"
            alt=""
            src="/rectangle-20@2x.png"
          />
        </div>
      </section>
      <div className={styles.viewAllProjects}>
        <button className={styles.groupButton}>
          <div className={styles.rectangleDiv} />
          <div className={styles.seeAll1}>SEE ALL</div>
        </button>
      </div>
      <div className={styles.contentBlocks3}>
        <h2 className={styles.loremIpsum1}>Lorem Ipsum</h2>
      </div>
      <section className={styles.testimonials}>
        <div
          className={styles.loremIpsumIs4}
        >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}</div>
      </section>
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default Home;
