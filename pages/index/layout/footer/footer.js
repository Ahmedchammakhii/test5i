export default function App({ containerRef, innerContainerRef, innerRef, innerInnerRef }) {

    return (
        <div ref={containerRef} style={{ transform: "scale(0.45)", height: "700px", width: "100%" }}>
            <div style={{ width: "700px", height: "700px", position: "absolute", transform: "translate(-50%,-50%)", top: "50%", left: "50%" }}>
                <svg viewBox="0 0 700 700">
                    <defs>
                        <clipPath id="clip">
                            <path d="M 556.58 105.892 A 319.757 319.757 0 0 0 45.004 361.709 c 0 176.559 143.154 319.712 319.713 319.712 c 173.826 0 315.135 -138.746 319.541 -311.495 q 0.176 -4.109 0.176 -8.218 V 41.997 a 159.711 159.711 0 0 0 -127.854 63.895 Z" />
                        </clipPath>
                    </defs>
                    <path d="M 556.58 105.892 A 319.757 319.757 0 0 0 45.004 361.709 c 0 176.559 143.154 319.712 319.713 319.712 c 173.826 0 315.135 -138.746 319.541 -311.495 q 0.176 -4.109 0.176 -8.218 V 41.997 a 159.711 159.711 0 0 0 -127.854 63.895 Z" fill="red" />
                    <foreignObject
                        ref={innerContainerRef}
                        style={{
                            height: "100%",
                            width: "100%",
                            overflow: "hidden",
                        }}
                        clipPath="url(#clip)"
                    >
                        <h4 style={{ fontWeight: "normal", zIndex: "5555", marginTop: "-28px", color: "white", fontSize: "20px", position: "absolute", left: "50%", top: "50%", transform: 'translate(-50%, -50%)' }}>
                            Click to </h4>
                        <h1 style={{ fontWeight: "normal", zIndex: "5555", marginTop: "14px", color: "white", fontSize: "50px", position: "absolute", left: "50%", top: "50%", transform: 'translate(-50%, -50%)' }}>
                            Get in touch </h1>
                        <div
                            ref={innerRef}
                            style={{
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                transform: "scale(0)",

                            }}
                        >
                            <div
                                ref={innerInnerRef}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    background: "black",
                                    borderRadius: "100%",
                                    transition: "0.4s ease-in-out",
                                }}
                            />
                        </div>
                    </foreignObject>
                </svg>

            </div>
        </div>
    );
}
