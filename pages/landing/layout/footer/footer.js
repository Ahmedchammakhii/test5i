import Link from "next/link";
export default function Footer() {

    return (
        <div>
            <div className="footer-container" >
                <Link href="/contact"
                    className="footer_wrapper" >

                    <svg viewBox="0 0 700 700">
                        <defs>
                            <clipPath id="clip">
                                <path d="M 556.58 105.892 A 319.757 319.757 0 0 0 45.004 361.709 c 0 176.559 143.154 319.712 319.713 319.712 c 173.826 0 315.135 -138.746 319.541 -311.495 q 0.176 -4.109 0.176 -8.218 V 41.997 a 159.711 159.711 0 0 0 -127.854 63.895 Z" />
                            </clipPath>
                        </defs>
                        <path d="M 556.58 105.892 A 319.757 319.757 0 0 0 45.004 361.709 c 0 176.559 143.154 319.712 319.713 319.712 c 173.826 0 315.135 -138.746 319.541 -311.495 q 0.176 -4.109 0.176 -8.218 V 41.997 a 159.711 159.711 0 0 0 -127.854 63.895 Z" fill="transparent" />
                    </svg>
                    <div
                        className="footer-inner-container"  >
                        <h4 className="click_to" >
                            Click to </h4>
                        <h1 className="get_in_touch" >
                            Get in touch </h1>
                        <div
                            className="footer-inner"
                            >
                            <div
                                className="footer-inner-inner"  />
                        </div>
                    </div>
                </Link>
            </div>

            <div className="lower-footer" >
                <div className="lower-footer_container" >
                    <div className="lower-footer_left-side" >
                        <div className="footer-mail-container" >
                            <span onMouseEnter={() => {
                                document.getElementsByClassName("primary-cursor")[0].style.background = "black"
                                document.getElementsByClassName("primary-cursor")[0].style.width = "80px"
                                document.getElementsByClassName("primary-cursor")[0].style.height = "80px"
                                document.getElementsByClassName("primary-cursor")[0].style.opacity = 0.9
                                setTimeout(() => {
                                    if (document.getElementsByClassName("cursor-click")[0].textContent !== "Copie") {
                                        document.getElementsByClassName("cursor-click")[0].textContent = "Copie"
                                    }
                                }, 300);
                            }} onMouseLeave={() => {
                                document.getElementsByClassName("primary-cursor")[0].style.background = "black"
                                document.getElementsByClassName("primary-cursor")[0].style.width = "12px"
                                document.getElementsByClassName("primary-cursor")[0].style.height = "12px"
                                document.getElementsByClassName("primary-cursor")[0].style.opacity = 1
                                document.getElementsByClassName("cursor-click")[0].textContent = ""
                            }}
                                onClick={() => {
                                    navigator.clipboard.writeText("info@info.co")
                                        .then(() => {
                                            document.getElementsByClassName("cursor-click")[0].textContent = "Copied ✔"
                                        })
                                        .catch((error) => {
                                            console.error("Error copying text to clipboard:", error);
                                        });
                                }}
                                className="footer-mail" >info@info.co</span>
                        </div>
                        <p className="footer-location" >Tunis, Tunisia</p>
                    </div>
                    <div onMouseEnter={() => {
                        document.getElementsByClassName("primary-cursor")[0].style.background = "#fff";
                        document.getElementsByClassName("primary-cursor")[0].style.width = "70px";
                        document.getElementsByClassName("primary-cursor")[0].style.height = "70px";
                        document.getElementsByClassName("primary-cursor")[0].style.opacity = 1;
                        document.getElementsByClassName("primary-cursor")[0].style.mixBlendMode = "difference";
                        document.getElementsByClassName("cursor-click")[0].textContent = "";
                    }} onMouseLeave={() => {
                        document.getElementsByClassName("primary-cursor")[0].style.background = "black"
                        document.getElementsByClassName("primary-cursor")[0].style.width = "12px"
                        document.getElementsByClassName("primary-cursor")[0].style.height = "12px"
                        document.getElementsByClassName("primary-cursor")[0].style.opacity = 1
                        document.getElementsByClassName("primary-cursor")[0].style.mixBlendMode = "normal"

                    }} className="lower-footer_left-side" >
                        <div className="social" >
                            <div className="social_container"
                                >
                                <div src="https://deveb.co/static/media/linkedin.6f93e620.svg"
                                    className="social_links"  >
                                    <svg viewBox="0 0 50 50" width="100%" height="100%">
                                        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                                    </svg>
                                </div>

                                <div src="https://deveb.co/static/media/linkedin.6f93e620.svg"
                                    className="social_links"  >
                                    <svg viewBox="0 0 50 50" width="100%" height="100%">
                                        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                                    </svg>
                                </div>
                                <div src="https://deveb.co/static/media/linkedin.6f93e620.svg"
                                    className="social_links"  >
                                    <svg viewBox="0 0 50 50" width="100%" height="100%">
                                        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                                    </svg>
                                </div>
                                <div src="https://deveb.co/static/media/linkedin.6f93e620.svg"
                                    className="social_links"  >
                                    <svg viewBox="0 0 50 50" width="100%" height="100%">
                                        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <br />
                        <p className="policy" >Privacy Policy</p>
                    </div>
                </div>
            </div>
            <style>{`
            
        .footer-container { overflow: hidden; transform: scale(0.7); position: relative; height: 700px; width: 100vw; cursor: pointer; transition: transform 1s;  }
        .footer_wrapper { width: 700px; height: 700px; position: absolute; transform: translate(-50%,-50%); top: 50%; left: 50%;  }
        .footer-inner-container { position: absolute; width: 100%; height: 100%; background: white; top: 0; left: 0; clip-path: url(#clip); display: flex; flex-direction: column; justify-content: center; align-items: center;  }
        .click_to { font-weight: normal; z-index: 5555; margin-top: 25px; color: black; font-size: 20px;  }
        .get_in_touch { font-weight: normal; z-index: 5555; color: black; font-size: 50px;  }
        .footer-inner { width: 100%; height: 100%; position: absolute; transform: scale(0);  }
        .footer-inner-inner { width: 100%; height: 100%; background: black; border-radius: 100%; transition: 0.4s ease-in-out;  }
        .lower-footer { width: 100%; height: 100px; display: flex; justify-content: center;  }
        .lower-footer_container { width: 600px; height: 100%; display: flex; justify-content: space-between;  }
        .lower-footer_left-side { width: 50%;  }
        .footer-mail-container { font-size: .48rem; position: relative;  }
        .footer-mail { border-bottom: 1px solid black; cursor: none;  }
        .footer-location { font-size: 9.1px; color: #6e6e73; padding-top: 13px; font-weight: 600;  }
        .lower-footer_left-side { width: 50%;  }
        .social { font-size: .48rem; position: relative; float: right;  }
        .social_container { display: flex;  }
        .social_links { width: 20px; height: 20px; margin-right: 15px;  }
        .social_links { width: 20px; height: 20px; margin-right: 15px;  }
        .social_links { width: 20px; height: 20px; margin-right: 15px;  }
        .social_links { width: 20px; height: 20px;  }
        .policy { font-size: 9.1px; color: #6e6e73; margin-top: -13px; float: right; font-weight: 600;  }

        @media screen and (max-width:1112px){
            .footer-container {
                transform : scale(0.4);
              }
        }
        
        @media screen and (max-width:764px){
              .footer-container {
                overflow : visible;
                transform : scale(0.4);
              }
              .lower-footer {
                width : 100vw;
              }
              .lower-footer_container {
                width : 90%;
              }
              .policy {
                margin-top : 0
              }
        }
  
            `}</style>
        </div >
    );
}
