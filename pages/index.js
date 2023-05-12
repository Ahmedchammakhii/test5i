import Layout from "./index/layout/layout"
import Sections from "./index/sections/sections";
import How from "./how/how";
import { useState, useRef, useCallback } from "react"
import data from "./index/data";
import { CustomCursor } from "@/sharedComponents/customCursor";
import { screenHandler } from "./index/functions/scroll";
import { cursorHandler, mouseMove, mouseEnter, mouseLeave } from "./index/functions/mouse";

export default function Home() {
  const [screen, setScreen] = useState("mobile");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [color, setBackground] = useState("#fae1ee");
  const [sticky, setSticky] = useState(false);
  const [activeMouse, setActiveMouse] = useState(true);
  const background = ["#fae1ee", "#e0f0ff", "#ffede0", "#d3d6f0", "#ffeae0", "#f5f5f7"];

  const primaryCursor = useRef(null)
  const mainContainer = useRef(null);
  const containerRef = useRef(null);
  const innerContainerRef = useRef(null);
  const innerRef = useRef(null);
  const innerInnerRef = useRef(null);
  const handleScroll = useCallback(() => { setScrollPosition(window.scrollY) }, []);
  const handleResize = useCallback((setScreen) => { setScreen(window.innerWidth < 764 ? "mobile" : window.innerWidth < 1112 ? "tablet" : "desktop") }, []);
  screenHandler(screen, setScreen, setScrollPosition, handleResize, handleScroll)

  const handleMouseMove = useCallback(mouseMove, [])
  const handleMouseEnter = useCallback(mouseEnter, [])
  const handleMouseLeave = useCallback(mouseLeave, [])
  cursorHandler(primaryCursor, mainContainer, containerRef, innerContainerRef, innerRef, innerInnerRef, handleMouseMove, handleMouseEnter, handleMouseLeave)

  return (
    <Layout background={background[color]}
      mainContainer={mainContainer}
      containerRef={containerRef}
      innerContainerRef={innerContainerRef}
      innerRef={innerRef}
      innerInnerRef={innerInnerRef} scroll={scrollPosition} setActiveMouse={setActiveMouse} primaryCursor={primaryCursor} screen={screen}>
      <CustomCursor activeMouse={activeMouse} primaryCursor={primaryCursor} scroll={scrollPosition} />
      <div >
        {data.map((e, i) => <Sections key={i} sticky={sticky} setSticky={setSticky} preLast={i === data.length - 2} last={i + 1 === data.length} screen={screen} scroll={scrollPosition} element={e} index={i} background={background[color]} color={color} setBackground={setBackground} />)}
      </div>
      <How scroll={scrollPosition} background={background[color]} />
    </Layout>
  )
}
