import { useLayoutEffect, useRef } from "react";
let scale = "0";
let touch = false

export const mouseMove = (event) => {

    const { clientX, clientY } = event;
    const mainContainer = document.querySelector('.main-container');
    if (scrollY + (window.innerHeight * 2) >= mainContainer.scrollHeight) {
        const containerRef = document.querySelector('.footer-container');
        const innerRef = document.querySelector('.footer-inner');
        const innerInnerRef = document.querySelector('.footer-inner-inner');
    
        const { clientWidth, clientHeight } = containerRef;
        const scrollY = window.scrollY;
        const x = (clientX - clientWidth / 2) * 2.5 * 0.7;
        const containerTop = containerRef.offsetTop;
        const yRelativeToContainer = clientY - containerTop + scrollY;
        const y = (yRelativeToContainer - clientHeight / 2) * 2.5 * 0.7;
        innerInnerRef.style.transform = `scale(${scale})`;
        innerRef.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }
    const primaryCursor = document.querySelector('.primary-cursor');

    if (scale === "0") {
        primaryCursor.style.transform = `translate3d(${clientX -
            primaryCursor.clientWidth / 2}px, ${clientY -
            primaryCursor.clientHeight / 2}px, 0)`;
        primaryCursor.style.visibility = "visible"
    } else if (scale !== "0" && primaryCursor.style.visibility !== "hidden") {
        primaryCursor.style.visibility = "hidden"
    }

}


export const mouseEnter = (event) => {
    const innerContainerRef = document.querySelector('.footer-inner-container');

    event.stopPropagation()
    const children = innerContainerRef.children
    setTimeout(() => {
        for (let i = 0; children.length > i; i++) {
            children[i].style.color = "white"
        }
    }, 200);
    scale = "3"
}
export const mouseLeave = (event) => {
    const innerContainerRef = document.querySelector('.footer-inner-container');

    event.stopPropagation()
    const children = innerContainerRef.children
    setTimeout(() => {
        for (let i = 0; children.length > i; i++) {
            children[i].style.color = "black"
        }
    }, 200);
    scale = "0"
};

export const cursorHandler = (
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave
) => useLayoutEffect(() => {
    const innerContainerRef = document.querySelector('.footer-inner-container');
    const mainContainer = document.querySelector('.main-container');

    mainContainer.addEventListener("mousemove", handleMouseMove);
    innerContainerRef.addEventListener("mouseenter", handleMouseEnter);
    innerContainerRef.addEventListener("mouseleave", handleMouseLeave);
    return () => {
        mainContainer.addEventListener("mousemove", handleMouseMove);
        innerContainerRef.removeEventListener("mouseenter", handleMouseEnter);
        innerContainerRef.removeEventListener("mouseleave", handleMouseLeave);
    };
}, [handleMouseMove, handleMouseLeave, handleMouseEnter]);