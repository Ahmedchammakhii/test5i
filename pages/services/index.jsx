import FirstSection from "./firstSection";
import styles from "../../styles/services.module.css";
import Image from "next/image";
import clouds from "../../assets/clouds.png";
import ThirdSection from "./ThirdSection";
import FourthSection from "./fourthSection";
import { gsap } from "gsap";
import img from "../../assets/web.png";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Layout from "../landing/layout/layout";

import {
  useState,
  useRef,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
import { CustomCursor } from "@/sharedComponents/customCursor";
import { mouseMove, mouseEnter, mouseLeave } from "../../functions/mouse";

export default function services() {
  const sectionRef = useRef(null);
  const thirdref = useRef(null);
  const firstRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: thirdref.current,
        start: "top 50%",
        end: "end end",
        scrub: true,
      },
    });

    timeline
      .fromTo(
        "." + styles.blacklayer,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "linear" },

        "-=2s"
      )
      .to("." + styles.FourthSection, {
        borderTopLeftRadius: 0,
        borderTopRightRadius: "0",
      });
  });

  return (
    <main className={styles.main} style={{ overflow: "hidden" }}>
      <Layout>
        <CustomCursor />

        <section className={styles.FirstSection} ref={firstRef}>
          <div
            className="veilNoise"
            style={{
              background:
                "url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png)",
              width: "200vw",
              height: "100vh",
              position: "fixed",
              top: "0",
              transition: "opacity 1s",
              pointerEvents: "none",
            }}
          />

          <FirstSection />
        </section>
        <section
          className={styles.ThirdSection}
          style={{ position: "relative" }}
          ref={sectionRef}
        >
          <section className={styles.blacklayer}></section>

          <ThirdSection />
        </section>
        <section className={styles.FourthSection} ref={thirdref}>
          <FourthSection />
        </section>
      </Layout>
    </main>
  );
}
