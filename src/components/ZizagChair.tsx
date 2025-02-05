"use client"
import { motion } from "framer-motion";

export const ZigzagChair = ({ color }: { color: string }) => {
    const randomDelay = Math.random() * 2
    return (
        <motion.svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.path
                d="M50 50 L150 50 L150 200 L250 200 L250 300 L100 300"
                stroke={color}
                // className={` drop-shadow-[0px_0px_10px_${color}]`}
                filter={`drop-shadow-[0px_0px_10px_${color}]`}
                strokeWidth="5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 2 }}
                transition={{
                    duration: 3,
                    delay: randomDelay,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />
        </motion.svg>
    );
};

