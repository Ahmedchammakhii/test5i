import Section from "./component"
import data from "../data"

export default function sections({ screen, scrollPosition, color, setBackground }) {
    return (
        <div style={{ position: "relative" }}>{data.map((e, i) => <Section key={i} preLast={i === data.length - 2} last={i + 1 === data.length}
            screen={screen}
            scroll={scrollPosition}
            element={e}
            index={i}
            color={color}
            setBackground={setBackground} />)}
            <div className="veil" style={{
                background: "black",
                height: "calc(100% + 150px)",
                width: "100%",
                position: "absolute",
                top: 0, zIndex: 5,
                pointerEvents: "none",
                opacity: 0,
                transition: "2s"
            }}>

            </div>
        </div>
    )
}
