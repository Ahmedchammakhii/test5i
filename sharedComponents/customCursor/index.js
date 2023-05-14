
export const CustomCursor = ({ primaryCursor, activeMouse }) => {


    return (
        <div ref={primaryCursor} style={{
            position: "fixed",
            width: "7px",
            height: "7px",
            borderRadius: "100%",
            background: "black", display: "flex", justifyContent: "center",
            alignItems: "center", zIndex: 999, left: -5, top: 5, display: activeMouse ? "block" : "none", transition: "0.1s",
            pointerEvents: "none"
        }}>
        </div>
    );
};

