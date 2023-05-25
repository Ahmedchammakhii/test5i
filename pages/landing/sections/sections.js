import Section from "./component"
const data = [
    {
        t1: "Beauty brand, e-commerce",
        link: "Vimcosmo.com",
        tags: ["Branding", " Website", " Design", " Development"],
        img: "https://deveb.co/static/media/vim.2c5e9ce4.jpg",
        border: "#fea5d3",
        color: "#e985b4",
        background: "#fae1ee"
    }, {
        t1: "Furniture brand, Online store",
        link: "DopeGood.com",
        tags: ["Branding", " Website", " Design", " Development"],
        img: "https://deveb.co/static/media/newdopegood.6e57b4b4.jpg",
        border: "#a6d4ff",
        color: "#78a9d9",
        background: "#e0f0ff"
    }, {
        t1: "Architectural design studio",
        link: "AM-ARC.com",
        tags: ["Branding", " Website", " Design", " Development"],
        img: "https://deveb.co/static/media/am-arc.0bba8786.jpg",
        border: "#f2ab79",
        color: "#f2ab79",
        background: "#ffede0"
    }, {
        t1: "NFT digital marketplace",
        link: "Dopop.net",
        tags: ["Branding", " Website", " Design", " Development"],
        img: "https://deveb.co/static/media/dopop2.3974e9e7.jpg",
        border: "#a6afff",
        color: "#7781d9",
        background: "#d3d6f0"
    }, {
        t1: "Furniture brand, e-commerce",
        link: "Old.DopeGood.com",
        tags: ["Branding", " Website", " Design", " Development"],
        img: "https://deveb.co/static/media/dopegood.b2cad70d.jpg",
        border: "#ffb18c",
        color: "#ffb18c",
        background: "#ffeae0"
    },
]

