import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import Navbar from "./landing/layout/header/header";
import Image from "next/image";
import img from "../assets/5.png";
import img2 from "../assets/6.png";
import first from "../assets/sec.png";

import left from "../assets/left.png";
import right from "../assets/right.png";

import sec from "../assets/first.png";
import CustomButton from "./contact/components/CustomButton";
import Layout from "./landing/layout/layout";
import { CustomCursor } from "@/sharedComponents/customCursor";

const choices = () => {
  const [blur, setblur] = useState("0px");
  const [shown, setshown] = useState("none");
  const [inputs, setinputs] = useState({
    name: "",
    last: "",
    matr: "",
    email: "",
    catalogue: null,
  });
  useEffect(() => {
    gsap.from(".rightonecontainer", {
      rotate: 180,
      x: -1000,
      transition: "all ease 1s",
    });

    gsap.from(".leftonecontainer", {
      rotate: 180,
      x: 1000,
      transition: "all ease 1s",
    });
    gsap.from(".circle", { rotate: 20, scale: 0 });
    if (window.innerWidth < 516) {
      gsap.to(".thething", { rotate: 90 });
      gsap.set(".wave", { visibility: "hidden" });
    }
  }, []);
  return (
    <>
      <Layout>
        <div
          className="wrapper"
          style={{
            position: "absolute",
            zIndex: 80000,
            height: "100vh",
            width: "100vw",
            display: shown,
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <div
            className="circle"
            style={{
              flexDirection: "column",
              gap: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
              background: "rgba(196,198,202,.8)",
              overflow: "hidden",
            }}
          >
            <h1 style={{ color: "#000", fontWeight: 200, textAlign: "center" }}>
              Fill up the form with your personal informations
            </h1>
            <input
              onChange={(e) =>
                setinputs((inputs) => ({ ...inputs, name: e.target.value }))
              }
              required={true}
              style={{
                border: 0,
                width: "50%",
                height: "5%",
                paddingLeft: 10,
                background: "transparent",
                marginBottom: 5,
                borderBottom: "1px solid #fff",
                color: "#000",
              }}
              type="text"
              placeholder="Name"
            />
            <input
              onChange={(e) =>
                setinputs((inputs) => ({ ...inputs, last: e.target.value }))
              }
              required={true}
              style={{
                border: 0,
                width: "50%",
                height: "5%",
                paddingLeft: 10,
                background: "transparent",
                marginBottom: 5,
                borderBottom: "1px solid #fff",
                color: "#000",
              }}
              type="text"
              placeholder="Last Name"
            />
            <input
              onChange={(e) =>
                setinputs((inputs) => ({ ...inputs, email: e.target.value }))
              }
              required={true}
              style={{
                border: 0,
                width: "50%",
                height: "5%",
                paddingLeft: 10,
                background: "transparent",
                marginBottom: 5,
                borderBottom: "1px solid #fff",
                color: "#000",
              }}
              type="email"
              placeholder="Email"
            />
            <input
              onChange={(e) =>
                setinputs((inputs) => ({ ...inputs, matr: e.target.value }))
              }
              style={{
                border: 0,
                width: "50%",
                height: "5%",
                paddingLeft: 10,
                background: "transparent",
                marginBottom: 5,
                borderBottom: "1px solid #fff",
                color: "#000",
              }}
              type="text"
              placeholder="Matricule fiscale"
            />
            <CustomButton
              key={"btn01558"}
              label={"Download"}
              onClick={() => {
                setshown("none");
                setblur("0px");
              }}
            />
          </div>
        </div>
        <div
          className="flexcontainer"
          style={{
            height: "100vh",
            width: "100vw",
            background: "#000",
            display: "flex",
            filter: `blur(${blur})`,
          }}
        >
          <div
            className="rightonecontainer"
            style={{
              width: "50%",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              transition: "all ease 1s",
            }}
            onMouseOver={(e) => {
              if (window.innerWidth > 516) {
                gsap.to(".rightonecontainer", { width: "100%" });
              } else {
                gsap.to(".rightonecontainer", { width: "100%" });

                gsap.to(".rightonecontainer", { height: "100%" });
              }
            }}
            onMouseLeave={(e) => {
              if (window.innerWidth > 516) {
                gsap.to(".rightonecontainer", { width: "50%" });
              } else {
                gsap.to(".rightonecontainer", { width: "50%" });

                gsap.to(".rightonecontainer", { height: "50%" });
              }
            }}
          >
            <h1
              style={{
                background: "#000",
                color: "#fff",
                padding: 40,
                cursor: "grab",
                zIndex: 4,
                textAlign: "center",
              }}
              onMouseOver={(e) => {
                gsap.to(".onhoverimage", { opacity: 0.2 });
              }}
              onMouseLeave={(e) => {
                gsap.to(".onhoverimage", { opacity: 0 });
              }}
              onClick={(e) => {
                setshown("flex");
                setblur("2px");
                setinputs((inputs) => ({ ...inputs, catalogue: 1 }));
              }}
            >
              Overview catalogue
            </h1>
            <Image
              className={"onhoverimage"}
              src={img}
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                objectFit: "cover",
                zIndex: 2,
                opacity: 0,
              }}
            ></Image>

            <Image
              className="thething"
              src={first}
              style={{
                position: "absolute",
                right: 0,
                zIndex: 3,
                aspectRatio: "auto",
              }}
            ></Image>
            <Image
              className="wave"
              src={right}
              style={{
                position: "absolute",
                right: -100,
                zIndex: 2,
                height: "100%",
              }}
            ></Image>
          </div>

          <div
            className="leftonecontainer"
            onMouseOver={(e) => {
              gsap.to(".leftonecontainer", { width: "100%" });
            }}
            onMouseLeave={(e) => {
              gsap.to(".leftonecontainer", { width: "50%" });
              gsap.to(".wave", { x: 0 });
            }}
            style={{
              width: "50%",
              color: "#ffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <h1
              style={{
                background: "#fff",
                color: "#000",
                padding: 40,
                cursor: "grab",
                zIndex: 50,
                textAlign: "center",
              }}
              onMouseOver={(e) => {
                gsap.to(".onhoverimage1", { opacity: 0.2 });
              }}
              onMouseLeave={(e) => {
                gsap.to(".onhoverimage1", { opacity: 0 });
              }}
              onClick={(e) => {
                setshown("flex");
                setblur("2px");
                setinputs((inputs) => ({ ...inputs, catalogue: 2 }));
              }}
            >
              Business catalogue
            </h1>
            <Image
              className={"onhoverimage1"}
              src={img2}
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                objectFit: "cover",
                zIndex: 2,
                opacity: 0,
              }}
            ></Image>

            <Image
              className="thething"
              src={sec}
              style={{
                position: "absolute",
                left: 0,
                zIndex: 3,
                aspectRatio: "auto",
              }}
            ></Image>
          </div>
        </div>
        <style>
          {`
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #000;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #000;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: #000;
}
input:focus {
  outline: none;
}
@media screen and (max-width:516px){
  .flexcontainer {
   flex-direction:column;
  justify-content:center;
  align-items:center;
  background:#fff
  }
  .rightonecontainer{
    height:50%;
    width:100%!important

    
}
.leftonecontainer{
  height:50%;
  width:100% !important 
}
}
`}
        </style>
      </Layout>
    </>
  );
};

export default choices;
