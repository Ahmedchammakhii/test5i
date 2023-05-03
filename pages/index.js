import Layout from "./index/layout/layout"
import { useState, useEffect } from "react"
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

    </Layout>
  )
}
