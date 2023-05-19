

import React, { useEffect, useRef } from 'react';
import styles from './sections.module.css';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import img from '../../assets/3.png';

export const FirstSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const gridBlocks = section.querySelectorAll('.' + styles.gridBlock + ':not(.' + styles.centerBlock + ')');
    const gridLayer = section.querySelectorAll('.' + styles.gridLayer);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => window.innerHeight * 5,
        scrub: true,
        pin: '.' + styles.grid,
        anticipatePin: 1,
      },
    });

    timeline
      .to(gridBlocks, { duration: 0.1, autoAlpha: 1 }, 0.001)
      .fromTo(
        gridLayer,
        { scale: 1.2, ease: 'none',duration:.5 },
        { scale:2, ease: 'none',duration:.5}
       
      ).to(".textheader",{
top:"40%",
right:"22%",
ease:"power3.out",
color:"#fff",
fontSize:35,
width:"60%",  
webkitTextStrokeColor:"#000",
webkitTextStrokeWidth:".4px",
duration:.05,
background:'#000',
zIndex:3

      },0)

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <>
      <div className={styles.grid_container} ref={sectionRef}>
        <div className={styles.grid}>
        <p style={{transform:"rotate(-90deg)",position:"absolute",top:200,color:"#000",fontSize:40,margin:0,padding:0}}>services</p>
        <h1 className='textheader' style={{zIndex:-3,fontSize:"20px",color:"#000",position:"absolute",right:"-150px",top:200,width:"30%",textAlign:"center",fontWeight:"500"}}>Branding, design concept &
web developments, we've got
everything covered.</h1>
          <div className={styles.gridLayer}>
            <div className={styles.gridBlock}></div>
          </div>
          <div className={styles.gridLayer}>
            <div className={styles.gridBlock}></div>
          </div>
          <div className={styles.gridLayer}>
            <div className={styles.gridBlock}></div>
          </div>
          <div className={`${styles.gridLayer} ${styles.centerPiece}`}>
            <div className={`${styles.gridBlock} ${styles.centerBlock}`}>
     

            </div>
          </div>
    
         
          <div className={styles.gridLayer}>
            <div className={styles.gridBlock}></div>
          </div>
        </div>
      </div>
    </>
  );
};
