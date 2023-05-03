import { lines, lines_btn, main_container, nav_sides, quote, quote_container, links, links_container, G_father_container, father_container, container, menu, left_side, right_side, menu_title, mobile_button, mobile_button_hover, mobile_button_leave } from "./style"
import { useState } from "react"
export default function navbar({ isMobile }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <div style={main_container}>
        <div style={nav_sides}>
          <div style={{ width: "25px", height: "100%", display: "flex", alignItems: "center" }}>
            logo
          </div>
        </div>
        <div style={nav_sides}>
          <div style={{ ...links_container, opacity: isClicked ? 0 : 1, display: isMobile ? "none" : "inherit" }}>
            <a style={links}>Contact</a>
            <a style={links}>Blogs</a>
            <a style={links}>Services</a>
          </div>

          <div style={quote_container}>
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


      <div style={G_father_container}>
        <div style={{ ...father_container, width: isClicked ? "200%" : "0", height: isClicked ? "500%" : "0" }}>
          <div style={{ ...container, opacity: isClicked ? 1 : 0, transition: isClicked ? "2s" : "0.2s" }}>
            <div style={menu}>

              {isMobile ? null : <div style={left_side}>
                <div style={menu_title}>get in touch</div>
                <div>info@info.com</div>
                <div style={{ ...menu_title, marginTop: "30px" }}>social</div>
                <div>facebook</div>
                <div>instagram</div>
              </div>}

              <div style={{ ...right_side, fontSize: isMobile ? "3rem" : "2.4rem", textAlign: isMobile ? "center" : "left" }}>
                {isMobile ? null : <div style={menu_title}>menu</div>}
                <div onMouseEnter={(e) => mobile_button_hover(e)} onMouseLeave={(e) => mobile_button_leave(e)}>Services</div>
                <div onMouseEnter={(e) => mobile_button_hover(e)} onMouseLeave={(e) => mobile_button_leave(e)}>Blogs</div>
                <div onMouseEnter={(e) => mobile_button_hover(e)} onMouseLeave={(e) => mobile_button_leave(e)}>Contact</div>
                {isMobile ? <div style={mobile_button}>
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
