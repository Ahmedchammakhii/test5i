import Header from './header/header'
import Footer from './footer/footer'
export default function layout({ scroll, children, screen }) {

    return (
        <div
            className="main-container">
            <Header scroll={scroll} screen={screen} />
            {children}
            <Footer scroll={scroll} />
        </div>
    )
}
