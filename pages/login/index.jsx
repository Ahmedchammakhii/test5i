import React, { useEffect, useState } from "react";
import styles from "../login/login.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
// import { getSession } from 'next-auth/client';

const initialState = { email: "", password: "" };
const Login = () => {
  const router = useRouter();
  const [input, setInput] = useState(initialState);
  const [uid, setUid] = useState(null);
  useEffect(() => {}, []);
  const handleChange = ({ target }) => {
    setInput((prevInput) => ({
      ...prevInput,
      [target.name]: target.value,
    }));
    console.log(input);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/admin/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.uid) {
          router.push({
            pathname: "/Dashboard",
            query: { uid: data.uid },
          });
        }
      } else {
        throw new Error("Sign in failed with status: " + response.status);
      }
    } catch (error) {
      console.error("Error signing in", error.message);
    }
  };

  return (
    <div className={styles.login_page}>
      <div className={styles.form}>
        <form className={styles.login_form}>
          <input
            type="email"
            name="email"
            autoComplete="on"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            autoComplete="on"
            onChange={handleChange}
          />
          <button type="button" onClick={handleSubmit}>
            login
          </button>

          {/* <p className={styles.message}>Not registered? <a href="#">Create an account</a></p> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
