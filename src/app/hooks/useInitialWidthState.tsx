"use client";

import { useEffect, useState } from "react";



export default function useInitialWidthState() {
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [width, setWidth]);

    return [width]
}