import { useRef, useEffect } from 'react'

export default function MediaBand({ scroll }) {
    const container = useRef(null);

    useEffect(() => {
        const start = container.current.offsetTop - window.innerHeight - (container.current.clientHeight / 2);
        const end = container.current.offsetTop + ((window.innerWidth / 2.9) * 3) - window.innerHeight
        // const percentage = ((number - start) / (end - start)) * 100;

        if (start <= scroll && end >= scroll) {
            console.log("fired")
            const children = container.current.children
            const percentage = ((scroll - start) / (end - start)) * (children[0].clientWidth * 2);
            for (let i = 0; children.length > i; i++) {
                children[i].style.transform = `translateX(-${percentage}px)`
            }
        }

    }, [scroll])
    return (
        <div style={{ paddingBottom: "0%", height: 'calc((100vw / 2.9) * 1.1)', paddingTop: "14%" }}>
            <div ref={container} style={{ transform: "rotate(345deg)", width: "100%", height: "calc(100vw / 2.9)", gap: "80px", display: "flex", whiteSpace: "nowrap" }}>
                <img style={{ transition: "0.1s", objectFit: "cover", width: "450px", height: "100%", borderRadius: "75px" }} src={"https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b201b4481e4c4ebf2e944_slide1-p-800.jpg"} />
                <img style={{ transition: "0.1s", objectFit: "cover", width: "450px", height: "100%", borderRadius: "75px" }} src={"https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1d2e6bc211d52461d466_sc4.jpg"} />
                <img style={{ transition: "0.1s", objectFit: "cover", width: "450px", height: "100%", borderRadius: "75px" }} src={"https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1db490971b1346e686fc_sc8-p-800.jpg"} />
                <img style={{ transition: "0.1s", objectFit: "cover", width: "450px", height: "100%", borderRadius: "75px" }} src={"https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1d7eec022d7db635105c_sc7-p-800.jpg"} />
                <img style={{ transition: "0.1s", objectFit: "cover", width: "450px", height: "100%", borderRadius: "75px" }} src={"https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1ea717d12b6f4c6bc028_card3-p-800.jpg"} />
            </div>
        </div>
    )
}
