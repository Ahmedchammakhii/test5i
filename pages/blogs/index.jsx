import React, { useEffect , useRef} from 'react'
import style from "./blogs.module.css"
import Header from "../landing/layout/header/header"

import Footer from "../landing/layout/footer/footer"
import main from "../../assets/5.png"
import Image from 'next/image'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

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
    <div className={style.blogs} ref={ref}>
       
        <main className={style.main} ref={refce}>
           <h1>BLOGS</h1>
           <p>Filters</p>
           <div className={style.allbuttons}  style={{display:"flex",justifyContent:"space-between"}} >
           <div className={style.buttons} style={{display:"flex",gap:"10px"}}>
           <button className={style.selected}>All (20)</button>
           <button>Announcements</button>
           <button>News</button></div>
           <div className="searchbutton">
            <p style={{fontSize:".7rem",marginBottom:"5px"}}>Search for a blog</p>
            <input placeholder='i want to read about ...' className={style.inputa}></input>
           </div>
           </div>
        </main>
        <div className={style.displayblogs}>
 <div className={style.firstimage} >
 <a href="/blog" style={{color:"#000"}}> <div className={style.blogdetails}>
    <h1 style={{background:"#fff",borderRadius:"3rem",width:"max-content",borderBottomLeftRadius:0,padding:20,borderBottomRightRadius:'0',borderTopRightRadius:"20rem 3rem",textAlign:"center",fontSize:"2.3rvw"}}>5i on red carpet</h1>
<p style={{color:"GrayText",background:"#fff",borderRadius:"2rem",marginTop:"-25px",paddingTop:"10px",padding:20,borderTopLeftRadius:0}}>{"Lorem ipsum dolor sit amet consectetur adipisicing elit. In adipisci quam vero ratione eos repellendus debitis beatae dolores, nemo, totam eveniet amet! Repellat animi, quia adipisci officiis accusantium aperiam sequi.".slice(0,80)+"..."}</p>
  <p style={{background:"#fff",borderRadius:"3rem",width:"max-content",padding:10,marginTop:"-25px",borderTopLeftRadius:0,borderBottomRightRadius:"15rem 2rem"}}>23 mai 2022</p>
  </div></a>
        </div>
        
        <div className={style.secimage} >
        <div className={style.blogdetails}>
    <h1 style={{background:"#fff",borderRadius:"3rem",width:"max-content",borderBottomLeftRadius:0,padding:20,borderBottomRightRadius:'0',borderTopRightRadius:"20rem 3rem"}}>5i on red carpet</h1>
<p style={{color:"GrayText",background:"#fff",borderRadius:"2rem",marginTop:"-25px",paddingTop:"10px",padding:20,borderTopLeftRadius:0}}>{"Lorem ipsum dolor sit amet consectetur adipisicing elit. In adipisci quam vero ratione eos repellendus debitis beatae dolores, nemo, totam eveniet amet! Repellat animi, quia adipisci officiis accusantium aperiam sequi.".slice(0,80)+"..."}</p>
  <p style={{background:"#fff",borderRadius:"3rem",width:"max-content",padding:10,marginTop:"-25px",borderTopLeftRadius:0,borderBottomRightRadius:"15rem 2rem"}}>23 mai 2022</p>
  </div>
        </div>
        </div>
       <div className={style.listingblogs}>
        <div className={style.oneblog} style={{}}> <div className={style.blogdetails}>
    <h1 style={{background:"#fff",borderRadius:"3rem",width:"max-content",borderBottomLeftRadius:0,padding:15,borderBottomRightRadius:'5rem',borderTopRightRadius:"20rem 3rem"}}>5i on red carpet</h1>
<p style={{color:"GrayText",background:"#fff",borderRadius:"2rem",marginTop:"-25px",paddingTop:"10px",padding:20,borderTopLeftRadius:0}}>e eos repellendus debitis beatae dolores, nemo, totam eveniet amet! Repellat animi, quia adipisci officiis accusantium aperiam sequi.</p>
  <p style={{background:"#fff",borderRadius:"3rem",width:"max-content",padding:10,marginTop:"-25px",borderTopLeftRadius:0,borderBottomRightRadius:"15rem 2rem"}}>23 mai 2022</p>
  </div></div>
        
        <div className={style.oneblog} style={{background:"#000"}}> <div className={style.blogdetails}>
    <h1 style={{background:"#fff",borderRadius:"3rem",width:"max-content",borderBottomLeftRadius:0,padding:15,borderBottomRightRadius:'5rem',borderTopRightRadius:"20rem 3rem"}}>5i on red carpet</h1>
