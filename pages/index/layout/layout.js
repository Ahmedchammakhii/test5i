import { useRef } from 'react'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import { cursorHandler } from '@/sharedComponents/customCursor'
export default function layout({ background, mainContainer, containerRef, innerContainerRef, innerRef, innerInnerRef, scroll, primaryCursor, children, screen, setActiveMouse }) {

    return (
        <div style={{ background, transition: "background 2s" }}
            ref={mainContainer}>
            <Navbar screen={screen} />
            {children}
            <Footer containerRef={containerRef}
                innerContainerRef={innerContainerRef}
                innerRef={innerRef}
                innerInnerRef={innerInnerRef} scroll={scroll} />
        </div>
    )
}
