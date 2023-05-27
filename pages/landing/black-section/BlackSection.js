import { useRef, useEffect } from 'react'
import About from './about'
import Cards from './cards'
import Catalogue from './catalogue'
import MediaBand from './media-band'
import Services from './services'
import Wow from './wow'

export default function BlackSection({ screen, scroll, menuClicked }) {
    const container = useRef(null)
    const leftContainer = useRef(null)
    const rightContainer = useRef(null)
    useEffect(() => {
        const veil = document.getElementsByClassName('veil')[0]

        if (scroll >= container.current.offsetTop - innerHeight * 0.5 && veil.style.opacity == 0) {
            veil.style.opacity
            veil.style.opacity = 1

            document.getElementsByClassName('header_lines_btn')[0].style.background = "white"
            document.getElementsByClassName('header_lines_btn')[1].style.background = "white"
            document.getElementsByClassName('quote')[0].style.backgroundImage = 'linear-gradient(312deg,#73ffa2, transparent 80%)'
            document.getElementsByClassName('logo')[0].src = 'https://cdn.discordapp.com/attachments/1073737355896299542/1110855539631595521/logo_blanc_ver.png'
        } else if (scroll <= container.current.offsetTop - innerHeight * 0.5 && veil.style.opacity == 1) {
            veil.style.opacity = 0
            document.getElementsByClassName('header_lines_btn')[0].style.background = "black"
            document.getElementsByClassName('header_lines_btn')[1].style.background = "black"
            document.getElementsByClassName('quote')[0].style.backgroundImage = 'linear-gradient(to bottom right, transparent, #3398ff 80%)'
            document.getElementsByClassName('logo')[0].src = 'https://cdn.discordapp.com/attachments/1073737355896299542/1110855540231381052/logo_noir_ver.png'
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


    useEffect(() => {
        const start = container.current.offsetTop - innerHeight
        const end = container.current.offsetTop + container.current.clientHeight - innerHeight
        const containerBg = container.current.style.background;
        const startIndex = containerBg.lastIndexOf(',') + 1;
        const endIndex = containerBg.lastIndexOf(')');
        const numberString = containerBg.substring(startIndex, endIndex);
        const number = parseFloat(numberString);

        if (scroll >= start && scroll <= end) {
            if (document.getElementsByClassName('header_lines_btn')[0].style.background === "white" && menuClicked) {
                document.getElementsByClassName('header_lines_btn')[0].style.background = "black"
                document.getElementsByClassName('header_lines_btn')[1].style.background = "black"
                document.getElementsByClassName('quote')[0].style.backgroundImage = 'linear-gradient(to bottom right, transparent, #3398ff 80%)'
                document.getElementsByClassName('logo')[0].src = 'https://cdn.discordapp.com/attachments/1073737355896299542/1110855540231381052/logo_noir_ver.png'

            } else if (containerBg === 'rgb(0, 0, 0)' || number >= 0.6) {

                setTimeout(() => {
                    document.getElementsByClassName('header_lines_btn')[1].style.background = "white"
                    document.getElementsByClassName('header_lines_btn')[0].style.background = "white"
                    document.getElementsByClassName('quote')[0].style.backgroundImage = 'linear-gradient(312deg,#73ffa2, transparent 80%)'
                    document.getElementsByClassName('logo')[0].src = 'https://cdn.discordapp.com/attachments/1073737355896299542/1110855539631595521/logo_blanc_ver.png'
                }, 500);
            }

        }
    }, [menuClicked])
    return (
        <div ref={container} style={{
            width: "100vw",
            background: "rgba(0, 0, 0, 1)",
            borderRadius: "150px", zIndex: 50
        }}>
            <About screen={screen} scroll={scroll} container={container} leftContainer={leftContainer} rightContainer={rightContainer} />
            <Catalogue screen={screen} scroll={scroll} />
            <MediaBand screen={screen} scroll={scroll} />
            <Wow scroll={scroll} />
            <Services screen={screen} scroll={scroll} />
            {/* <Cards containerRef={container.current} scroll={scroll} /> */}
        </div>
    )
}










