
import { useCallback, useEffect } from "react"
import { headerMouseEnter, headerMouseLeave } from "../../../../functions/mouse";
import Link from "next/link";
export default function Navbar({ isClicked, setIsClicked, scroll }) {

  const mousE = useCallback(headerMouseEnter, [])
  const mouseL = useCallback(headerMouseLeave, [])


  useEffect(() => {
    console.log(window.scrollY)
  }, [])
  return (
    <>
      <div className="main_container">
        <div className="nav_sides">
          <div className="logo_container" >
            <img className="logo"
              src="https://cdn.discordapp.com/attachments/1073737355896299542/1110855540231381052/logo_noir_ver.png" />
          </div>
        </div>
        <div className="nav_sides" >
          <div className="links_container" >
            <Link className="links" href='/contact'>Contact</Link>
            <Link className="links" href='/blogs'>Blogs</Link>
            <Link className="links" href='/services'>Services</Link>
          </div>

          <div onMouseEnter={mousE} onMouseLeave={mouseL} className="header-container">
            <div className="quote" >
              get a quote
            </div>
          </div>
          <div className="lines_btn" onClick={() => setIsClicked(!isClicked)}>
            <div className="header_lines_btn" style={{ transform: isClicked ? "rotate(45deg)" : "none" }} />
            <div className="header_lines_btn" style={{ transform: isClicked ? "rotate(-45deg)" : "none", marginTop: isClicked ? "-3px" : "5px" }} />
          </div>
        </div>
      </div>


      <div className="G_father_container" style={{ zIndex: 1000, pointerEvents: isClicked ? "auto" : "none" }}>
        <div className="father_container" style={{ width: isClicked ? "200%" : "0", height: isClicked ? "500%" : "0" }}>
          <div className="container" style={{ opacity: isClicked ? 1 : 0, transition: isClicked ? "2s" : "0.2s" }}>
            <div className="menu">

              <div className="left_side">
                <div className="menu_title" >get in touch</div>
                <div>info@info.com</div>
                <div className="menu_title" style={{ marginTop: "30px" }}>social</div>
                <div>facebook</div>
                <div>instagram</div>
              </div>

              <div className="right_side" >
                <div className="menu_title" >menu</div>
                <div style={{ fontSize: "1.4rem" }} onMouseEnter={(e) => mobile_button_hover(e)} onMouseLeave={(e) => mobile_button_leave(e)}>Services</div>
                <div style={{ fontSize: "1.4rem" }} onMouseEnter={(e) => mobile_button_hover(e)} onMouseLeave={(e) => mobile_button_leave(e)}>Blogs</div>
                <div style={{ fontSize: "1.4rem" }} onMouseEnter={(e) => mobile_button_hover(e)} onMouseLeave={(e) => mobile_button_leave(e)}>Contact</div>
                <div className="mobile_button" >
                  Estimate Project
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
          .main_container {z-index: 1111; margin-left: 3.6%; margin-right: 3.6%; display: flex; justify-content: space-between; position: fixed; top: 0; width: calc(100% - (3.6% * 2)); overflow: hidden; height: 80px }
          .nav_sides {display: flex; }
          .links_container {opacity: ${isClicked || scroll ? 0 : 1} ; display: flex ; align-items: center; transition: 0.5s; z-index: 1002; margin-top: ${scroll ? "-80px" : 0} }
          .links {cursor: pointer;font-size: 15px;font-weight: 600;color: #6e6e73;margin-left: 50px;}
          .header-container { display: flex; align-items: center; height: 100%; width: 170px; justify-content: center; margin-right: -10px; z-index: 1002 }   
          .quote { cursor: pointer; width: 100px; height: 40px; background: linear-gradient(to bottom right, transparent, #3398ff 80%); border-radius: 50px; color: white; font-size: 13px; display: flex; justify-content: center; align-items: center; font-weight: 600; transition: 0.5s;} 
          .lines_btn {width: 50px;height: 100%;flex-direction: column;display: flex;justify-content: center;cursor: pointer;z-index: 1002} 
          .header_lines_btn { background: black; height: 3px; margin-left: 19px; margin-right: 5px; border-radius: 50px; transition: transform 0.5s, background 2s; } 
          .G_father_container { height: calc(100vh + 80px); width: 100%; margin-top: -80px; overflow: hidden; position: fixed; background: transparent; }
          .father_container { background: white; transition: 0.6s; float: right; border-bottom-left-radius: 100% } 
          .container { width: 50%; margin-left: 50%; height: calc(100vh + 80px); margin-top: 80px; display: flex; justify-content: center; align-items: center }
          .menu { width: 50%; display: flex; justify-content: center; gap: 100px; }
          .menu_title { font-size: 0.38rem; font-weight: 500;}
          .left_side {font-size: 0.42rem;color: #6e6e73;font-weight: 600;line-height: 3;margin-top: -20%;}
          .right_side { font-weight: 500; color: #6e6e73; line-height: 1.8; margin-top: -20%; font-size : 2.4rem}
          .mobile_button {display: none; background-color: #3398ff;color: white;border-radius: 50px;font-size: 20px;width: 80vw;height: 60px;display: flex;align-items: center;justify-content: center;margin-top: 60px;}
          .logo {height: 50%}
          .logo_container {width: 25px; height: 100%; display: flex; align-items: center; z-index: 1;}
         
         
         
         
         
         
          @media screen and (max-width:1112px){
           
          }


           @media screen and (max-width:764px){
            .main_container { height:  8vh !important }
            .links_container {display: none}
            .header-container {display : none}
            .right_side {font-size : 3rem; text-align : center}
            .menu_title {display : none}
            .mobile_button {display: flex}
            .left_side {display : none}
           }
     
    `}</style>
    </>
  )
}
