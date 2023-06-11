import React from 'react'
import DesktopV from "./desktopV"
import MobileV from "./mobileV"
export default function projects({ screen, scroll }) {
    return (
        <div style={{ position: "relative" }}>
            <div className="veil" style={{ height: screen === "mobile" ? "calc(100% + 150px + 130vh)" : "calc(100% + 150px + 100vh)", width: "100%", position: "absolute", top: screen === "mobile" ? "-130vh" : "-100vh", zIndex: 50, pointerEvents: "none", opacity: 1, transition: "2s", background: "black" }} />

            {screen === "mobile" ?
                <MobileV scroll={scroll} />
                : <DesktopV scroll={scroll} />}
        </div>
    )
}
