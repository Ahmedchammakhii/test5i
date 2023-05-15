import { lines, lines_btn, main_container, nav_sides, quote, quote_container, links, links_container, G_father_container, father_container, container, menu, left_side, right_side, menu_title, mobile_button, mobile_button_hover, mobile_button_leave } from "./style"
import { useState, useCallback, useEffect } from "react"
import { headerMouseEnter, headerMouseLeave } from "../../functions/mouse";
export default function navbar({ screen, scroll }) {
  const [isClicked, setIsClicked] = useState(false);

  const mousE = useCallback(headerMouseEnter, [])
  const mouseL = useCallback(headerMouseLeave, [])


  useEffect(() => {
   console.log(headerMouseLeave)
  }, [])
  return (
    <>
      <div style={main_container}>
        <div style={nav_sides}>
          <div style={{ width: "25px", height: "100%", display: "flex", alignItems: "center", zIndex: 1 }}>
            logo
          </div>
        </div>
        <div style={nav_sides}>
          <div style={{ ...links_container, opacity: isClicked || scroll ? 0 : 1, display: screen === "mobile" ? "none" : "inherit", marginTop: scroll ? "-80px" : 0 }}>
            <a style={links}>Contact</a>
            <a style={links}>Blogs</a>
            <a style={links}>Services</a>
          </div>

          <div
            onMouseEnter={mousE} onMouseLeave={mouseL} className="header-container"
            style={quote_container}>
            <div style={quote}>
              get a quote
            </div>
          </div>
          <div style={lines_btn} onClick={() => setIsClicked(!isClicked)}>
            <div style={{ ...lines, transform: isClicked ? "rotate(45deg)" : "none" }} />
            <div style={{ ...lines, transform: isClicked ? "rotate(-45deg)" : "none", marginTop: isClicked ? "-3px" : "5px" }} />
          </div>
        </div>
      </div>


      <div style={{ ...G_father_container, zIndex: 1000, pointerEvents: isClicked ? "auto" : "none" }}>
        <div style={{ ...father_container, width: isClicked ? "200%" : "0", height: isClicked ? "500%" : "0" }}>
          <div style={{ ...container, opacity: isClicked ? 1 : 0, transition: isClicked ? "2s" : "0.2s" }}>
            <div style={menu}>

              {screen === "mobile" ? null : <div style={left_side}>
                <div style={menu_title}>get in touch</div>
                <div>info@info.com</div>
                <div style={{ ...menu_title, marginTop: "30px" }}>social</div>
                <div>facebook</div>
                <div>instagram</div>
              </div>}

              <div style={{ ...right_side, fontSize: screen === "mobile" ? "3rem" : "2.4rem", textAlign: screen === "mobile" ? "center" : "left" }}>
                {screen === "mobile" ? null : <div style={menu_title}>menu</div>}
                <div onMouseEnter={(e) => mobile_button_hover(e)} onMouseLeave={(e) => mobile_button_leave(e)}>Services</div>
                <div onMouseEnter={(e) => mobile_button_hover(e)} onMouseLeave={(e) => mobile_button_leave(e)}>Blogs</div>
                <div onMouseEnter={(e) => mobile_button_hover(e)} onMouseLeave={(e) => mobile_button_leave(e)}>Contact</div>
                {screen === "mobile" ? <div style={mobile_button}>
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
