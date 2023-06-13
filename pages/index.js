
import Layout from "./landing/layout/layout"
import Sections from "./landing/projects/projects";
import How from "./landing/how/how";
import BlackSection from "./landing/black-section/BlackSection"

import { CustomCursor } from "@/sharedComponents/customCursor";
import Hero from "./landing/hero/hero";


export default function Home() {
  return (
    <Layout>
      <Hero />
      <Sections />
      <BlackSection />
      <How />
      <style>{`
            html {
                font-size: calc(0.95rem + 1vw);
                }
            `}</style>
    </Layout>


  )
}
