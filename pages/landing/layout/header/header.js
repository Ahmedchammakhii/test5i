
import { useCallback } from "react"
import { headerMouseEnter, headerMouseLeave } from "../../../../functions/mouse";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Navbar({ isClicked, setIsClicked, scroll }) {

  const mousE = useCallback(headerMouseEnter, [])
  const mouseL = useCallback(headerMouseLeave, [])
  const router = useRouter()


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


      <div className="G_father_container" style={{ zIndex: 1000, pointerEvents: isClicked ? "auto" : "none" }}>
        <div className="father_container" style={{ width: isClicked ? "200%" : "0", height: isClicked ? "500%" : "0" }}>

          <div className="container" style={{ opacity: isClicked ? 1 : 0, transition: "opacity 0.5s", position: "absolute", left: "-25%" }}>
            <div className="menu">

              <div className="left_side">
                <div className="menu_title" >get in touch</div>
                <div>info@info.com</div>
                <div className="menu_title" style={{ marginTop: "30px" }}>social</div>
                <div>facebook</div>
                <div>instagram</div>
                <div>linkedin</div>
                <div>github</div>
              </div>

              <div className="right_side" style={{ fontSize: "2.4rem" }}>
                <div className="menu_title" >menu</div>
                <div onClick={() => router.push("/services")} style={{ fontSize: "1.26rem" }} onMouseEnter={(e) => e.target.style.color = "black"} onMouseLeave={(e) => e.target.style.color = "#6e6e73"}>Services</div>
                <div onClick={() => router.push("/blogs")} style={{ fontSize: "1.26rem" }} onMouseEnter={(e) => e.target.style.color = "black"} onMouseLeave={(e) => e.target.style.color = "#6e6e73"}>Blogs</div>
                <div onClick={() => router.push("/contact")} style={{ fontSize: "1.26rem" }} onMouseEnter={(e) => e.target.style.color = "black"} onMouseLeave={(e) => e.target.style.color = "#6e6e73"}>Contact</div>
                <div onClick={() => router.push("/choices")} style={{ fontSize: "1.26rem" }} onMouseEnter={(e) => e.target.style.color = "black"} onMouseLeave={(e) => e.target.style.color = "#6e6e73"}>Catalogues</div>
                <div className="mobile_button">
                  Estimate Project
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

      <style>{`
          .main_container {z-index: 1111; margin-left: 3.6%; margin-right: 3.6%; display: flex; justify-content: space-between; position: fixed; top: 0; width: calc(100% - (3.6% * 2)); overflow: hidden; }
          .nav_sides {display: flex; }
          .links_container {display: flex; align-items: center;  z-index: 1002;}
          .links {cursor: pointer;font-size: 15px;font-weight: 600;color: #6e6e73;margin-left: 50px;}
          .header-container { display: flex; align-items: center; height: 100%; width: 170px; justify-content: center; margin-right: -10px; z-index: 1002 }   
          .quote { cursor: pointer; width: 100px; height: 40px; background: linear-gradient(to bottom right, transparent, #3398ff 80%); border-radius: 50px; color: white; font-size: 13px; display: flex; justify-content: center; align-items: center; font-weight: 600; transition: 0.5s;} 
          .lines_btn {width: 50px;height: 100%;flex-direction: column;display: flex;justify-content: center;cursor: pointer;z-index: 1002} 
          .header_lines_btn { background: black; height: 3px; margin-left: 19px; margin-right: 5px; border-radius: 50px; transition: transform 0.5s, background 2s; } 
          .G_father_container { height: calc(100vh + 80px); width: 100%; margin-top: -80px; overflow: hidden; position: fixed; background: transparent; }
          .father_container { background: white; transition: 0.6s; float: right; border-bottom-left-radius: 100% } 
          .container { width: 50%; margin-left: 50%; height: calc(100vh + 80px); margin-top: 80px; display: flex; justify-content: center; align-items: center }
          .menu { width: 50%; display: flex; justify-content: center; gap: 170px; }
          .menu_title { font-size: 0.38rem; font-weight: 500;}
          .left_side {  cursor: pointer; font-size: 0.42rem;color: #6e6e73;font-weight: 600;line-height: 3;margin-top: -20%;}
          .right_side { cursor: pointer;  font-weight: 500; color: #6e6e73; line-height: 1.8; margin-top: -20%;}
          .mobile_button { background-color: #3398ff; color: white; border-radius: 50px; font-size: 20px; width: 80vw; height: 60px;  align-items: center; justify-content: center; margin-top: 60px; display : none; }







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
