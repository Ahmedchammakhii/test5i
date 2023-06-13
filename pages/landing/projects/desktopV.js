import data from "@/data/landing/projects"

import { useEffect, useCallback, useRef } from "react"
import { projectMouseEnter, projectMouseLeave } from "../../../functions/mouse"

export default function DesktopV({ screen, scroll }) {
    const container = useRef(null)
    const leftContainer = useRef(null)
    const rightContainer = useRef(null)
    const scrollTrigger = (ref, f, values, Start, End) => {
        const start = container.current.offsetTop + innerHeight
        const end = start + container.current.clientHeight - innerHeight

        const cursor = document.querySelector('.primary-cursor').style
        if (scroll <= end + innerHeight && scroll >= end - ((innerHeight - (innerWidth * 0.3)) / 10) && cursor.width !== "10px") {
            cursor.width = "10px"
            cursor.height = "10px"
            document.getElementsByClassName("cursor-click")[0].textContent = ""
        } else if (start - (innerHeight - (innerWidth * 0.3)) >= scroll && cursor.width !== "10px") {
            cursor.width = "10px"
            cursor.height = "10px"
            document.getElementsByClassName("cursor-click")[0].textContent = ""
        }
        const percentages = []
        if (start > window.scrollY && ref.current.store) {
            for (let i = 0; values.length > i; i++) {
                percentages.push(values[i][0])
            }
            f(percentages, ref.current)
            ref.current.store = false
        } else if (window.scrollY > end && ref.current.store) {
            for (let i = 0; values.length > i; i++) {
                percentages.push(values[i][1])
            }
            f(percentages, ref.current);
            ref.current.store = false
        }
        if (window.scrollY <= end && start <= window.scrollY) {
            for (let i = 0; values.length > i; i++) {
                percentages.push((((window.scrollY - start) / (end - start)) * ((values[i][1]) - (values[i][0]))) + (values[i][0]))
            }
            f(percentages, ref.current)
            if (!ref.current.store) {
                ref.current.store = true
            }
        }

    }
    const mousE = useCallback(projectMouseEnter, []);
    const mouseL = useCallback(projectMouseLeave, []);

    useEffect(() => {

        scrollTrigger(container, (v) => {
            const index = parseInt(((v[1] * (data.length - 1)) / 100))




            if (index + 0.5 < ((v[1] * (data.length - 1)) / 100) && data[index + 1] && document.querySelector('.main-container').style.background !== data[index + 1].background) {
                document.querySelector('.main-container').style.background = data[index + 1].background
                document.getElementsByClassName("primary-cursor")[0].style.background = data[index + 1].color

            } else if (index + 0.5 > ((v[1] * (data.length - 1)) / 100) && document.querySelector('.main-container').style.background !== data[index].background) {
                document.querySelector('.main-container').style.background = data[index].background
                document.getElementsByClassName("primary-cursor")[0].style.background = data[index].color
            }

            const children = leftContainer.current.children
            for (let i = 0; children.length > i; i++) {
                children[i].style.transform = `translateY(-${v[0]}px)`
            }

            if (screen !== "mobile") {

                const imgs = rightContainer.current.children

                imgs[index].style.clipPath = `inset(0px 0px ${v[1] * (data.length - 1) - (index * 100)}%)`

                if (index && imgs[index - 1].style.clipPath !== "inset(0px 0px 100%)") {
                    imgs[index - 1].style.clipPath = "inset(0px 0px 100%)"
                } else if (index < data.length - 2 && imgs[index + 1].style.clipPath !== "inset(0px 0px 0%)") {
                    imgs[index + 1].style.clipPath = "inset(0px 0px 0%)"
                }

            }
        }, [[0, ((data.length - 1) * (innerHeight * 0.9))], [0, 100], [40, 60]])



    }, [scroll]);

    const styles = {
        h1: { fontSize: "1.302rem", fontWeight: "500", },
        h2: { fontSize: "0.45rem", fontWeight: "300", },
        btn_container: { width: "250px", display: "flex", justifyContent: "center", alignItems: "center", top: 0, height: "150px", position: "relative", transform: "translateX(calc(clamp(-100px, -10vw, -150px) / 2))" },
        btn: { cursor: "pointer", position: "relative", overflow: "hidden", transition: "0.8s", fontSize: "0.48rem", width: "clamp(100px, 10vw, 150px)", height: "clamp(50px, 3vw, 55px)", borderRadius: "50px", background: "transparent" },
        btn_wrapper: { width: "100%", height: "100%", background: "black", color: "white", position: "absolute", transform: "translate(-50%,-50%)", top: "-50%", left: "50%", transition: "0.6s", borderRadius: "100%", pointerEvents: "none", zIndex: -1 },
        dark_btn: { transition: "1s", color: "black", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "100%", },
        lignt_btn: { transition: "1s", color: "transparent", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "100%", marginTop: "30px" },
        contentWrapper: { marginTop: 0, position: "relative", display: "flex", justifyContent: "center" },
        wrapper: { width: "80%", height: `${data.length * 600 + (600 / 2)}px`, position: "relative", zIndex: 1 },
        container: { position: "sticky", top: "0", width: "100%", height: "100vh", zIndex: 1, overflow: "hidden", display: "flex" },
        left_wrapper: { width: "50%", height: "100%", position: "relative" },
        left_container: { width: "100%", position: "relative", transform: `translateY(calc(-90vh / 2))`, top: '50%' },
        left_content_wrapper: { position: "relative", height: "90vh", display: "flex", justifyContent: "center", flexDirection: "column" },
        left_child_wrapper: { width: screen === "tablet" ? "70%" : "50%", float: "right", position: "relative", marginLeft: "50%", transform: "translateX(-50%)" },
        right_wrapper: { width: "50%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" },
        right_container: { width: "30vw", height: "30vw", position: "relative", gap: 0 },
        img: { cursor: "none", objectFit: "cover", width: "100%", height: "100%", position: "absolute", borderRadius: "50px" },
    };

    return (
        <div ref={container} style={styles.contentWrapper}>

            <div style={styles.wrapper}>
                <div style={styles.container}>
                    <div style={styles.left_wrapper} >
                        <div ref={leftContainer} style={styles.left_container}>
                            {data.map((e, i) => {
                                return <div key={i} style={styles.left_content_wrapper}>
                                    <div style={styles.left_child_wrapper} >
                                        <h2 style={{ ...styles.h2, color: e.color }}>{e.link}</h2>
                                        <h1 style={styles.h1}>{e.t1}</h1>
                                        <p style={{
                                            fontSize: "0.45rem",
                                        }}>Branding, Website, Design, Development</p>
                                        <div onMouseEnter={mousE} onMouseLeave={mouseL} className="project-container" style={styles.btn_container}>
                                            <button style={{ ...styles.btn, border: `1px solid ${e.border}`, }}>
                                                <div style={styles.btn_wrapper} />
                                                <div style={styles.dark_btn}>View more</div>
                                                <div style={styles.lignt_btn}>View more</div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>

                    </div>
                    <div style={styles.right_wrapper}><div ref={rightContainer} style={styles.right_container}>{data.map((e, i) => <img
                        onMouseLeave={(event) => {
                            if ((!event.target.style.clipPath && i === 0) || (event.target.style.clipPath && i === data.length - 1) || (i === 0 && event.target.style.clipPath === "inset(0px 0px 0%)")) {
                                document.getElementsByClassName("primary-cursor")[0].style.width = "10px"
                                document.getElementsByClassName("primary-cursor")[0].style.height = "10px"
                                document.getElementsByClassName("primary-cursor")[0].style.opacity = 1
                                document.getElementsByClassName("cursor-click")[0].textContent = ""
                            } else {
                                scrollTrigger(container, (v) => {
                                    const index = parseInt(((v[1] * (data.length - 1)) / 100))

                                    if (index + 0.5 < ((v[1] * (data.length - 1)) / 100) && data[index + 1] && document.querySelector('.main-container').style.background !== data[index + 1].background) {
                                        document.getElementsByClassName("primary-cursor")[0].style.background = data[index + 1].color
                                    } else if (index + 0.5 > ((v[1] * (data.length - 1)) / 100) && document.querySelector('.main-container').style.background !== data[index].background) {
                                        document.getElementsByClassName("primary-cursor")[0].style.background = data[index].color
                                    }
                                    document.getElementsByClassName("primary-cursor")[0].style.width = "10px"
                                    document.getElementsByClassName("primary-cursor")[0].style.height = "10px"
                                    document.getElementsByClassName("primary-cursor")[0].style.opacity = 1
                                    document.getElementsByClassName("cursor-click")[0].textContent = ""

                                }, [[0, ((data.length - 1) * (innerHeight * 0.9))], [0, 100]])

                            }
                        }}
                        onMouseEnter={() => {
                            document.getElementsByClassName("cursor-click")[0].textContent = "Click"
                            document.getElementsByClassName("primary-cursor")[0].style.background = e.color
                            document.getElementsByClassName("primary-cursor")[0].style.width = "80px"
                            document.getElementsByClassName("primary-cursor")[0].style.height = "80px"
                            document.getElementsByClassName("primary-cursor")[0].style.opacity = 0.9
                            document.getElementsByClassName("cursor-click")[0].textContent = "Click"
                            document.getElementsByClassName("cursor-click")[0].style.color = "white"

                        }} onMouseMove={() => {
                            if (document.getElementsByClassName("primary-cursor")[0].style.height !== "80px") {
                                document.getElementsByClassName("cursor-click")[0].textContent = "Click"
                                document.getElementsByClassName("primary-cursor")[0].style.background = e.color
                                document.getElementsByClassName("primary-cursor")[0].style.width = "80px"
                                document.getElementsByClassName("primary-cursor")[0].style.height = "80px"
                                document.getElementsByClassName("primary-cursor")[0].style.opacity = 0.9
                                document.getElementsByClassName("cursor-click")[0].textContent = "Click"
                                document.getElementsByClassName("cursor-click")[0].style.color = "white"

                            }
                        }}
                        key={i} style={{ ...styles.img, zIndex: 5 - i }} src={e.img} />)} </div> </div>
                </div>
            </div>
        </div>
    )
}