<p style={{color:"GrayText",background:"#fff",borderRadius:"2rem",marginTop:"-25px",paddingTop:"10px",padding:20,borderTopLeftRadius:0}}>mo, totam eveniet amet! Repellat animi, quia adipisci officiis accusantium aperiam sequi.</p>
  <p style={{background:"#fff",borderRadius:"3rem",width:"max-content",padding:10,marginTop:"-25px",borderTopLeftRadius:0,borderBottomRightRadius:"15rem 2rem"}}>23 mai 2022</p>
  </div></div>
        <div className={style.oneblog} style={{background:"#dfb7e7"}}> <div className={style.blogdetails} >
    <h1 style={{background:"#fff",borderRadius:"3rem",width:"max-content",borderBottomLeftRadius:0,padding:15,borderBottomRightRadius:'5rem',borderTopRightRadius:"20rem 3rem"}}>5i on red</h1>
<p style={{color:"GrayText",background:"#fff",borderRadius:"2rem",marginTop:"-25px",paddingTop:"10px",padding:20,borderTopLeftRadius:0}}>mi, quia adipisci officiis accusantium aperiam sequi.</p>
  <p style={{background:"#fff",borderRadius:"3rem",width:"max-content",padding:10,marginTop:"-25px",borderTopLeftRadius:0,borderBottomRightRadius:"15rem 2rem"}}>23 mai 2022</p>
  </div></div>       <div className={style.oneblog} style={{}}> <div className={style.blogdetails}>
    <h1 style={{background:"#fff",borderRadius:"3rem",width:"max-content",borderBottomLeftRadius:0,padding:15,borderBottomRightRadius:'5rem',borderTopRightRadius:"20rem 3rem"}}>5i on red carpet</h1>
<p style={{color:"GrayText",background:"#fff",borderRadius:"2rem",marginTop:"-25px",paddingTop:"10px",padding:20,borderTopLeftRadius:0}}>e eos repellendus debitis beatae dolores, nemo, totam eveniet amet! Repellat animi, quia adipisci officiis accusantium aperiam sequi.</p>
  <p style={{background:"#fff",borderRadius:"3rem",width:"max-content",padding:10,marginTop:"-25px",borderTopLeftRadius:0,borderBottomRightRadius:"15rem 2rem"}}>23 mai 2022</p>
  </div></div>
        
        <div className={style.oneblog} style={{background:"#000"}}> <div className={style.blogdetails}>
    <h1 style={{background:"#fff",borderRadius:"3rem",width:"max-content",borderBottomLeftRadius:0,padding:15,borderBottomRightRadius:'5rem',borderTopRightRadius:"20rem 3rem"}}>5i on red carpet</h1>
<p style={{color:"GrayText",background:"#fff",borderRadius:"2rem",marginTop:"-25px",paddingTop:"10px",padding:20,borderTopLeftRadius:0}}>mo, totam eveniet amet! Repellat animi, quia adipisci officiis accusantium aperiam sequi.</p>
  <p style={{background:"#fff",borderRadius:"3rem",width:"max-content",padding:10,marginTop:"-25px",borderTopLeftRadius:0,borderBottomRightRadius:"15rem 2rem"}}>23 mai 2022</p>
  </div></div>
        <div className={style.oneblog} style={{background:"#dfb7e7"}}> <div className={style.blogdetails} >
    <h1 style={{background:"#fff",borderRadius:"3rem",width:"max-content",borderBottomLeftRadius:0,padding:15,borderBottomRightRadius:'5rem',borderTopRightRadius:"20rem 3rem"}}>5i on red</h1>
<p style={{color:"GrayText",background:"#fff",borderRadius:"2rem",marginTop:"-25px",paddingTop:"10px",padding:20,borderTopLeftRadius:0}}>mi, quia adipisci officiis accusantium aperiam sequi.</p>
  <p style={{background:"#fff",borderRadius:"3rem",width:"max-content",padding:10,marginTop:"-25px",borderTopLeftRadius:0,borderBottomRightRadius:"15rem 2rem"}}>23 mai 2022</p>
  </div></div>
        </div> 
   
    </div>
    <Footer></Footer>
    </>)
}

export default index