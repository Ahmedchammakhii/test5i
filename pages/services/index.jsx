import { FirstSection } from "./firstSection";
import { SecondSection } from "./secondSection";
import styles from "../../styles/services.module.css"
import Image from "next/image";
import clouds from "../../assets/clouds.png"
import { ThirdSection } from "./ThirdSection";
import { FourthSection } from "./fourthSection";
import {useRef,useEffect} from 'react'
import { gsap } from 'gsap'
import img from "../../assets/web.png"
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
export default function services() {
 
  const sectionRef = useRef(null);

  const firstRef= useRef(null);
  
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end:'end end',
        scrub: true,
       
      },
    });

    timeline
      .fromTo(
        "."+styles.ThirdSection,{background: " linear-gradient(180deg,rgba(36, 0, 26, 0) 0%,rgb(255, 224, 224) 30%,rgba(255, 234, 224, 0) 50%)",transition:"all ease 2s"},{  background:
          " linear-gradient(180deg,rgba(36, 0, 26, 0) 0%,rgb(255, 224, 224) 30%,rgba(255, 234, 224, 0) 100%)",transition:"all ease 2s"})
      
    return () => {
      timeline.kill();
    };
  }, []);
  return (
    <main className={styles.main} style={{overflow:"hidden"}}>
      <section className={styles.FirstSection} ref={firstRef}>
<FirstSection/>
</section>
<section className={styles.SecondSection} >
<SecondSection/>
</section>
<section className={styles.ThirdSection}ref={sectionRef}>
<ThirdSection/>
</section>
<section className={styles.FourthSection}>
<FourthSection/>
</section>
    </main>
  );
}
