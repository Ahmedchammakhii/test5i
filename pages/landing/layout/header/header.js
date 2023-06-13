
import { useCallback } from "react"
import { headerMouseEnter, headerMouseLeave } from "../../../../functions/mouse";
import Link from "next/link";
import Menu from "./menu/menu";
export default function Navbar({ isClicked, setIsClicked, scroll }) {

  const mousE = useCallback(headerMouseEnter, [])
  const mouseL = useCallback(headerMouseLeave, [])


  return (
    <>
      <div className="main_container" style={{ height: "80px", fontSize: "calc(2rem + 1vw)", }}>
        <div className="nav_sides">
          <Link href="/" style={{ width: "25px", height: "100%", display: "flex", alignItems: "center", zIndex: 1 }}>
            <img className="logo" style={{ height: "50%" }}
              src="https://cdn.discordapp.com/attachments/1073737355896299542/1110855540231381052/logo_noir_ver.png" />
          </Link>
        </div>
        <div className="nav_sides" >
          <div className="links_container" style={{ opacity: isClicked || scroll ? 0 : 1, marginTop: scroll ? "-80px" : 0 }}>
            <Link className="links" href='/contact'>Contact</Link>
            <Link className="links" href='/blogs'>Blogs</Link>
            <Link className="links" href='/services'>Services</Link>
            <Link className="links" href='/choices'>Catalogues</Link>
          </div>

          <Link href="/contact" onMouseEnter={mousE} onMouseLeave={mouseL} className="header-container">
            <div className="quote" >
              get a quote
            </div>
          </Link>
          <div className="lines_btn" onClick={() => setIsClicked(!isClicked)}>
            <div className="header_lines_btn" style={{ transform: isClicked ? "rotate(45deg)" : "none" }} />
            <div className="header_lines_btn" style={{ transform: isClicked ? "rotate(-45deg)" : "none", marginTop: isClicked ? "-3px" : "5px" }} />
          </div>
        </div>
      </div>


      <Menu isClicked={isClicked} />

      <style>{`
          .main_container {z-index: 1111; margin-left: 3.6%; margin-right: 3.6%; display: flex; justify-content: space-between; position: fixed; top: 0; width: calc(100% - (3.6% * 2)); overflow: hidden; }
          .nav_sides {display: flex; }
          .links_container {display: flex; align-items: center;  z-index: 1002;}
          .links {cursor: pointer;font-size: 15px;font-weight: 600;color: #6e6e73;margin-left: 50px;}
          .header-container { display: flex; align-items: center; height: 100%; width: 170px; justify-content: center; margin-right: -10px; z-index: 1002 }   
          .quote { cursor: pointer; width: 100px; height: 40px; background: linear-gradient(to bottom right, transparent, #3398ff 80%); border-radius: 50px; color: white; font-size: 13px; display: flex; justify-content: center; align-items: center; font-weight: 600; transition: 0.5s;} 
          .lines_btn {width: 50px;height: 100%;flex-direction: column;display: flex;justify-content: center;cursor: pointer;z-index: 1002} 
          .header_lines_btn { background: black; height: 3px; margin-left: 19px; margin-right: 5px; border-radius: 50px; transition: transform 0.5s, background 2s; } 
          




        @media screen and (max-width:1112px){
             
        }
        
        @media screen and (max-width:764px){
             .main_container{
              height: 8vh !important
             }
             .links_container {
              display : none
             }
             .header-container {
              display : none
             }
             .left_side {
              display : none
             }
             .right_side {
              font-size : 3rem;
              text-align : center
             }
             .menu_title {
              display : none;
             }
             .mobile_button {
              display: flex;
             }
        }


    `}</style>
    </>
  )
}
