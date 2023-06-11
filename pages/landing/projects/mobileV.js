import data from "@/data/landing/projects"
import { useEffect, useRef } from "react"

export default function MobileV({ scroll }) {
    const container = useRef(null)
    const scrollTrigger = (ref, f, values, Start, End) => {
        let start = container.current.offsetTop + innerHeight
        let end = start + container.current.clientHeight - innerHeight

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
    useEffect(() => {
        scrollTrigger(container, (v, ref) => {

            const index = parseInt(((v[0] * (data.length - 1)) / 100))
            const calculateY = x => (x === 0) ? 60 : (x === 100) ? -100 : ((-160 / 100) * x) + 60;
            const calculateBottom = x => (x === 0) ? 20 : (x === 100) ? 100 : ((80 / 100) * x) + 20;
            const calcOpacity = x => (x <= 20) ? 0 : (x >= 70) ? 1 : (x - 20) / 50;
            const calcPreviousOpacity = x => (x <= 40) ? 1 : (x >= 100) ? 0 : 1 - (x - 40) / 50;
            const calcBgPosition = x => (x === 0) ? 30 : (x === 100) ? 70 : ((x * 0.4) + 30);



            if (index + 0.5 < ((v[0] * (data.length - 1)) / 100) && data[index + 1] && document.querySelector('.main-container').style.background !== data[index + 1].background) {
                document.querySelector('.main-container').style.background = data[index + 1].background
                document.getElementsByClassName("primary-cursor")[0].style.background = data[index + 1].color

            } else if (index + 0.5 > ((v[0] * (data.length - 1)) / 100) && document.querySelector('.main-container').style.background !== data[index].background) {
                document.querySelector('.main-container').style.background = data[index].background
                document.getElementsByClassName("primary-cursor")[0].style.background = data[index].color
            }
            const imgs = container.current.children[0].children
            imgs[index].style.clipPath = `inset(0px 0px ${v[0] * (data.length - 1) - (index * 100)}%)`
            if (index !== data.length - 1) {
                imgs[index].style.backgroundPosition = `0px ${calcBgPosition(v[0] * (data.length - 1) - (index * 100))}%`
            }

            if (index && imgs[index - 1].style.clipPath !== "inset(0px 0px 100%)") {
                imgs[index - 1].style.clipPath = "inset(0px 0px 100%)"
                imgs[index - 1].style.backgroundPosition = `0px 70%`

                imgs[data.length + index - 1].style.bottom = 100 + '%'
                imgs[data.length + index - 1].style.transform = `translateY(-100%)`
                imgs[data.length + index - 1].style.opacity = 0

            } else if (index < data.length - 2 && imgs[index + 1].style.clipPath !== "inset(0px 0px 0%)") {
                imgs[index + 1].style.clipPath = "inset(0px 0px 0%)"
                imgs[index + 1].style.backgroundPosition = `0px 30%`

                imgs[data.length + index + 1].style.bottom = 20 + '%'
                imgs[data.length + index + 1].style.transform = `translateY(60%)`
                imgs[data.length + index + 1].style.opacity = 1

            }













            if (index < data.length - 1) {
                imgs[data.length + index + 1].style.opacity = calcOpacity(v[0] * (data.length - 1) - (index * 100))
            }

            imgs[data.length + index].style.bottom = calculateBottom(v[0] * (data.length - 1) - (index * 100)) + '%'
            imgs[data.length + index].style.transform = `translateY(${calculateY(v[0] * (data.length - 1) - (index * 100))}%)`
            imgs[data.length + index].style.opacity = calcPreviousOpacity(v[0] * (data.length - 1) - (index * 100))




        }, [[0, 100]])
    }, [scroll])
    return (
        <div ref={container} style={{ height: `calc(100vh + (50vh * ${data.length - 1}))` }}>
            <div style={{
                height: '100vh',
                // background: "gray",
                position: "sticky", top: "calc(50% - 50vh)", display: "flex", alignItems: "center", justifyContent: "center"
            }} >
                {data.map((e, i) => <div src={e.img} style={{ background: `url(${e.img})`, backgroundSize: "100%", backgroundPosition: i !== data.length - 1 ? "0px 30%" : "0px 50%", zIndex: 6 - i, width: '70vw', height: "70vw", position: "absolute", borderRadius: "40px" }} />)}
                {data.map((e, i) => <div style={{
                    width: "100vw", height: "100px", textAlign: "center",
                    //background: "red",
                    position: "absolute", zIndex: 0, bottom: "20%", transform: 'translateY(60%)', opacity: i ? 0 : 1
                }} >
                    <h2 style={{ color: e.color, fontSize: "0.7rem", fontWeight: "300" }} >{e.link}</h2>
                    <h1 style={{ fontSize: "1.302rem", fontWeight: "500" }} >{e.t1}</h1>
                    <p style={{ fontSize: "0.45rem" }}>Branding, Website, Design, Development</p>
                </div>)}

            </div>
        </div>
    )
}
