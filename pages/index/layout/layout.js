import Header from './header/header'
import Footer from './footer/footer'
export default function layout({ background, mainContainer, containerRef, innerContainerRef, innerRef, innerInnerRef, scroll, children, screen, setActiveMouse }) {

    return (
        <div style={{ background, transition: "background 2s" }}
            className="main-container">
            <Header screen={screen} />
            {children}
            <Footer containerRef={containerRef}
                innerContainerRef={innerContainerRef}
                innerRef={innerRef}
                innerInnerRef={innerInnerRef} scroll={scroll} />
        </div>
    )
}
