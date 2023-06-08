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
  const [screen, setScreen] = useState("mobile");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [color, setBackground] = useState(0);
  const background = [
    "#fae1ee",
    "#e0f0ff",
    "#ffede0",
    "#d3d6f0",
    "#ffeae0",
    "#f5f5f7",
  ];
  const [menuClicked, setMenuClicked] = useState(false);

  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY);
  }, []);
  const handleResize = useCallback((setScreen) => {
    setScreen(
      window.innerWidth < 764
        ? "mobile"
        : window.innerWidth < 1112
        ? "tablet"
        : "desktop"
    );
  }, []);

  const handleMouseMove = useCallback(mouseMove, []);
  const handleMouseEnter = useCallback(mouseEnter, []);
  const handleMouseLeave = useCallback(mouseLeave, []);

  useLayoutEffect(() => {
    const innerContainerRef = document.querySelector(".footer-inner-container");
    const mainContainer = document.querySelector(".main-container");

    mainContainer.addEventListener("mousemove", handleMouseMove);

    innerContainerRef.addEventListener("mouseenter", handleMouseEnter);
    innerContainerRef.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      mainContainer.removeEventListener("mousemove", handleMouseMove);

      innerContainerRef.removeEventListener("mouseenter", handleMouseEnter);
      innerContainerRef.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave, handleMouseEnter]);

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
      <Layout
        isClicked={menuClicked}
        setIsClicked={setMenuClicked}
        scroll={scrollPosition}
        screen={screen}
        htmlcss={"yes"}
      >
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
