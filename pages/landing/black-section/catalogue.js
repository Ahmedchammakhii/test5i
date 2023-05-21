import { useEffect, useRef } from 'react'

export default function Catalogue({ scroll }) {
    const container = useRef(null)
    const img = useRef(null)
    const txt = useRef(null)

    const scrollTrigger = (ref, f, values, startCondition, endCondition, Start, End) => {
        const start = ref.current.offsetTop - innerHeight
        const end = start + ref.current.clientHeight - (innerHeight * 0.2)
        if (scroll <= end && start <= scroll) {
            let percentages = []
            for (let i = 0; values.length > i; i++) {
                if (!i) {
                }
                percentages.push((((scroll - start) / (end - start)) * ((values[i][1]) - (values[i][0]))) + (values[i][0]))
            }
            f(percentages, ref.current)
        }
    }
    useEffect(() => {
        scrollTrigger(container, (v) => {
            img.current.style.transform = `translate3d(${v[0]}%, 0%, 0px)  rotateZ(${v[1]}deg)`
            txt.current.style.transform = `translate3d(${v[2]}%, 0%, 0px)`
        }, [[100, 0], [15, 0], [-40, 0]])
        //start translate3d(-40%, 0px, 0px)
        //end   translate3d(0%, 0px, 0px)
    }, [scroll])
    return (
        <div ref={container} style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", overflow: "hidden" }}>
            <div style={{ display: "flex", width: "80%", height: "100%", }}>
                <div style={{
                    width: "70%", height: "100%", display: "flex",
                    flexDirection: "column", justifyContent: "center",
                }} >
                    <div ref={txt}>
                        <h1 style={{ fontSize: "90px", color: "white", fontWeight: "500" }}>
                            Explore our
                        </h1>
                        <br />
                        <h1 style={{ fontSize: "90px", color: "white", fontWeight: "500", marginTop: "-50px" }}>
                            <span style={{ color: "gray" }}>Twin</span> Catalogues
                        </h1>
                    </div>
                    <br />
                    <div style={{ position: "relative", display: "flex", width: "80%", height: "165px", background: "white", borderRadius: "300px", backgroundImage: "linear-gradient(305deg,#73ffa2,#000)" }} >
                        <input placeholder='Enter your email' style={{
                            width: "89%", height: "99%", borderRadius: "300px", marginLeft: "0.5%", color: "white",
                            fontSize: "50px", paddingLeft: "10%", fontWeight: "300", outline: "none", border: "none",
                            backgroundImage: "linear-gradient(186deg,#73ffa2,#53b775 15%,#3b8353 26%,#265335 36%,#000 54%,#000)"
                        }} />
                        <div style={{
                            height: "5vw",
                            width: "5vw",
                            background: "linear-gradient(297deg,#73ffa2 36%,#000 87%)",
                            position: "relative",
                            borderRadius: "100%", right: "0", position: "absolute", transform: "translate(-50%, -50%)",
                            top: "50%"
                        }}>
                            <div style={{ width: "96.8%", height: "96.8%", background: "linear-gradient(225deg,#73ffa2 14%,#000 52%)", borderRadius: "100%", position: "absolute", top: '2%', left: "2%", display: "flex", justifyContent: "center", alignItems: "center" }} >
                                <svg fill="white" width="60" height="30" viewBox="0 0 90 60">
                                    <path d="M4 26C1.79086 26 0 27.7909 0 30C0 32.2091 1.79086 34 4 34V26ZM86.8284 32.8284C88.3905 31.2663 88.3905 28.7337 86.8284 27.1716L61.3726 1.71573C59.8105 0.153631 57.2778 0.153631 55.7157 1.71573C54.1536 3.27783 54.1536 5.81049 55.7157 7.37258L78.3431 30L55.7157 52.6274C54.1536 54.1895 54.1536 56.7222 55.7157 58.2843C57.2778 59.8464 59.8105 59.8464 61.3726 58.2843L86.8284 32.8284ZM4 34H84V26H4V34Z" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
                <div style={{
                    width: "30%", height: "100%", display: "flex",
                    flexDirection: "column", justifyContent: "center"
                }} >
                    <img ref={img} style={{
                        width: "480px", height: "730px", float: "right",
                        transform: "translate3d(0, 0%, 0px)  rotateZ(0deg)", objectFit: "cover", borderRadius: "300px"
                    }}
                        src='https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1cd48441822608c3eb49_newsletter.jpg' />


                </div>
            </div>
        </div >
    )
}
