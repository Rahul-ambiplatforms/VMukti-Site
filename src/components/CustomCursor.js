// src/components/CustomCursor.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
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
    }, []);

    return (
        <div
            ref={cursorRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "15px", // Customize size
                height: "15px", // Customize size
                backgroundColor: "white", // Customize color
                borderRadius: "50%",
                pointerEvents: "none",
                zIndex: 9999,
            }}
        ></div>
    );
};

export default CustomCursor;
