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
    <>
      <main className={styles.main_container}>
        <div className={styles.login_wrapper}>
          <div className={styles.left_container}>
            <div className={styles.header}>
              <a className="arrow" href="#">
                ←
              </a>
              <a className="register" href="#">
                Register
              </a>
            </div>
            <div className={styles.main} style={{ position: "relative" }}>
              <img
                className={styles.line}
                src="https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640528a303087c65a9603d30_underline-green.svg"
                style={{ position: "absolute", transform: "scale(.2)" }}
              ></img>
              <h2>Login</h2>

              <p>
                Welcome! Please fill your email to sign in into your dashboard
              </p>

              <form>
                <input
                  type="email"
                  name="mail"
                  placeholder="Type your email"
                  onChange={handleChange}
                />
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <CustomButton
                    label="login"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                  ></CustomButton>{" "}
                </div>
                <span className={styles.line} />
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
