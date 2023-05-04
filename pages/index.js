import Layout from "./index/layout/layout"
import Sections from "./index/sections/sections";
import { useState, useEffect } from "react"
import data from "./index/data";
export default function Home() {
  const [isMobile, setIsMobile] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 764);
    }
    function handleScroll() {
      setScrollPosition(window.scrollY);

    }
    setIsMobile(window.innerWidth < 764);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);
  return (
    <Layout isMobile={isMobile}>
      {data.map((e, i) => <Sections key={i} scroll={scrollPosition} img={e.img} index={i} />)}
    </Layout>
  )
}
