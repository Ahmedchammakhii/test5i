const styles = {
  lines: { background: "black", height: "3px", marginLeft: "19px", marginRight: "5px", borderRadius: "50px", transition: "transform 0.5s, background 2s" },
  lines_btn: { width: "50px", height: "100%", flexDirection: "column", display: "flex", justifyContent: "center", cursor: "pointer", zIndex: 1002 },
  main_container: { zIndex: 1111, marginLeft: "3.6%", marginRight: "3.6%", display: "flex", justifyContent: "space-between", position: "fixed", top: "0", width: "calc(100% - (3.6% * 2))", overflow: "hidden" },
  nav_sides: { display: "flex" },
  links: { cursor: "pointer", fontSize: "15px", fontWeight: "600", color: "#6e6e73", marginLeft: "50px" },

  quote: { cursor: "pointer", width: "100px", height: "40px", background: "linear-gradient(to bottom right, transparent, #3398ff 80%)", borderRadius: "50px", color: "white", fontSize: "13px", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "600", transition: "0.5s" },
  quote_container: { display: "flex", alignItems: "center", height: "100%", width: "170px", justifyContent: "center", marginRight: "-10px", zIndex: 1002 },
  links_container: { display: "flex", alignItems: "center", transition: "0.5s", zIndex: 1002 },
  G_father_container: { height: "calc(100vh + 80px)", width: "100%", marginTop: "-80px", overflow: "hidden", position: "fixed", background: "transparent" },
  father_container: { background: "white", transition: "0.6s", float: "right", borderBottomLeftRadius: "100%" },
  container: { width: "50%", marginLeft: "50%", height: "calc(100vh + 80px)", marginTop: "80px", display: "flex", justifyContent: "center", alignItems: "center" },
  menu: { width: "50%", display: "flex", justifyContent: "center", gap: "100px" },
  left_side: { fontSize: "0.42rem", color: "#6e6e73", fontWeight: "600", lineHeight: "3", marginTop: "-20%" },
  right_side: { fontWeight: "500", color: "#6e6e73", lineHeight: "1.8", marginTop: "-20%" },
  menu_title: { fontSize: "0.38rem", fontWeight: "500" },
  mobile_button: { backgroundColor: "#3398ff", color: "white", borderRadius: "50px", fontSize: "20px", width: "80vw", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "60px" },
  mobile_button_hover: (e) => { e.target.style.color = "black"; e.target.style.cursor = "pointer" },
  mobile_button_leave: (e) => e.target.style.color = "#6e6e73"
}
import { useState, useCallback, useEffect } from "react"
import { headerMouseEnter, headerMouseLeave } from "../../../../functions/mouse";
import Link from "next/link";
export default function Navbar({ isClicked, setIsClicked, screen, scroll }) {

  const mousE = useCallback(headerMouseEnter, [])
  const mouseL = useCallback(headerMouseLeave, [])



  return (
    <>
      <div style={{ ...styles.main_container, height: screen === "mobile" ? "8vh" : "80px" }}>
        <div style={styles.nav_sides}>
          <div style={{ width: "25px", height: "100%", display: "flex", alignItems: "center", zIndex: 1 }}>
            <img className="logo" style={{ height: "50%" }}
              src="https://cdn.discordapp.com/attachments/1073737355896299542/1110855540231381052/logo_noir_ver.png" />
          </div>
        </div>
        <div style={styles.nav_sides}>
          <div style={{ ...styles.links_container, opacity: isClicked || scroll ? 0 : 1, display: screen === "mobile" ? "none" : "inherit", marginTop: scroll ? "-80px" : 0 }}>
            <Link href='/contact' style={styles.links}>Contact</Link>
            <Link href='/blogs' style={styles.links}>Blogs</Link>
            <Link href='/services' style={styles.links}>Services</Link>
          </div>

          <div
            onMouseEnter={mousE} onMouseLeave={mouseL} className="header-container"
            style={{ ...styles.quote_container, display: screen === "mobile" ? "none" : "inherit" }}>
            <div className="quote" style={styles.quote}>
              get a quote
            </div>
          </div>
          <div style={styles.lines_btn} onClick={() => setIsClicked(!isClicked)}>
            <div className="header_lines_btn" style={{ ...styles.lines, transform: isClicked ? "rotate(45deg)" : "none" }} />
            <div className="header_lines_btn" style={{ ...styles.lines, transform: isClicked ? "rotate(-45deg)" : "none", marginTop: isClicked ? "-3px" : "5px" }} />
          </div>
        </div>
      </div>


      <div style={{ ...styles.G_father_container, zIndex: 1000, pointerEvents: isClicked ? "auto" : "none" }}>
        <div style={{ ...styles.father_container, width: isClicked ? "200%" : "0", height: isClicked ? "500%" : "0" }}>
          <div style={{ ...styles.container, opacity: isClicked ? 1 : 0, transition: isClicked ? "2s" : "0.2s" }}>
            <div style={styles.menu}>

              {screen === "mobile" ? null : <div style={styles.left_side}>
                <div style={styles.menu_title}>get in touch</div>
                <div>info@info.com</div>
                <div style={{ ...styles.menu_title, marginTop: "30px" }}>social</div>
                <div>facebook</div>
                <div>instagram</div>
              </div>}

              <div style={{ ...styles.right_side, fontSize: screen === "mobile" ? "3rem" : "2.4rem", textAlign: screen === "mobile" ? "center" : "left" }}>
                {screen === "mobile" ? null : <div style={styles.menu_title}>menu</div>}
                <div style={{ fontSize: "1.4rem" }} onMouseEnter={(e) => mobile_button_hover(e)} onMouseLeave={(e) => mobile_button_leave(e)}>Services</div>
                <div style={{ fontSize: "1.4rem" }} onMouseEnter={(e) => mobile_button_hover(e)} onMouseLeave={(e) => mobile_button_leave(e)}>Blogs</div>
                <div style={{ fontSize: "1.4rem" }} onMouseEnter={(e) => mobile_button_hover(e)} onMouseLeave={(e) => mobile_button_leave(e)}>Contact</div>
                {screen === "mobile" ? <div style={styles.mobile_button}>
                  Estimate Project
                </div> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
