import Header from "./header/header";
import Footer from "./footer/footer";
import React, { useState, useCallback, useEffect, useLayoutEffect } from "react"
import { mouseMove, mouseEnter, mouseLeave } from "@/functions/mouse";

export default function Layout({ children }) {
  const [screen, setScreen] = useState("mobile");
  const [scroll, setScroll] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleScroll = useCallback(() => { setScroll(window.scrollY) }, []);
  const handleResize = useCallback((setScreen) => { setScreen(window.innerWidth < 764 ? "mobile" : window.innerWidth < 1112 ? "tablet" : "desktop") }, []);

  const handleMouseMove = useCallback(mouseMove, [])
  const handleMouseEnter = useCallback(mouseEnter, [])
  const handleMouseLeave = useCallback(mouseLeave, [])

  useLayoutEffect(() => {
    if (screen === "desktop") {
      const innerContainerRef = document.querySelector('.footer-inner-container');
      const mainContainer = document.querySelector('.main-container');
      mainContainer.addEventListener("mousemove", handleMouseMove);

      innerContainerRef.addEventListener("mouseenter", handleMouseEnter);
      innerContainerRef.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        mainContainer.removeEventListener("mousemove", handleMouseMove);

        innerContainerRef.removeEventListener("mouseenter", handleMouseEnter);
        innerContainerRef.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [handleMouseMove, handleMouseLeave, handleMouseEnter, screen]);

  useLayoutEffect(() => {
    handleResize(setScreen);
    window.addEventListener('resize', () => { handleResize(setScreen) });
    window.addEventListener('scroll', () => { handleScroll(setScroll) });

    return () => {
      window.removeEventListener('resize', () => { handleResize(setScreen) });
      window.removeEventListener('scroll', () => { handleScroll(setScroll) });
    };
  }, [screen]);






  const renderChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child, { scroll, screen, isClicked });
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        transition: "background 2s",
      }}
      className="main-container"
    >
      <Header
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        scroll={scroll}
        screen={screen}
      />

      {renderChildren}

      <Footer />
    </div>
  );
}
