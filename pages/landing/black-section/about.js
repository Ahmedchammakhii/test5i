import React, { useEffect, useRef } from 'react'

export default function About({ container, leftContainer, rightContainer }) {


    return (
        <div>

            <div style={{ display: "flex", position: "absolute", zIndex: 5 }}>
                <div style={{ width: "45%", height: "500px", marginTop: "14%" }}>
                    <h1 style={{ fontWeight: "500", fontSize: "50px", color: "white", position: "relative", left: "20%" }}>About</h1>
                </div>
                <div style={{ width: "75%", marginTop: "14%", display: "flex", justifyContent: "center" }}>
                    <div style={{ fontSize: "1.58em", fontWeight: "400", color: "white", lineHeight: "2.1", color: "#808080", width: "80%" }}>
                        We elevate  <span style={{
                            backgroundImage: 'url(https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640528a303087c65a9603d30_underline-green.svg)',
                            backgroundPosition: "50% 100%",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain", color: "white", paddingBottom: "15px"
                        }}>phenomenal</span>  solutions for growth by translating their future potential into a strategic brand narrative and authentic digital presence.
                    </div>
                </div>
            </div>
            <div style={{ height: "100vh" }} />
            <div ref={container} style={{ height: "100vh", display: "flex", marginTop: "14%", overflow: "hidden", paddingTop: "50px" }}>
                <div ref={leftContainer} style={{
                    willChange: "transform",
                    width: "calc(69% / 2)", position: "relative", transformStyle: "preserve-3d",
                    transform: "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-0deg) skew(0deg, 0deg)",
                }}>
                    <img alt="#" style={{
                        borderRadius: "60px",
                        objectFit: "cover",
                        height: "80vh",
                        width: "15em",
                        position: "absolute",
                        maxHeight: "22.5em",
                        right: "15px",
                        top: "7px",
                    }} src={"https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1e9294c46d4ca88d0fc3_card1-p-800.jpg"} />
                    <img alt="#" style={{
                        willChange: "transform",
                        borderRadius: "60px",
                        objectFit: "cover",
                        height: "80vh",
                        width: "15em",
                        position: "absolute",
                        maxHeight: "22.5em",
                        left: "-35px",
                        transform: 'translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-15deg) skew(0deg, 0deg)',
                    }} src={"https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1d0ee5569e00035865a5_sc3-p-800.jpg"} />
                </div>
                <div style={{ width: "31%", color: "white", textAlign: "center", display: "flex", alignItems: "center", flexDirection: "column", marginTop: "3%" }}>
                    <h1 style={{ width: "80%", textAlign: "center", fontWeight: "500", fontSize: "90px", color: "#d9d9d9" }}>
                        We’re
                        Shaping
                        Industry
                    </h1>
                    <h2 style={{ border: "3px solid brown", borderRadius: "100%", height: "200px", width: "200px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "9%" }}>ICON</h2>
                </div>
                <div ref={rightContainer} style={{
                    willChange: "transform",
                    width: "calc(69% / 2)",
                    position: "relative", transformStyle: "preserve-3d",
                    position: "relative",
                }}>
                    <img alt="#" style={{
                        borderRadius: "60px",
                        objectFit: "cover",
                        height: "80vh",
                        width: "15em",
                        position: "absolute",
                        maxHeight: "22.5em",
                        left: "15px",
                        top: "7px",

                    }} src={"https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/642071c9b4f0d2f23c0d0fd3_stewart-maclean-Zs1WKNa4Oy0-unsplash-p-800.jpg"} />
                    <img alt="#" style={{
                        willChange: "transform",
                        borderRadius: "60px",
                        objectFit: "cover",
                        height: "80vh",
                        width: "15em",
                        position: "absolute",
                        maxHeight: "22.5em",
                        right: "-35px",
                        transform: 'translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(15deg) skew(0deg, 0deg)',
                    }} src={"https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1e9cc0fb34d5e7819b2f_card2-p-800.jpg"} />
                </div>
            </div>
        </div>
    )
}
