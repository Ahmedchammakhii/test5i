import React from 'react'

export default function mouse({ menuMouse }) {
    return (
        <div
            ref={menuMouse}
            style={{
                position: "fixed",
                width: "10px",
                height: "10px",
                borderRadius: "100%",
                background: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                left: 0,
                top: 0,
                transition: "width 0.5s, height 0.5s, transform 0.1s linear",
                pointerEvents: "none", overflow: "hidden"
            }}
        >
            <div
                style={{ whiteSpace: "nowrap", textAlign: "center", pointerEvents: "none", fontSize: "12px", color: "white", transform: "translate(-50%,-50%)", position: "absolute", left: "50%", top: "50%" }}
            />
            <style>{`
            
            @media screen and (max-width:764px){
                menu-cursor {
                    display: none
                }
            }
            `}</style>
        </div>

    )
}
