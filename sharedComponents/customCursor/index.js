
export const CustomCursor = ({ scroll, primaryCursor, activeMouse }) => {


    return (
        <div ref={primaryCursor} style={{
            position: "absolute",
            width: "7px",
            height: "7px",
            borderRadius: "100%",
            background: "black", display: "flex", justifyContent: "center",
            alignItems: "center", zIndex: 999, left: 0, top: scroll, display: activeMouse ? "block" : "none", transition: "0.1s",
            pointerEvents: "none"
        }}>
        </div>
    );
};

