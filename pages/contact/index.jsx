import React, { useState, useRef } from 'react';
import styles from "./contact.module.css";
import emo from "../../assets/emo1.png";
import Image from 'next/image';
import axios from 'axios';
import Header from '../landing/layout/header/header';
import Footer from '../landing/layout/footer/footer'
const Contact = () => {
  const needs = ["Branding", "Web design", "site from scratch", "UI/UX", "Web animation", "Application design", "Html/css", "clothes conception", "Branding1", "Web design1", "site from scratch1", "UI/UX1",];
  const budget = ["15-30k", "30-40k", '40-70k', "70-100k", "+100k"];
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userNeeds, setUserNeeds] = useState([]);
  const [userBudget, setUserBudget] = useState("")


  const handleContact = async () => {
    let user = { fin: firstName, ln: lastName, email: email,needs:userNeeds,budget:userBudget }
    console.log(user)
    try {
      let response = await axios.post('http://localhost:3000/api/clients/add/client', user);
      console.log(response)
      alert("request sent successfully")
      setFirstName("");
      setLastName("");
      setEmail("");
      setUserNeeds([]);
      setUserBudget("");
    }
    catch (e) {
      console.log({ message: e })
    }
  }


  function handleInputChange(event) {
    const inputId = event.target.id;
    if (inputId === 'first') {
      const value = event.target.value;
      setFirstName(value);
      console.log('Input 1 value:', firstName);
    } else if (inputId === 'last') {
      const value = event.target.value;
      setLastName(value);
      console.log('Input 2 value:', lastName);
    } else if (inputId === 'email') {
      const value = event.target.value;
      setEmail(value)
      console.log('Input 3 value:', email);
    }
  }

  const addNeed = (need) => {
    setUserNeeds([...userNeeds, need]);
    console.log(userNeeds);
  };
   const fileInputRef = useRef(null);

  const handleUpload = async () => {
    const file = fileInputRef.current.files[0];
    const fileUrl = URL.createObjectURL(file);
    if (file) {
      try {

        console.log('Selected file:', file);
        console.log('url', fileUrl);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    } else {
      console.log('No file selected.');
    }
  };



  return (
    <div className={styles.page}>
<Header></Header>
      <div className={styles.contactContainer}>
        <h3>We are always happy to help!  <Image src={emo} alt="" style={{ width: "50px", height: "50px" }}></Image></h3>

        <div className={styles.getin}><h1>Get in touch!  </h1></div>
        <div > <h3>I need</h3> </div>
        <div className={styles.cerclescontainer}>
          {needs.map((need) => (
            <div key={need} className={styles.cercle}>
              <button type='button' onClick={() => addNeed(need)} > {need}</button>
            </div>
          ))}

        </div>
        <div className={styles.contactForm}>
          <div> <input id="first" type="text" placeholder="Your first name" onChange={handleInputChange}></input> <div className={styles.line}></div></div>
          <div><input id="last" type="text" placeholder='Your last name' onChange={handleInputChange}></input><div className={styles.line}></div></div>
          <div><input id="email" type="email" placeholder='Your email' onChange={handleInputChange}></input><div className={styles.line} id="li"></div></div>
        </div>
        <div className={styles.attachement}>
          <div> <input type="file" style={{ display: 'none' }} ref={fileInputRef} onChange={handleUpload} />

            <button type="button" onClick={() => fileInputRef.current.click()}>add attachement</button></div>
        </div>
        <div className={styles.title}><h3>Budget (USD)</h3></div>
        <div className={styles.budcont}>

          {budget.map((e) => (
            <div key={e} className={styles.cercle}>
              <button type='button' onClick={()=>{setUserBudget(e)
              console.log("budget",userBudget);}}>{e}</button>
            </div>

          ))}
        </div>
        <div className={styles.attachement}>
          <div className={styles.sendcont}><button type='button' onClick={handleContact}>Send request</button></div>
        </div>
      </div>

    </div>
  )
}
export default Contact