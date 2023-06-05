import React, { useEffect, useState } from 'react';
import styles from "../login/login.module.css";
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
// import { getSession } from 'next-auth/client';

const initialState = { email: '', password: '' } 
const Login = () => {
  const router = useRouter();
  const[input,setInput]=useState(initialState)
  const [uid, setUid] = useState(null);
  useEffect(()=>{
  
  },[])
  const handleChange = ({ target }) => {
    setInput(prevInput => ({
      ...prevInput,
      [target.name]: target.value
    }));
    console.log(input);
  };

  const handleSubmit = async () => {
    try {
      let response = await axios.post("http://localhost:3000/api/admin/signIn", input);
      // console.log("hiii", login.data);
      
      if (response.data.uid) {
        router.push({
          pathname: '/Dashboard',
          query: { uid: response.data.uid }
        });}
  
    } catch (error) {
      if (error.response) {
        // console.log("Response status:", error.response.code);
        // console.log("Response data:", error.response.data);
        alert('Sign-in error');
      } else if (error.request) {
        // console.log("No response received:", error.request);
        alert("No response received");
      } else {
       alert("Error setting up the request:", error.message);
      }
    }
   
  };

  return (
    <div className={styles.login_page}>
      <div className={styles.form}>
        <form className={styles.login_form}>
          <input type="email" name="email" autoComplete='on' onChange={handleChange} />
          <input type="password" name="password" autoComplete='on' onChange={handleChange} />
          <button type='button' onClick={handleSubmit}>login</button>
        
          {/* <p className={styles.message}>Not registered? <a href="#">Create an account</a></p> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
