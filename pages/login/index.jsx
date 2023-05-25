
import React, { useState } from 'react'
import styles from "../login/login.module.css"
import axios from 'axios'
import { useRouter } from 'next/router';


// const initialState = { email: '', password: '' }



const Login = () => {
const router = useRouter();

  const [email, setEmail] = useState("")
  const [error, setError] = useState('')

  const handleChange = (event) => {
   setEmail(event.target.value)
   console.log(email)
  }
  const handlesubmit = async () => {
    try {
      let logi = await axios.post("http://localhost:3000/api/admin/signIn", {email:email});
      console.log(logi.data)
      router.push('/Dashboard');
      
    } catch (error) {
        if (error.response) {
            console.log("Response status:", error.response.code);
            console.log("Response data:", error.response.data);
            alert ('sign in error')
          } else if (error.request) {
            console.log("No response received:", error.request);
            alert("No response received")
          } else {
            console.log("Error setting up the request:", error.message);
          }
    }
  };
  return (
    
    <div className={styles.login_page}>
      <div className={styles.form}> 
        <form className={styles.login_form}>
          <input type="email" placeholder="email" autoComplete='on' onChange={handleChange}/>
          <input type="password" placeholder="password" autoComplete='on' onChange={handleChange}/>
          <button type='button' onClick={handlesubmit }>login</button>
          {/* <Link href="/Dashboard" type='button' onClick={handlesubmit }>login</Link> */}

          <p className={styles.message}>Not registered? <a href="#">Create an account</a></p>
        </form>
      </div>
    </div>
      
   
    
  )
}

export default Login