import { useEffect, useCallback, useRef } from "react"
import { projectMouseEnter, projectMouseLeave } from "../../../functions/mouse"
const styles = {
    h1: { fontSize: "1.302rem", fontWeight: "500" },

    h2: { fontSize: "0.45rem", fontWeight: "300" },
    btn_container: { width: "250px", marginLeft: "-25px", display: "flex", justifyContent: "center", alignItems: "center", height: "150px" },
    btn: { cursor: "pointer", position: "relative", overflow: "hidden", transition: "0.8s", fontSize: "0.48rem", width: "150px", height: "55px", borderRadius: "50px", background: "transparent" }
};
export default function Sections({ screen, scroll, color, setBackground }) {
    const container = useRef(null)
    const leftContainer = useRef(null)
    const rightContainer = useRef(null)
    const scrollTrigger = (ref, f, values, Start, End) => {
        const start = container.current.offsetTop
        const end = start + container.current.clientHeight - innerHeight
        let percentages = []

        if (scroll <= end && start <= scroll) {
            for (let i = 0; values.length > i; i++) {
                if (!i) {
                }
                percentages.push((((scroll - start) / (end - start)) * ((values[i][1]) - (values[i][0]))) + (values[i][0]))
            }
            f(percentages, ref.current)
        }
        const imgs = rightContainer.current.children
        const index = parseInt(((percentages[1] * (data.length - 1)) / 100))

        if (!percentages.length && start >= scroll && imgs[0].style.clipPath !== "inset(0px 0px 0%)") {

            imgs[0].style.clipPath = "inset(0px 0px 0%)"
        } else if (scroll >= end && imgs[imgs.length - 2].style.clipPath !== "inset(0px 0px 100%)") {
            imgs[imgs.length - 2].style.clipPath = "inset(0px 0px 100%)"
        }
    }
    const mousE = useCallback(projectMouseEnter, [])
    const mouseL = useCallback(projectMouseLeave, [])

    useEffect(() => {
        const imgs = rightContainer.current.children

        scrollTrigger(container, (v) => {
            const index = parseInt(((v[1] * (data.length - 1)) / 100))

            if (index + 0.5 < ((v[1] * (data.length - 1)) / 100) && data[index + 1] && document.querySelector('html').style.background !== data[index + 1].background) {
                document.querySelector('html').style.background = data[index + 1].background
            } else if (index + 0.5 > ((v[1] * (data.length - 1)) / 100) && document.querySelector('html').style.background !== data[index].background) {
                document.querySelector('html').style.background = data[index].background
            }


            const children = leftContainer.current.children
            imgs[index].style.clipPath = `inset(0px 0px ${v[1] * (data.length - 1) - (index * 100)}%)`

            if (index && imgs[index - 1].style.clipPath !== "inset(0px 0px 100%)") {
                imgs[index - 1].style.clipPath = "inset(0px 0px 100%)"
            } else if (index < data.length - 2 && imgs[index + 1].style.clipPath !== "inset(0px 0px 100%)") {
                imgs[index + 1].style.clipPath = "inset(0px 0px 0%)"
            }
            for (let i = 0; children.length > i; i++) {
                children[i].style.transform = `translateY(-${v[0]}px)`
            }
        }, [[0, ((data.length - 1) * (innerHeight * 0.9))], [0, 100]])


    }, [scroll])

    if (color === undefined) return null
    return (
        <div ref={container} style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <div style={{ width: "80%", height: `${data.length * 600 + (600 / 2)}px`, position: "relative", zIndex: 1 }}>
                <div style={{
                    position: "sticky",
                    top: "0",
                    width: "100%",
                    height: "100vh",
                    zIndex: 1,
                    overflow: "hidden",
                    display: "flex"
                }}>
                    <div style={{ width: "50%", height: "100%", position: "relative" }} >
                        <div ref={leftContainer} style={{
                            width: "100%",
                            position: "relative",
                            transform: `translateY(calc(-90vh / 2))`,
                            top: '50%'

                        }}>
                            {data.map((e, i) => {
                                return <div key={i} style={{ transition: "transform 0.3s linear", position: "relative", height: "90vh", display: "flex", justifyContent: "center", flexDirection: "column" }}>
                                    <div style={{
                                        width: "50%",
                                        float: "right",
                                        position: "relative", marginLeft: "50%", transform: "translateX(-50%)",

                                    }} >

                                        <h2 style={{ ...styles.h2, color: e.color }}>{e.link}</h2>
                                        <h1 style={styles.h1}>{e.t1}</h1>
                                        <p style={{ fontSize: "0.45rem" }}>Branding, Website, Design, Development</p>
                                        <div onMouseEnter={mousE} onMouseLeave={mouseL} className="project-container" style={styles.btn_container}>
                                            <button style={{ ...styles.btn, border: `1px solid ${e.border}`, }}>
                                                <div style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    background: "black",
                                                    color: "white",
                                                    position: "absolute", transform: "translate(-50%,-50%)",
                                                    top: "-50%", left: "50%", transition: "0.6s",
                                                    borderRadius: "100%", pointerEvents: "none", zIndex: -1
                                                }} />
                                                <div style={{
                                                    transition: "1s", color: "black", position: "absolute", left: "50%",
                                                    top: "50%", transform: "translate(-50%, -50%)", width: "100%",
                                                }}>View more</div>
                                                <div style={{
                                                    transition: "1s", color: "transparent", position: "absolute", left: "50%",
                                                    top: "50%", transform: "translate(-50%, -50%)", width: "100%", marginTop: "30px",
                                                }}>View more</div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>

                    </div>
                    <div style={{
                        width: "50%",
                        height: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }} >
                        <div ref={rightContainer} style={{ width: "600px", height: "600px", position: "relative", gap: 0 }}>
                            {data.map((e, i) => <img key={i} style={{
                                objectFit: "cover", zIndex: 5 - i, transition: "clip-path 0.3s linear",
                                width: "100%", height: "100%", position: "absolute", borderRadius: "50px"
                            }}
                                src={e.img} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="veil" style={{
                height: "calc(100% + 150px)",
                width: "100%",
                position: "absolute",
                top: 0, zIndex: 5,
                pointerEvents: "none",
                opacity: 0,
                transition: "2s"
            }} />
        </div>
    )
}
