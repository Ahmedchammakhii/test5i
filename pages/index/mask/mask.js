import React from 'react'

export default function mask() {
    return (
        <div style={{ zIndex: 1, width: "50%", position: "absolute", right: 0, height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ position: "fixed", top: 0, background: "red", width: "calc(62% / 2)", height: "calc((100% - 55%) / 2)" }} />
            <div style={{ position: "fixed", width: "calc(62% / 2)", height: "55%", borderRadius: "12%" }} />
            <div style={{ position: "fixed", bottom: 0, background: "red", width: "calc(62% / 2)", height: "calc((100% - 55%) / 2)" }} />
        </div>
    )
}
