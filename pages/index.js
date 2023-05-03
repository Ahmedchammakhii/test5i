import Layout from "./index/layout/layout"
import Sections from "./index/sections/sections";
import { useState, useEffect } from "react"
import Mask from "./index/mask/mask";
import data from "./index/data";
export default function Home() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 764);
    }
    setIsMobile(window.innerWidth < 764);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);
  return (
    <Layout isMobile={isMobile}>
      <Mask />
      {data.map((e, i) => <Sections img={e.img} index={i} />)}
    </Layout>
  )
}
