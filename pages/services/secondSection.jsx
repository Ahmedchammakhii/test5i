import style from './sections.module.css'
import { useEffect, useState } from 'react'
import steve from '../../assets/jobs.png'
import Image from 'next/image';
import diag from "../../assets/msg.png"
export const SecondSection = () => {
  const [last, setLast] = useState(2);
  const [middle, setMiddle] = useState(392658);
  const [lastValue, setLastValue] = useState(false);
  const [middleValue, setMiddleValue] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (last <8 ) {
        setTimeout(() =>{setLastValue(true); if (last<10 ) {setLast(last => last + 1)}}, 2000);
        
        setTimeout(() => setLastValue(false), 1800);
      } else {
        setMiddle(middle => middle + 1);
        setMiddleValue(true);
        setTimeout(() => setMiddleValue(false), 1800);
        setLast(0);
      }
      if (last === 9 && middle === 9) {
        setLast(0);
        setMiddle(0)
      }
    }, 2000);
  
    return () => clearInterval(interval);
  }, [last, middle]);

  return (
    <div style={{ position: "relative" }}>
      <div className={style.sectext}>
        <h1>TO WIN, YOU CAN’T BE ONE OF THE</h1>
        <div className={style.text}>
          <h1 id="counter" style={{ fontSize: "250px", color: "#d61378" ,position:"relative"}}>
    1,<span className={middleValue ? `${style.counter} ${style["slide-down"]}` : style.counter} >{middle}</span>
            <span className={lastValue ? `${style.counter} ${style["slide-down"]}` : style.counter} >{last}</span>
          </h1>
          <h2 style={{position:"absolute",right:"200px"}}>APPLE LOOK-A-LIKES</h2>
        </div>
    
        </div>    <div className="img" style={{position:"relative",width:"400px"}}>
<Image  style ={{position:"absolute",left:"60%",bottom:"150px"}}src={steve} alt = "steve"></Image>

<div className="rectangle" style ={{background:"#ffde",position:"absolute",right:"0",bottom:"150px"}} >
<h6  style ={{position:"absolute",right:"-150px",bottom:"95px",width:"150px",color:"grey"}}>Ghost of Steve Jobs</h6>
<Image style ={{position:"absolute",bottom:"50px"}} src={diag} alt="diag"></Image>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",bottom:"50px",position:"absolute",background:"#dae0ef",height:"40px",width:"300px",borderRadius:"36px"}}>Yeah c’mon guys. Think Different.</div>
       </div>
      </div>
    </div>
  );
}