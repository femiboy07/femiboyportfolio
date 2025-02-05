import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const RandomZigzag = () => {
    const [zigzags, setZigzags] = useState<{ id: number; x: number; y: number; width: number; height: number; steps: number; }[]>([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Track mouse movement
    const handleMouseMove = (event: React.MouseEvent) => {
        setMousePosition({
            x: event.clientX,
            y: event.clientY,
        });
    };

    // Generate random zigzag properties
    const generateRandomZigzag = () => {
        const randomX = Math.random() * window.innerWidth; // Random X position
        const randomY = Math.random() * window.innerHeight; // Random Y position
        const randomSteps = Math.floor(Math.random() * 6) + 3; // Random steps (3 to 8)
        return {
            id: Date.now() + Math.random(), // Unique ID
            x: randomX,
            y: randomY,
            width: 100, // Initial width
            height: 50, // Initial height
            steps: randomSteps,
        };
    };

    // Add a new zigzag at intervals
    useEffect(() => {
        const interval = setInterval(() => {
            setZigzags((prev) => {
                const newZigzag = generateRandomZigzag();
                if (prev.length >= 6) {
                    // If more than 6, remove the oldest and add the new one
                    return [...prev.slice(1), newZigzag];
                }
                return [...prev, newZigzag]; // Otherwise, just add the new zigzag
            });
        }, 1000); // Add a new zigzag every second

        return () => clearInterval(interval); // Cleanup interval
    }, [])

    // Generate SVG path for a zigzag
    const generateZigzagPath = (width: number, height: number, steps: number) => {
        let path = `M50 0`;
        for (let i = 0; i < steps; i++) {
            const x = (i + 1) * (width / steps);
            const y = i % 2 === 0 ? height : 0;
            path += ` L${x} ${y}`;
        }
        return path;
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            className="cursor-pointer bg-opacity-5 z-50"
            style={{ width: "100%", height: "100vh", position: "relative", overflow: "hidden", backgroundColor: "transparent" }}
        >
            <svg
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0, opacity: 0.3 }}
                xmlns="http://www.w3.org/2000/svg"
            >
                {zigzags.map((zigzag) => (
                    <motion.path
                        key={zigzag.id}
                        d={generateZigzagPath(
                            zigzag.width + (mousePosition.x / window.innerWidth) * 200, // Scale width by mouse X
                            zigzag.height + (mousePosition.y / window.innerHeight) * 200, // Scale height by mouse Y
                            zigzag.steps
                        )}
                        fill="none"
                        stroke={`hsl(${Math.random() * 360}, 70%, 50%)`} // Random stroke color
                        strokeWidth="3"
                        initial={{
                            x: zigzag.x,
                            y: zigzag.y,
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 0.9,
                            x: zigzag.x,
                            y: zigzag.y,
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                        }}
                        style={{
                            position: "absolute",
                            filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))", // Glowing effect
                        }}
                    />
                ))}
            </svg>
        </div>
    );
};

export default RandomZigzag;