import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap' 
import Navbar from './landing/layout/header/header'
import Image from 'next/image'
import img from '../assets/5.png'
import img2 from '../assets/6.png'
import first from "../assets/sec.png"

import left from '../assets/left.png'
import right from "../assets/right.png"

import sec from "../assets/first.png"
const choices = () => {
  const [blur,setblur]=useState('0px')
  const [shown,setshown]=useState('flex')


    useEffect(()=>{
gsap.from(".rightonecontainer",{rotate:180,x:-1000,transition:"all ease 1s"})

gsap.from(".leftonecontainer",{rotate:180,x:1000,transition:"all ease 1s"})
gsap.from(".circle", {rotate:20,scale:0})

    },[])
  return (
    <>
    <div className="navbar" style={{zIndex:100000,position:"absolute"}}>
    <Navbar></Navbar>
    </div>
   <div className="wrapper" style={{position:"absolute",zIndex:80000,height:"100vh",width:"100vw",display:shown,justifyContent:"center",alignItems:"center",overflow:"hidden"}}>
    <div className="circle" style={{flexDirection:"column",gap:"50px",display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",background:"#262626e6"}}>
<h1 style={{color:"#fff",fontWeight:200}}>Fill up the form with your personal informations</h1>
<input required={true} style={{border:0,width:"50%",height:"5%",paddingLeft:10,background:"transparent",marginBottom:5,borderBottom:"1px solid #fff",color:"#fff"}} type="text" placeholder='Name' />
<input required={true} style={{border:0,width:"50%",height:"5%",paddingLeft:10,background:"transparent",marginBottom:5,borderBottom:"1px solid #fff",color:"#fff"}} type="text" placeholder='Last Name' />
<input required={true} style={{border:0,width:"50%",height:"5%",paddingLeft:10,background:"transparent",marginBottom:5,borderBottom:"1px solid #fff",color:"#fff"}} type="email" placeholder='Email' />
<input style={{border:0,width:"50%",height:"5%",paddingLeft:10,background:"transparent",marginBottom:5,borderBottom:"1px solid #fff",color:"#fff"}} type="text" placeholder='Matricule fiscale' />
<button onClick={e=>{setshown("none");setblur("0px")}}>Download our catalogues</button>

    </div>
   </div>
    <div style={{height:"100vh",width:"100vw",background:"#000",display:'flex',filter:`blur(${blur})`}}>
        <div className="rightonecontainer" style={{width:"50%",background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}} onMouseOver={e=>{
            gsap.to(".rightonecontainer",{width:"100%"})
        }} onMouseLeave={e=> {gsap.to(".rightonecontainer",{width:"50%"})
        gsap.to(".thething",{rotate:0})
    
      }}>
<h1 style={{background:"#000",color:"#fff",padding:40,cursor:"grab",zIndex:4}}
onMouseOver={e=>{
  gsap.to(".onhoverimage",{opacity:.2})
}}
onMouseLeave={e=>{
  gsap.to(".onhoverimage",{opacity:0})
}}
>Overview catalogue</h1>
<Image className={"onhoverimage"} src={img} style={{width:"100%",height:"100%",position:"absolute",objectFit:"cover",zIndex:2,opacity:0}} ></Image>

     <Image className='thething' src={first} style={{position:"absolute",right:0,zIndex:3}}></Image>
     <Image className='wave'  src={right} style={{position:"absolute",right:-100,zIndex:2,height:"100%"}}></Image>

        </div>
       
        <div className="leftonecontainer"  onMouseOver={e=>{
            gsap.to(".leftonecontainer",{width:"100%"})
gsap.to(".wave",{x:100})
          }
            } onMouseLeave={e=>{ gsap.to(".leftonecontainer",{width:"50%"})
            gsap.to(".wave",{x:0})

          }
            } style={{width:"50%",color:"#ffff",display:"flex",alignItems:"center",justifyContent:"center",position:'relative'}}>
<h1  style={{background:"#fff",color:"#000",padding:40,cursor:"grab",zIndex:50}}
onMouseOver={e=>{
  gsap.to(".onhoverimage1",{opacity:.2})
 

}}
onMouseLeave={e=>{
  gsap.to(".onhoverimage1",{opacity:0})


}}
>Business catalogue</h1>
<Image className={"onhoverimage1"} src={img2} style={{width:"100%",height:"100%",position:"absolute",objectFit:"cover",zIndex:2,opacity:0}} ></Image>

<Image className='thething' src={sec} style={{position:"absolute",left:0,zIndex:3}}></Image>

        </div>
    </div>
   <style>
    {`
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #fff;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #fff;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: #fff;
}
input:focus {
  outline: none;
}


`}

   </style>
    </>
  )
}

export default choices