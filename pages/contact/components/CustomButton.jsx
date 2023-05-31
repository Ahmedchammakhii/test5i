import React, { useState } from 'react';
import styles from "../components/customButton.module.css";

const CustomButton = ({ label, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (!isActive) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isActive) {
      setIsHovered(false);
    }
  };

  return (
    <div className={styles.buttonsContainer}>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
          fontWeight: "500",
          transition: "0.8s",
          fontSize: "0.8rem",
          width: "150px",
          height: "55px",
          borderRadius: "20% 20% 20% 20%/45% 45% 45% 45% ",
          border: `1px solid black`,
          background: isActive ? "black" : "transparent",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "black",
            color: "white",
            position: "absolute",
            transform: isHovered ? "translate(-50%,-50%)" : "translate(-50%, 150%)",
            top: "50%",
            left: "50%",
            transition: "0.6s",
            borderRadius: "100%",
            pointerEvents: "none",
            zIndex: -1,
          }}
        />
        <div
          style={{
            transition: "1s",
            color: isActive ? "white" : "black",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            pointerEvents: "none",
          }}
        >
          {label}
        </div>
        <div
          style={{
            transition: "1s",
            color: "transparent",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            marginTop: "30px",
            pointerEvents: "none",
          }}
        >
          {label}
        </div>
      </button>
    </div>
  );
};

export default CustomButton;
