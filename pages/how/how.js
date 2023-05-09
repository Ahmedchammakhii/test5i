import { useEffect, useState, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function how({ background }) {
    const ref = useRef(null);
    const title = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0)
    useEffect(() => {
        let end = 0
        let counter = 0
        const boxes = ref.current.children
        for (let i = 0; boxes.length > i; i++) {
            let marginLeft = window.getComputedStyle(boxes[i]).getPropertyValue('margin-left');
            marginLeft = Number(marginLeft.slice(0, marginLeft.length - 2))

            end += (boxes[i].offsetWidth + marginLeft)
            counter += (boxes[i].offsetWidth + marginLeft)
            if (i === ref.current.children.length - 1) {
                end = "+=" + end
            }
        }
        setContainerWidth(counter);
        let ctx = gsap.context(() => {
            gsap.to(".box", {
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top center",
                    end: end,
                    scrub: true,
                    pin: true,
                    ease: "none",
                },
                x: -(counter - (ref.current.offsetWidth / 1.6)),
                duration: 2,
            });

            gsap.to(title, {
                scrollTrigger: {
                    trigger: title.current,
                    start: "top 30%",
                    end: end,
                    scrub: true,
                    pin: true,
                    ease: "none",
                },
                duration: 2,
            });
        }, ref);

        return () => ctx.revert();
    }, []);
    return (
        <div style={{
            display: "flex", flexDirection: "column",
            alignItems: "center",
            background,
            transition: "2s",
            paddingBottom: "250px",
        }}>
            <h1 ref={title} style={{ FontSize: 'calc(1.525rem + 5px)', fontWeight: "500", position: "relative", top: "20%", paddingBottom: "100px" }}>How it works</h1>
            <div style={{ height: `${containerWidth}px`, width: "100%", display: "flex", flexWrap: "nowrap" }}>


                <div ref={ref} style={{
                    height: "250px", flexWrap: "nowrap",
                    display: "flex", overflow: "hidden"
                }}>
                    <div className="box" style={{ background: "#fff", boxShadow: "0 3px 30px 0 rgba(0,0,0,.02)", borderRadius: "40px", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", transition: "0.6s ease-out", transform: `translateX(calc(100vw / 3))`, height: "250px", minWidth: "calc(100vw / 4)", background: "red", borderRadius: "40px" }} >
                        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                            <h4 style={{ textAlign: "center" }}>Send brief</h4>
                            <p style={{ width: "calc(100% - 46px)", fontSize: "13.84px", marginTop: "15px", letterSpacing: ".15px", lineHeight: "1.64" }}>Send us a complete brief along with documents & requirements to estimate the project & get started</p>
                        </div>
                    </div>
                    <div className="box" style={{ background: "#fff", boxShadow: "0 3px 30px 0 rgba(0,0,0,.02)", borderRadius: "40px", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", transition: "0.6s ease-out", transform: `translateX(calc(100vw / 3))`, marginLeft: "50px", height: "250px", minWidth: "calc(100vw / 4)", background: "red", borderRadius: "40px" }} >
                        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                            <h4 style={{ textAlign: "center" }}>Send brief</h4>
                            <p style={{ width: "calc(100% - 46px)", fontSize: "13.84px", marginTop: "15px", letterSpacing: ".15px", lineHeight: "1.64" }}>Send us a complete brief along with documents & requirements to estimate the project & get started</p>
                        </div>
                    </div>
                    <div className="box" style={{ background: "#fff", boxShadow: "0 3px 30px 0 rgba(0,0,0,.02)", borderRadius: "40px", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", transition: "0.6s ease-out", transform: `translateX(calc(100vw / 3))`, marginLeft: "50px", height: "250px", minWidth: "calc(100vw / 4)", background: "red", borderRadius: "40px" }} >
                        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                            <h4 style={{ textAlign: "center" }}>Send brief</h4>
                            <p style={{ width: "calc(100% - 46px)", fontSize: "13.84px", marginTop: "15px", letterSpacing: ".15px", lineHeight: "1.64" }}>Send us a complete brief along with documents & requirements to estimate the project & get started</p>
                        </div>
                    </div>
                    <div className="box" style={{ background: "#fff", boxShadow: "0 3px 30px 0 rgba(0,0,0,.02)", borderRadius: "40px", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", transition: "0.6s ease-out", transform: `translateX(calc(100vw / 3))`, marginLeft: "50px", height: "250px", minWidth: "calc(100vw / 4)", background: "red", borderRadius: "40px" }} >
                        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                            <h4 style={{ textAlign: "center" }}>Send brief</h4>
                            <p style={{ width: "calc(100% - 46px)", fontSize: "13.84px", marginTop: "15px", letterSpacing: ".15px", lineHeight: "1.64" }}>Send us a complete brief along with documents & requirements to estimate the project & get started</p>
                        </div>
                    </div >
                    <div className="box" style={{ background: "#fff", boxShadow: "0 3px 30px 0 rgba(0,0,0,.02)", borderRadius: "40px", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", transition: "0.6s ease-out", transform: `translateX(calc(100vw / 3))`, marginLeft: "50px", height: "250px", minWidth: "calc(100vw / 4)", background: "red", borderRadius: "40px" }} >
                        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                            <h4 style={{ textAlign: "center" }}>Send brief</h4>
                            <p style={{ width: "calc(100% - 46px)", fontSize: "13.84px", marginTop: "15px", letterSpacing: ".15px", lineHeight: "1.64" }}>Send us a complete brief along with documents & requirements to estimate the project & get started</p>
                        </div>
                    </div >
                </div >

            </div >
        </div >)
}
