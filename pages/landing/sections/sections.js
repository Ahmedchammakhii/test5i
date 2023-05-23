import Section from "./component"
const data = [
    {
        t1: "Beauty brand, e-commerce",
        link: "Vimcosmo.com",
        tags: ["Branding", " Website", " Design", " Development"],
        img: "https://deveb.co/static/media/vim.2c5e9ce4.jpg",
        color: "#fea5d3"
    }, {
        t1: "Furniture brand, Online store",
        link: "DopeGood.com",
        tags: ["Branding", " Website", " Design", " Development"],
        img: "https://deveb.co/static/media/newdopegood.6e57b4b4.jpg",
        color: "#a6d4ff"
    }, {
        t1: "Architectural design studio",
        link: "AM-ARC.com",
        tags: ["Branding", " Website", " Design", " Development"],
        img: "https://deveb.co/static/media/am-arc.0bba8786.jpg",
        color: "#f2ab79"
    }, {
        t1: "NFT digital marketplace",
        link: "Dopop.net",
        tags: ["Branding", " Website", " Design", " Development"],
        img: "https://deveb.co/static/media/dopop2.3974e9e7.jpg",
        color: "#a6afff"
    }, {
        t1: "Furniture brand, e-commerce",
        link: "Old.DopeGood.com",
        tags: ["Branding", " Website", " Design", " Development"],
        img: "https://deveb.co/static/media/dopegood.b2cad70d.jpg",
        color: "#ffb18c"
    },
]

export default function Sections({ screen, scrollPosition, color, setBackground }) {
    if (color === undefined) return null
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
