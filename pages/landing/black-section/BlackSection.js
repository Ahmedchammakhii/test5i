import { useRef, useEffect } from 'react'
import About from './about'
import Cards from './cards'
import MediaBand from './media-band'
import Wow from './wow'
export default function BlackSection({ scroll }) {
    const container = useRef(null)
    const leftContainer = useRef(null)
    const rightContainer = useRef(null)

    useEffect(() => {
        const veil = document.getElementsByClassName('veil')[0]
        if (scroll >= container.current.offsetTop - innerHeight * 0.5 && veil.style.opacity == 0) {
            console.log(veil.style.opacity)
            veil.style.opacity = 1
        } else if (scroll <= container.current.offsetTop - innerHeight * 0.5 && veil.style.opacity == 1) {
            veil.style.opacity = 0
        }
        const start = container.current.offsetTop - innerHeight
        const end = container.current.offsetTop + container.current.children[0].clientHeight - innerHeight * 1.2

        if (scroll >= start && scroll <= end) {
            {
                const translate = 200 - (((scroll - start) / (end - start)) * 200)
                const rotateZ = 50 - (((scroll - start) / (end - start)) * 50);
                const transform = `translate3d(-${translate > 0 ? translate : 0}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-${rotateZ > 0 ? rotateZ + 15 : 15}deg) skew(0deg, 0deg)`
                leftContainer.current.children[1].style.transform = transform
            } {
                const translate = 100 - (((scroll - start) / (end - start)) * 100)
                const rotateZ = 15 - ((scroll - start) / (end - start)) * 15
                const transform = `translate3d(-${translate > 0 ? translate : 0}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-${rotateZ > 0 ? rotateZ : 0}deg) skew(0deg, 0deg)`
                leftContainer.current.style.transform = transform
            }

            {
                const translate = 200 - (((scroll - start) / (end - start)) * 200)
                const rotateZ = 50 - (((scroll - start) / (end - start)) * 50);
                const transform = `translate3d(${translate > 0 ? translate : 0}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotateZ > 0 ? rotateZ + 15 : 15}deg) skew(0deg, 0deg)`
                rightContainer.current.children[1].style.transform = transform
            } {
                const translate = 100 - (((scroll - start) / (end - start)) * 100)
                const rotateZ = 15 - ((scroll - start) / (end - start)) * 15
                const transform = `translate3d(${translate > 0 ? translate : 0}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotateZ > 0 ? rotateZ : 0}deg) skew(0deg, 0deg)`
                rightContainer.current.style.transform = transform
            }
        }
    }, [scroll])

    return (
        <div ref={container} style={{
            width: "100vw",
            background: "rgba(0, 0, 0, 1)",
            borderRadius: "150px",
        }}>
            <About scroll={scroll} container={container} leftContainer={leftContainer} rightContainer={rightContainer} />
            <MediaBand scroll={scroll} />
            <Wow scroll={scroll} />
            <Cards containerRef={container.current} scroll={scroll} />

        </div>
    )
}










