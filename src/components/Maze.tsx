import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import "./Maze.css"; // Include CSS for glowing effects

const Maze = () => {
    const [maze, setMaze] = useState<number[][]>([]);

    const generateMaze = (width: number, height: number) => {
        const grid = Array(height)
            .fill(null)
            .map(() => Array(width).fill(1)); // Initialize with walls

        const carve = (x: number, y: number) => {
            grid[y][x] = 0; // Carve out the current cell
            const directions = [
                [0, -2], [2, 0], [0, 2], [-2, 0] // Up, Right, Down, Left
            ].sort(() => Math.random() - 0.5); // Randomize directions

            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;

                if (ny > 0 && ny < height && nx > 0 && nx < width && grid[ny][nx] === 1) {
                    grid[ny - dy / 2][nx - dx / 2] = 0; // Carve wall between cells
                    carve(nx, ny); // Recurse
                }
            }
        };

        carve(1, 1); // Start carving from the top-left corner
        return grid;
    };

    useEffect(() => {
        const generatedMaze = generateMaze(21, 21); // Generate a 21x21 maze
        setMaze(generatedMaze);
    }, []);

    const cellSize = 20; // Size of each cell

    return (
        <div className="maze-container w-full">
            <svg
                width="100%"
                height="100%"
                viewBox={`0 0 ${maze[0]?.length * cellSize} ${maze.length * cellSize}`}
                xmlns="http://www.w3.org/2000/svg"
            >
                {maze.map((row, y) =>
                    row.map((cell, x) => {
                        if (cell === 1) {
                            return (
                                <motion.rect
                                    key={`${x}-${y}`}
                                    x={x * cellSize}
                                    y={y * cellSize}
                                    width={cellSize}
                                    height={cellSize}
                                    fill={`hsl(${Math.random() * 360}, 70%, 50%)`} // Random colors
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: Math.random() * 2, // Random delays
                                        duration: 0.5,
                                    }}
                                    className="glowing-wall"
                                />
                            );
                        }
                        return null;
                    })
                )}
            </svg>
        </div>
    );
};

export default Maze;