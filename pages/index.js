import Layout from "./index/layout/layout"
import Sections from "./index/sections/sections";
import How from "./how/how";
import { useState, useEffect, useRef } from "react"
import data from "./index/data";

export default function Home() {
  const [screen, setScreen] = useState("mobile");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [color, setBackground] = useState("#fae1ee");
  const [sticky, setSticky] = useState(false);
  const background = ["#fae1ee", "#e0f0ff", "#ffede0", "#d3d6f0", "#ffeae0"];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 764) {
        setScreen("mobile");
      } else if (window.innerWidth > 764 && window.innerWidth < 1112) {
        setScreen("tablet");
      } else if (window.innerWidth > 1112)
        setScreen("desktop");
    }
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }
    handleResize()
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [screen]);



  return (
    <Layout screen={screen}>
      <div >
        {data.map((e, i) => <Sections key={i} sticky={sticky} setSticky={setSticky} preLast={i === data.length - 2} last={i + 1 === data.length} screen={screen} scroll={scrollPosition} element={e} index={i} background={background[color]} color={color} setBackground={setBackground} />)}
      </div>
      <How scroll={scrollPosition} background={background[color]} />
    </Layout>
  )
}
