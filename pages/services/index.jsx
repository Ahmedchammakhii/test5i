import { FirstSection } from "./firstSection";
import styles from "../../styles/services.module.css"
import Image from "next/image";
import clouds from "../../assets/clouds.png"
import { ThirdSection } from "./ThirdSection";
import { FourthSection } from "./fourthSection";
import {useRef,useEffect} from 'react'
import { gsap } from 'gsap'
import img from "../../assets/web.png"
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Header from '../landing/layout/header/header'

import Footer from '../landing/layout/footer/footer'
export default function services() {
 
  const sectionRef = useRef(null);

  const firstRef= useRef(null);
  
  

  return (
    <main className={styles.main} style={{overflow:"hidden"}}>
       <Header scroll={null} screen={null} />
            
      <section className={styles.FirstSection} ref= {firstRef}>
<FirstSection/>
</section>

<section className={styles.ThirdSection}ref={sectionRef}>
<ThirdSection/>
</section>
<section className={styles.FourthSection}>
<FourthSection/>
</section>
<Footer ></Footer>
    </main>
  );
}
