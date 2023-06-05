import  FirstSection  from "./firstSection";
import styles from "../../styles/services.module.css"
import Image from "next/image";
import clouds from "../../assets/clouds.png"
import  ThirdSection  from "./ThirdSection";
import  FourthSection  from "./fourthSection";
import {useRef,useEffect} from 'react'
import { gsap } from 'gsap'
import img from "../../assets/web.png"
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Header from '../landing/layout/header/header'

import Footer from '../landing/layout/footer/footer'
export default function services() {
 
  const sectionRef = useRef(null);
  const thirdref=useRef(null)
  const firstRef= useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: thirdref.current,
        start: 'top 50%',
        end:'end end',
        scrub: true,
       
      },
    });
    
    timeline
      .fromTo('.'+styles.blacklayer,{opacity:0},{opacity:1,duration:1,ease:"linear"}
  
      ,"-=2s").to('.'+styles.FourthSection,{borderTopLeftRadius:0,borderTopRightRadius:"0"})})

  return (
    <main className={styles.main} style={{overflow:"hidden"}}>
       <Header scroll={null} screen={null} />
            
      <section className={styles.FirstSection} ref= {firstRef}>
<FirstSection/>
</section>
<section className={styles.ThirdSection} style={{position:"relative"}} ref={sectionRef}>
  <section className={styles.blacklayer}></section>

<ThirdSection/>
</section>
<section className={styles.FourthSection} ref={thirdref}>
<FourthSection/>
</section>
<Footer ></Footer>
    </main>
  );
}
