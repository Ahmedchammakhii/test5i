import { useRef, useEffect } from 'react'
import About from './about/about'
import MediaBand from './media-band'
export default function BlackSection({ scroll }) {
    const container = useRef(null)
    const leftContainer = useRef(null)
    const rightContainer = useRef(null)

    useEffect(() => {


        if (scroll >= container.current.offsetTop) {
            const start = container.current.offsetTop
            const end = container.current.offsetTop + container.current.children[0].clientHeight
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
            background: "black",
            borderRadius: "150px",
        }}>
            <About scroll={scroll}
                container={container}
                leftContainer={leftContainer}
                rightContainer={rightContainer} />
            <MediaBand scroll={scroll} />
        </div>
    )
}
