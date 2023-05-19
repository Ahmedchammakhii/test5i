import Header from './header/header'
import Footer from './footer/footer'
export default function layout({ scroll, children, screen }) {

    return (
        <div style={{ display: "flex", flexDirection: "column" }}
            className="main-container">
            <Header scroll={scroll} screen={screen} />
            {children}
            <Footer scroll={scroll} />
        </div>
    )
}
