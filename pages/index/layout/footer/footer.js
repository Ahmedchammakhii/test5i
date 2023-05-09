import { useState, useRef } from 'react';

export default function Footer() {
    const [position, setPosition] = useState({ x: "0", y: "0" });
    const container = useRef(null)
    function handleUnhover(event) {

        setPosition({ ...position, transform: 'scale(0)' })
    }
    function handleHover(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const { height, top } = rect
        let obj = {};
        obj.top = -event.clientY
        obj.left = -event.clientX
        obj.transform = ' scale(1.08)'
        setPosition(obj)
        console.log(event.clientX)
    }
    return (
        <div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div ref={container} style={{ width: "490px", height: "490px" }}>
                <svg viewBox="0 0 745.254 723.418">
                    <defs>
                        <clipPath id="clip">
                            <path d="M 556.58 105.892 A 319.757 319.757 0 0 0 45.004 361.709 c 0 176.559 143.154 319.712 319.713 319.712 c 173.826 0 315.135 -138.746 319.541 -311.495 q 0.176 -4.109 0.176 -8.218 V 41.997 a 159.711 159.711 0 0 0 -127.854 63.895 Z" />
                        </clipPath>
                    </defs>
                    <path d="M 556.58 105.892 A 319.757 319.757 0 0 0 45.004 361.709 c 0 176.559 143.154 319.712 319.713 319.712 c 173.826 0 315.135 -138.746 319.541 -311.495 q 0.176 -4.109 0.176 -8.218 V 41.997 a 159.711 159.711 0 0 0 -127.854 63.895 Z" fill="red" />
                    <text x="50%" y="47%" textAnchor="middle" fontSize="20px" fill="white">
                        Click to
                    </text>
                    <text x="50%" y="55%" textAnchor="middle" fontSize="50px" fill="white" style={{ zIndex: 1 }}>
                        Get in touch
                    </text>
                    <foreignObject onMouseMove={(event) => {
                        const div = document.querySelector('foreignObject div');
                        const rect = div.getBoundingClientRect();
                        const x = event.clientX - rect.width / 2;
                        const y = event.clientY - rect.height / 2;
                        div.style.transform = `translate(calc(${x/2}px), ${y/2}px)`;
                        console.log(`translate(calc(-50%), ${y}px)`)
                    }}
                        style={{ height: "100%", width: "100%", backgroundColor: "blue" }} clipPath="url(#clip)" width="100%" height="100%">
                        <div style={{
                            height: "50%", width: "50%",
                            background: "black",
                            position: "absolute", transform: 'translate(50%, 50%)'
                        }} />
                    </foreignObject>
                </svg>
            </div>
        </div>
    );
}
