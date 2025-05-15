// src/components/CustomCursor.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [isDesktop, setIsDesktop] = React.useState(true);

    useEffect(() => {
        const checkIsDesktop = () => {
            setIsDesktop(window.innerWidth > 768);
        };
        checkIsDesktop();
        window.addEventListener("resize", checkIsDesktop);
        return () => window.removeEventListener("resize", checkIsDesktop);
    }, []);

    useEffect(() => {
        if (!isDesktop) return;
        const handleMouseMove = (event) => {
            gsap.to(cursorRef.current, {
                x: event.clientX,
                y: event.clientY,
                duration: 0.2, // Smooth transition
                ease: "power2.out",
            });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [isDesktop]);

    if (!isDesktop) return null;

    return (
        <div
            ref={cursorRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "15px", // Customize size
                height: "15px", // Customize size
                backgroundColor: "#3F77A5", // Customize color
                borderRadius: "50%",
                pointerEvents: "none",
                zIndex: 9999,
            }}
        ></div>
    );
};

export default CustomCursor;
