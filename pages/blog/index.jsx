import React, { useEffect , useRef} from 'react'
import style from "../blogs/blogs.module.css"
import Header from "../landing/layout/header/header"
import wave from "../../assets/circ.png"

import wave2 from "../../assets/circ2.png"
import Footer from "../landing/layout/footer/footer"
import main from '../../assets/5.png'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image'
const index = () => {
  const ref=useRef(null)
useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger);

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ref.current,
      start: 'top top',
      end:'end end',
      scrub: true,
     
    },
  });

  timeline
    .fromTo("."+style.blogs,{y:0},{y:-200})
    
  let mouse = {
    x: undefined,
    y: undefined
  };
  let posX;
  let posY;
  let degX;
  let degY;
  let sensibility = 10;
  
  document.addEventListener('mousemove', function() {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  
    posX =  ( mouse.x - (window.innerWidth/2) ) / (window.innerWidth/2) * 100;
    posY =  ( mouse.y - (window.innerHeight/2) ) / (window.innerHeight/2) * 100;
  
    degX = posX/sensibility;
    degY = posY/sensibility;
  
    refce.current.style && (refce.current.style.transform = "rotateX("+ -degY +"deg) rotateY("+ degX +"deg) translateZ(-100px)")
  
  
  });
  return () => {
    timeline.kill();
    document.removeEventListener('mousemove')
  };
})
const refce=useRef(null)
  return (
    <>
    <Header></Header>
    
    <Image className={style.wava} src={wave} style={{position:"absolute",left:0,height:"270vh"}}></Image>
    
    {/* <Image src={wave2} style={{opacity:.5,position:"absolute",right:0,height:"270vh"}}></Image> */}
        <div className={`${style.blogs} ${style.aaa}`} ref={ref} >
       
        <main className={style.main} style={{boxShadow:" 0px 1px 0px rgba(17,17,26,0.1), 0px 8px 24px rgba(17,17,26,0.1), 0px 16px 48px rgba(17,17,26,0.1)",background:'#fff',color:"#000",display:"flex",justifyContent:"center",alignItems:"center"}} ref={refce}>
           <h1>TITLE OF THE BLOG</h1> 
           <p  style={{width:"100%",display:"flex",justifyContent:"end"}}>published : 17/5/2022</p>
        </main>
        
        <article style={{width:"90vw",height:"80vh",overflow:"hidden",display:"flex",justifyContent:"center",marginTop:80}}>

          <Image src={main} style={{borderRadius:"3rem"}}></Image>
        </article>
        <div className="details" style={{marginTop:80,display:"flex",justifyContent:"center"}}>
          <p style={{width:"75%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem neque eaque sint aliquam, ullam, quaerat unde, architecto perspiciatis corporis odit voluptas mollitia. Cupiditate necessitatibus officia veniam in a doloremque minima? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed expedita, aliq  uam blanditiis vitae est odio recusandae corrupti distinctio dolores placeat sapiente, velit, dolor consequuntur maxime similique quisquam. Asperiores, aut obcaecati.</p>
        </div>
    </div>
    <Footer></Footer>
    </>)
}

export default index