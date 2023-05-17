import Section from "./component"
import data from "../data"

export default function sections({ screen, scrollPosition, color, setBackground }) {
    return (
        <div>{data.map((e, i) => <Section key={i} preLast={i === data.length - 2} last={i + 1 === data.length}
            screen={screen}
            scroll={scrollPosition}
            element={e}
            index={i}
            color={color}
            setBackground={setBackground} />)}</div>
    )
}
