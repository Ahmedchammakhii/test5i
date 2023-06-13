import Mouse from "./menu-mouse"
import { useRef } from "react";
import { useRouter } from "next/router";


export default function Menu({ isClicked }) {
    const router = useRouter()
    const menuMouse = useRef(null)
    const parallax = function (event) {
        const { clientX, clientY } = event;
        const link = event.currentTarget.children[0];
        const container = event.currentTarget;
        const containerRect = container.getBoundingClientRect();

        const minTranslateX = -containerRect.width / 15;
        const maxTranslateX = containerRect.width / 15;
        const minTranslateY = -containerRect.height / 5;
        const maxTranslateY = containerRect.height / 5;

        const linkRect = link.getBoundingClientRect();
        const linkCenterX = linkRect.left + linkRect.width / 2;
        const linkCenterY = linkRect.top + linkRect.height / 2;

        let translateX = clientX - linkCenterX;
        let translateY = clientY - linkCenterY;

        if (translateX < minTranslateX) {
            translateX = minTranslateX;
        } else if (translateX > maxTranslateX) {
            translateX = maxTranslateX;
        }

        if (translateY < minTranslateY) {
            translateY = minTranslateY;
        } else if (translateY > maxTranslateY) {
            translateY = maxTranslateY;
        }

        link.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
    };
    const menuLinkLeave = function (event) {
        event.currentTarget.children[0].style.transform = "none"
        event.currentTarget.children[0].style.color = "#6e6e73"

        menuMouse.current.style.background = "black"
        menuMouse.current.style.width = "12px"
        menuMouse.current.style.height = "12px"
        menuMouse.current.style.mixBlendMode = "normal"
        menuMouse.current.children[0].textContent = ""

    }
    const menuLinkEnter = function (event) {
        event.currentTarget.children[0].style.color = "black"
        menuMouse.current.style.background = "#fff";
        menuMouse.current.style.width = "2.5em";
        menuMouse.current.style.height = "2.5em";
        menuMouse.current.style.mixBlendMode = "difference";
    }
    const socialEnter = function (event) {
        menuMouse.current.style.background = "#fff";
        menuMouse.current.style.width = "2em";
        menuMouse.current.style.height = "2em";
        menuMouse.current.style.mixBlendMode = "difference";
    }
    const emailEnter = function (event) {
        event.currentTarget.children[0].style.color = "black"
        menuMouse.current.style.width = "2em";
        menuMouse.current.style.height = "2em";
        menuMouse.current.children[0].textContent = "Copie"
    }
    const emailClick = function () {
        navigator.clipboard.writeText("info@info.co")
            .then(() => {
                menuMouse.current.children[0].textContent = "Copied ✔"
            })
            .catch((error) => {
                console.error("Error copying text to clipboard:", error);
            });
    }

    return (
        <div
            onMouseMove={(event) => {
                const { clientX, clientY } = event;
                menuMouse.current.style.transform = `translate3d(${clientX -
                    menuMouse.current.clientWidth / 2}px, ${clientY -
                    menuMouse.current.clientHeight / 2}px, 0)`;
            }}
            className="G_father_container" style={{ zIndex: 1000, pointerEvents: isClicked ? "auto" : "none" }}>
            <div className="father_container" style={{ width: isClicked ? "200%" : "0", height: isClicked ? "500%" : "0" }}>

                <div className="container" style={{ opacity: isClicked ? 1 : 0, transition: "opacity 0.5s", position: "absolute", left: "-25%" }}>
                    <div className="menu">

                        <div className="left_side">
                            <div className="menu_title" >get in touch</div>
                            <div
                                onMouseMove={parallax}
                                onMouseLeave={menuLinkLeave}
                                onMouseEnter={emailEnter}
                                onClick={emailClick}>
                                <div className="parallax-child" style={{}}>info@info.com</div></div>
                            <div className="menu_title" style={{ marginTop: "30px" }}>social</div>
                            <div
                                onMouseMove={parallax}
                                onMouseLeave={menuLinkLeave}
                                onMouseEnter={socialEnter}
                            >
                                <div className="parallax-child" style={{}} >facebook</div>
                            </div>
                            <div
                                onMouseMove={parallax}
                                onMouseLeave={menuLinkLeave}
                                onMouseEnter={socialEnter}
                            >
                                <div className="parallax-child" style={{}} >instagram</div>
                            </div>
                            <div
                                onMouseMove={parallax}
                                onMouseLeave={menuLinkLeave}
                                onMouseEnter={socialEnter}
                            >
                                <div className="parallax-child" style={{}} >linkedin</div>
                            </div>
                            <div
                                onMouseMove={parallax}
                                onMouseLeave={menuLinkLeave}
                                onMouseEnter={socialEnter}
                            >
                                <div className="parallax-child" style={{}} >github</div>
                            </div>
                        </div>

                        <div className="right_side" style={{ fontSize: "2.4rem", marginLeft: "-2.4rem" }}>
                            <div className="menu_title"  >menu</div>
                            <div
                                onMouseMove={parallax}
                                onMouseLeave={menuLinkLeave}
                                onMouseEnter={menuLinkEnter} onClick={() => router.push("/services")} style={{ fontSize: "1.26rem" }} >
                                <div className="parallax-child">Services</div>
                            </div>
                            <div onMouseMove={parallax}
                                onMouseLeave={menuLinkLeave}
                                onMouseEnter={menuLinkEnter}
                                onClick={() => router.push("/blogs")} style={{ fontSize: "1.26rem" }}>
                                <div className="parallax-child">Blogs</div>
                            </div>
                            <div onMouseMove={parallax}
                                onMouseLeave={menuLinkLeave}
                                onMouseEnter={menuLinkEnter}
                                onClick={() => router.push("/contact")} style={{ fontSize: "1.26rem" }}>
                                <div className="parallax-child">Contact</div>
                            </div>
                            <div onMouseMove={parallax}
                                onMouseLeave={menuLinkLeave}
                                onMouseEnter={menuLinkEnter}
                                onClick={() => router.push("/choices")} style={{ fontSize: "1.26rem", display: "flex", justifyContent: "center" }}>
                                <div className="parallax-child">Catalogues</div>
                            </div>
                            <div className="mobile_button">
                                Estimate Project
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            {isClicked ? <Mouse menuMouse={menuMouse} /> : null}

            <style>{`
        .G_father_container { height: calc(100vh + 80px); width: 100%; margin-top: -80px; overflow: hidden; position: fixed; background: transparent; }
        .father_container { background: white; transition: 0.6s; float: right; border-bottom-left-radius: 100% } 
        .container { width: 50%; margin-left: 50%; height: calc(100vh + 80px); margin-top: 80px; display: flex; justify-content: center; align-items: center }
        .menu { width: 50%; display: flex; justify-content: center; gap: 170px; }
        .menu_title { font-size: 0.38rem; font-weight: 500;}
        .left_side {  cursor: pointer; font-size: 0.42rem;color: #6e6e73;font-weight: 600;line-height: 3;margin-top: -20%;}
        .right_side { cursor: pointer;  font-weight: 500; color: #6e6e73; line-height: 1.8; margin-top: -20%;}
        .mobile_button { background-color: #3398ff; color: white; border-radius: 50px; font-size: 20px; width: 80vw; height: 60px;  align-items: center; justify-content: center; margin-top: 60px; display : none; }
        .parallax-child {pointer-events: none; transition: transform 0.4s linear}
        .menu_links {padding-left: 2.4rem}

        `}</style>
        </div>
    )
}
