import { useEffect, useState } from "react";
export default function sections({ sticky, setSticky, preLast, last, element, index, scroll, background, setBackground, color, screen }) {

    const styles = {
        father_contaier: { marginTop: index ? 0 : "-80px", width: "100vw", display: "flex", justifyContent: "center", height: "100vh", background, transition: "2s" },
        container: { width: screen === "tablet" ? "78%" : "62%", justifyContent: "center", display: "flex", position: "relative" },
        left_side: { width: "calc(43% - 10%)", paddingRight: "10%", marginLeft: screen === "tablet" ? 0 : "7%", display: "flex", justifyContent: "center", flexDirection: "column" },
        h1: { fontSize: "1.302rem", fontWeight: "500" },

        right_side: { width: "50%", position: "relative" },
        img: {
            clipPath: scroll ? scroll > (window.innerHeight * (0.25)) + (window.innerHeight * index) && !last ?
                "inset(0px 0px " + (100 - (((window.innerHeight * 0.55) - (scroll - window.innerHeight * index)) / 292) * 100) + "%)"
                : "none" : "none",
            zIndex: 5 + Number("-" + index), position: last && sticky ? "sticky" : "fixed", top: "50%", transform: "translate(0, -50%)", width: "100%",
            width: last && sticky ? "100%" : `calc(${screen === "tablet" ? "78%" : "62%"} / 2)`, height: `calc(100vw * ${screen === "tablet" ? "0.78" : "0.62"} / 2)`, objectFit: "cover", borderRadius: "11%"
        },
        h2: { fontSize: "0.5rem", color: element.color, fontWeight: "500" }
    };

    useEffect(() => {
        if ((scroll > (window.innerHeight * (0.25)) + (window.innerHeight * index)) && (scroll < (window.innerHeight * (0.25)) + (window.innerHeight * (index + 1))) && color !== index + 1) {
            setBackground(index + 1)
            if (index === 3) {

            }

        } else if (window.innerHeight > scroll && color !== 0) {
            setBackground(0)
        }
        if (preLast && (100 - (((window.innerHeight * 0.55) - (scroll - window.innerHeight * index)) / 292) * 100) > 99) {
            setSticky(true)
        } else if (preLast && (100 - (((window.innerHeight * 0.55) - (scroll - window.innerHeight * index)) / 292) * 100) < 99) {
            setSticky(false)
        }
    }, [scroll]);
    // scroll > (window.innerHeight * (0.25)) + (window.innerHeight * index)
    return (
        <div style={styles.father_contaier}>
            <div style={styles.container}>
                <div style={styles.left_side} >
                    <h2 style={styles.h2}>Vimcosmo.com</h2>
                    <h1 style={styles.h1}>Beauty brand, e-commerce</h1>
                    <p style={{ fontSize: "0.45rem" }}>Branding, Website, Design, Development</p>
                    <button style={{ fontSize: "0.48rem", marginTop: "50px", width: "150px", height: "55px", borderRadius: "50px", border: `1px solid ${element.color}`, background: "transparent" }}>View more</button>
                </div>
                <div style={styles.right_side}>
                    <img style={styles.img} src={element.img} />
                </div>
            </div>
        </div>
    )
}
