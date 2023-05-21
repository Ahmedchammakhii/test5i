import Header from './header/header'
import Footer from './footer/footer'
export default function layout({ isClicked, setIsClicked, scroll, children, screen }) {

    return (
        <div style={{ display: "flex", flexDirection: "column" }}
            className="main-container">
            <Header isClicked={isClicked} setIsClicked={setIsClicked} scroll={scroll} screen={screen} />
            {children}
            <Footer scroll={scroll} />
        </div>
    )
}
