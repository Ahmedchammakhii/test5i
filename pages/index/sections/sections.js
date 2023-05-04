import { useEffect } from "react";
export default function sections({ img, index, scroll }) {

    const styles = {
        father_contaier: { marginTop: index ? 0 : "-80px", width: "100vw", display: "flex", justifyContent: "center", height: "100vh" },
        container: { width: "62%", justifyContent: "center", display: "flex", position: "relative" },
        left_side: { width: "calc(43% - 140px)", paddingRight: "140px", marginLeft: "7%", display: "flex", justifyContent: "center", flexDirection: "column" },
        h1: { fontSize: "3rem", fontWeight: "500" },

        right_side: { width: "50%", position: "relative" },
        img: {
            clipPath: scroll ? scroll > (window.innerHeight * (0.25)) + (window.innerHeight * index) ?
                "inset(0px 0px " + (100 - (((window.innerHeight * 0.55) - (scroll - window.innerHeight * index)) / 292) * 100) + "%)"
                : "none" : "none",
            zIndex: '-' + index, position: "fixed", top: "calc(100% - (55% + 22.5%))", width: "100%",
            width: "calc(62% / 2)", height: "55%", objectFit: "cover", borderRadius:"11%"
        }
    };


    return (
        <div style={styles.father_contaier}>
            <div style={styles.container}>
                <div style={styles.left_side} >
                    <div>Vimcosmo.com</div>
                    <h1 style={styles.h1}>Beauty brand, e-commerce</h1>
                    <p>Branding, Website, Design, Development</p>
                    <button>View more</button>
                </div>
                <div style={styles.right_side}>
                    {/* <div style={styles.img} /> */}
                    <img style={styles.img} src={img} />
                </div>
            </div>
        </div>
    )
}
