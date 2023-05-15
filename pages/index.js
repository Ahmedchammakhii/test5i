import Layout from "./index/layout/layout"
import Sections from "./index/sections/sections";
import How from "./how/how";
import { useState, useCallback, useEffect } from "react"
import data from "./index/data";
import { CustomCursor } from "@/sharedComponents/customCursor";
import { screenHandler } from "./index/functions/scroll";
import { cursorHandler, mouseMove, mouseEnter, mouseLeave } from "./index/functions/mouse";

export default function Home() {
  const [screen, setScreen] = useState("mobile");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [sticky, setSticky] = useState(false);
  const [color, setBackground] = useState("#fae1ee");
  const [activeMouse, setActiveMouse] = useState(true);
  const background = ["#fae1ee", "#e0f0ff", "#ffede0", "#d3d6f0", "#ffeae0", "#f5f5f7"];

  const handleScroll = useCallback(() => { setScrollPosition(window.scrollY) }, []);
  const handleResize = useCallback((setScreen) => { setScreen(window.innerWidth < 764 ? "mobile" : window.innerWidth < 1112 ? "tablet" : "desktop") }, []);
  screenHandler(screen, setScreen, setScrollPosition, handleResize, handleScroll)

  const handleMouseMove = useCallback(mouseMove, [])
  const handleMouseEnter = useCallback(mouseEnter, [])
  const handleMouseLeave = useCallback(mouseLeave, [])

  cursorHandler(handleMouseMove, handleMouseEnter, handleMouseLeave);
  useEffect(() => { document.querySelector('html').style.background = background[color] }, [color])

  
  return (
    <Layout
      scroll={scrollPosition} setActiveMouse={setActiveMouse} screen={screen}>
      <CustomCursor activeMouse={activeMouse} />
      <div>{data.map((e, i) => <Sections key={i} sticky={sticky} setSticky={setSticky} preLast={i === data.length - 2} last={i + 1 === data.length} screen={screen} scroll={scrollPosition} element={e} index={i} color={color} setBackground={setBackground} />)}</div>
      <How scroll={scrollPosition} />
    </Layout>
  )
}
