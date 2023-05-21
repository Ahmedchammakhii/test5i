import React, { useEffect, useRef } from 'react'

export default function Cards({ scroll, containerRef }) {
    const container = useRef(null)
    const styles = {
        cards: {
            position: "sticky", top: "600px", background: "red", marginTop: "15em",
            height: "16em", width: "550px", height: "550px",
        }
    }
    const scrollTrigger = (ref, f, values, startCondition, endCondition, Start, End) => {
        const start = Start || ref.current.offsetTop - (innerHeight - (550 + (550 * 0.5)))
        const end = End || start + ref.current.clientHeight - innerHeight;
        if ((scroll <= end && start <= scroll) || (scroll > end && endCondition) || (scroll < start && startCondition)) {
            let percentages = []
            for (let i = 0; values.length > i; i++) {
                if (!i) {
                }
                percentages.push((((scroll - start) / (end - start)) * ((values[i][1]) - (values[i][0]))) + (values[i][0]))
            }
            f(percentages, ref.current)
        }
    }
    const cardsMovements = [
        [[-7, -62], [-48, -33], [-60, -47]],
        [[-6, -41], [-47, -36], [-45, -34]],
        [[-4, -7], [-46, -35], [-30, -25]],
        [[-4, 17], [-47, -36], [-15, -14]],
        [[-7, 26], [-50, -44], [0, 9]]
    ]
    useEffect(() => {
        cardsMovements.forEach((e, i) => {
            scrollTrigger(container, (v, ref) => {
                ref.children[i].children[0].style.transform = `translate3d(${v[0]}%, ${v[1]}%, 0px) rotateZ(${v[2]}deg)`
            }, e)
        });





        if (containerRef) {
            scrollTrigger(container, (v, ref) => {
                containerRef.style.background = `rgba(0, 0, 0, ${v[0]})`
                if (v[0] < 0.6 && document.getElementsByClassName('header_lines_btn')[0].style.background === "white") {
                    document.getElementsByClassName('header_lines_btn')[0].style.background = "black"
                    document.getElementsByClassName('header_lines_btn')[1].style.background = "black"
                    document.getElementsByClassName('quote')[0].style.background = 'linear-gradient(to bottom right, transparent, #3398ff 80%)'
                } else if (v[0] >= 0.6 && document.getElementsByClassName('header_lines_btn')[0].style.background === "black") {
                    document.getElementsByClassName('header_lines_btn')[0].style.background = "white"
                    document.getElementsByClassName('header_lines_btn')[1].style.background = "white"
                    document.getElementsByClassName('quote')[0].style.background = 'linear-gradient(312deg,#73ffa2, transparent 80%)'
                }
            }, [[1, 0]], containerRef.style.background !== "rgb(0, 0, 0)", containerRef.style.background !== "rgba(0, 0, 0, 0)")

        }
    }, [scroll])
    return (
        <div ref={container} style={{ width: "100%", height: '200vh', display: "flex", justifyContent: "center", position: "relative" }}>
            <div style={{ position: "absolute", height: "100%", transform: "translate(-50% , calc(-550px * (0.12 * 1.5  )))", left: "calc(50% + ((550px * 0.49) - (550px * 0.153) * 4.5))" }}>
                <img style={{
                    ...styles.cards, objectFit: "cover", borderRadius: "1.8em", background: "purple",
                    transform: "translate3d(-7%, -48%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-60deg) skew(0deg, 0deg)"
                }} src="https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1d744379a3bfb50eb8f0_sc5-p-800.jpg" />
            </div>
            <div style={{ position: "absolute", height: "100%", transform: "translate(-50% , calc(-550px * (0.12 * 1.5  )))", left: "calc(50% + ((550px * 0.49) - (550px * 0.153) * 3.1))" }}>
                <img style={{
                    ...styles.cards, objectFit: "cover", borderRadius: "1.8em", background: "red",
                    transform: "translate3d(-6%, -47%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg)"
                }} src="https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1d7c4481e4143bf2c422_sc6-p-800.jpg" />
            </div>
            <div style={{ position: "absolute", height: "100%", transform: "translate(-50% , calc(-550px * (0.12 * 1.5  )))", left: "calc(50% + ((550px * 0.49) - (550px * 0.153) * 2.08))" }}>
                <img style={{
                    ...styles.cards, objectFit: "cover", borderRadius: "1.8em", background: "yellow",
                    transform: "translate3d(-4%, -46%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-30deg) skew(0deg, 0deg)"
                }} src="https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/642071c9b4f0d2f23c0d0fd3_stewart-maclean-Zs1WKNa4Oy0-unsplash.jpg" />
            </div>
            <div style={{ position: "absolute", height: "100%", transform: "translate(-50% , calc(-550px * 0.12))", left: "calc(50% + ((550px * 0.49) - 550px * 0.153))" }}>
                <img style={{
                    ...styles.cards, objectFit: "cover", borderRadius: "1.8em", background: "white",
                    transform: "translate3d(-5%, -47%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-15deg) skew(0deg, 0deg)"
                }} src="https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1db490971b1346e686fc_sc8-p-800.jpg" />
            </div>
            <div style={{ position: "absolute", height: "100%", transform: "translate(-50%)", left: "calc(50% + (550px * 0.49))" }}>
                <img style={{
                    ...styles.cards, objectFit: "cover", borderRadius: "1.8em", background: "blue",
                    transform: "translate3d(-7%, -50%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                }} src="https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1d01ba675235f7da86e3_main.jpg" />
            </div>


        </div>
    )
}
