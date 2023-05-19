import React from 'react'
import styles from "./contact.module.css"
import emo from "../../assets/emo.png"
import Image from 'next/image'
 const Contact = () => {
    const needs=["Branding","Web design","site from scratch","UI/UX","Web animation","Application design","Html/css","clothes conception","Branding","Web design","site from scratch","UI/UX",]
    const budget=["15-30k","30-40k",'40-70k',"70-100k","+100k"]
    return (
    <div className={styles.page}>
       
        <div className={styles.contactContainer}>
        <h3>We are always happy to help!</h3><span><div className={styles.emo}><Image src={emo} style={{width:'50px',height:"50px"}}></Image></div></span>
        
        <div className={styles.getin}><h1>Get in touch!  </h1></div>
       <div > <h3>I need</h3> </div>
        <div className={styles.cerclescontainer}>
         {needs.map((need) => (
          <div key={need} className={styles.cercle}>
           <button type='button'> {need}</button>
          </div>
        ))}
        
        </div>
        <div className={styles.contactForm}>
           <div> <input type="text" placeholder="Your name"></input> <div className={styles.line}></div></div>
          
            <div><input type="text" placeholder='Your email'></input><div className={styles.line}></div></div>
            <div><input type="text" placeholder='your number'></input><div className={styles.line} ></div></div>
        </div>
        <div className={styles.attachement}>
            <div><button>add attachement</button></div>
        </div>
        <div className={styles.title}><h3>Budget (USD)</h3></div>
        <div className={styles.budcont}>
        
        {budget.map((e) => (
            <div key={e} className={styles.cercle}>
              <button>{e}</button>
            </div>

          ))}
        </div>
        <div className={styles.attachement}>
            <div className={styles.sendcont}><button>Send request</button></div>
        </div>
        </div>
        
    </div>
  )
}
export default Contact