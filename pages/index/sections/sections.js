export default function sections({ img, index }) {
    const styles = {
        father_contaier: { marginTop: index ? 0 : "-80px", width: "100vw", display: "flex", justifyContent: "center", height: "100vh" },
        container: { width: "62%", justifyContent: "center", display: "flex", position: "relative" },
        left_side: { width: "calc(43% - 140px)", paddingRight: "140px", marginLeft: "7%", display: "flex", justifyContent: "center", flexDirection: "column" },
        h1: { fontSize: "3rem", fontWeight: "500" },

        right_side: { width: "50%" },
        img: { marginTop:"-92%",
            zIndex: '-' + index, position: "sticky", top: "calc(100% - (55% + 22.5%))", width: "100%",
            height: "55%", background: `url(${img})`, backgroundPosition: "center", backgroundSize: "cover"
        }
    }
    return (
        <div style={styles.father_contaier}>
            <div style={styles.container}>
                <div style={styles.left_side} >
                    <div>Vimcosmo.com</div>
                    <h1 style={styles.h1}>Beauty brand, e-commerce</h1>
                    <p>Branding, Website, Design, Development</p>
                    <button>View more</button>
                </div>
                <div style={styles.right_side}>
                    <div style={styles.img} />
                </div>
            </div>
        </div>
    )
}
