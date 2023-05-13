import { useLayoutEffect, useRef } from "react";
let scale = "0";
let touch = false
export const mouseMove = (event, containerRef, innerRef, innerInnerRef, primaryCursor, mainContainer) => {
    const { clientX, clientY } = event;
    if (scrollY + (window.innerHeight * 2) >= mainContainer.current.scrollHeight) {
        const { clientWidth, clientHeight } = containerRef.current;
        const scrollY = window.scrollY;
        const x = (clientX - clientWidth / 2) * 2.5 * 0.7;
        const containerTop = containerRef.current.offsetTop;
        const yRelativeToContainer = clientY - containerTop + scrollY;
        const y = (yRelativeToContainer - clientHeight / 2) * 2.5 * 0.7;
        innerInnerRef.current.style.transform = `scale(${scale})`;
        innerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
        }

    if (scale === "0") {
        primaryCursor.current.style.transform = `translate3d(${clientX -
            primaryCursor.current.clientWidth / 2}px, ${clientY -
            primaryCursor.current.clientHeight / 2}px, 0)`;
        primaryCursor.current.style.visibility = "visible"
    } else if (scale !== "0" && primaryCursor.current.style.visibility !== "hidden") {
        primaryCursor.current.style.visibility = "hidden"
    }
   
}


export const mouseEnter = (event, innerContainerRef) => {
    event.stopPropagation()
    const children = innerContainerRef.current.children
    setTimeout(() => {
        for (let i = 0; children.length > i; i++) {
            children[i].style.color = "white"
        }
    }, 200);
    scale = "3"
}
export const mouseLeave = (event, innerContainerRef) => {
    event.stopPropagation()
    const children = innerContainerRef.current.children
    setTimeout(() => {
        for (let i = 0; children.length > i; i++) {
            children[i].style.color = "black"
        }
    }, 200);
    scale = "0"
};

export const cursorHandler = (
    primaryCursor,
    mainContainer,
    containerRef,
    innerContainerRef,
    innerRef,
    innerInnerRef,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave
) => useLayoutEffect(() => {
    mainContainer.current.addEventListener("mousemove", (event) => handleMouseMove(event, containerRef, innerRef, innerInnerRef, primaryCursor, mainContainer));
    innerContainerRef.current.addEventListener("mouseenter", (event) => handleMouseEnter(event, innerContainerRef));
    innerContainerRef.current.addEventListener("mouseleave", (event) => handleMouseLeave(event, innerContainerRef));
    return () => {
        mainContainer.current.addEventListener("mousemove", (event) => handleMouseMove(event, containerRef, innerRef, innerInnerRef, primaryCursor, mainContainer));
        innerContainerRef.current.removeEventListener("mouseenter", (event) => handleMouseEnter(event, innerContainerRef));
        innerContainerRef.current.removeEventListener("mouseleave", (event) => handleMouseLeave(event, innerContainerRef));
    };
}, [handleMouseMove, handleMouseLeave, handleMouseEnter]);