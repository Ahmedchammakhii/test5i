import { useLayoutEffect } from "react";



export const screenHandler = (screen, setScreen, setScrollPosition, handleResize, handleScroll) => useLayoutEffect(() => {
    handleResize(setScreen);
    window.addEventListener('resize', () => { handleResize(setScreen) });
    window.addEventListener('scroll', () => { handleScroll(setScrollPosition) });

    return () => {
        window.removeEventListener('resize', () => { handleResize(setScreen) });
        window.removeEventListener('scroll', () => { handleScroll(setScrollPosition) });
    };
}, [screen]);
