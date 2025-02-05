"use client";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";


// const splitText = (text: string) =>
//     text.split('\n').map((word, index) => (
//         <span key={index} className="inline-block relative   ">
//             {word}
//         </span>
//     ));


const PaintedParagraph = ({ text, className = '', aboutRef }: { text: string, className: string, scrollProgress: MotionValue<number>, aboutRef: React.RefObject<HTMLElement | null> }) => {
    // Create a ref for each paragraph container.

    const scrollRef = useRef<HTMLDivElement | null>(null);
    // Use useScroll to track the scroll progress for this container.
    // The offset array defines when the animation starts and ends relative to the viewport.
    const { scrollYProgress } = useScroll({
        container: aboutRef,
        target: scrollRef,
        offset: ['start 50%', 'end 50%']
    });

    // Map scroll progress (0 to 1) to a width percentage (from 0% to 100%)

    const clipPath = useTransform(
        scrollYProgress,
        [0, 1],
        ['inset(0 100% 0 0)', 'inset(0 0% 0 0)']
    );
    return (
        <div ref={scrollRef} className={`relative   text-left mr-1  block   ${className}`}>
            {/* Base Text (unpainted) */}
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { ease: "easeInOut", duration: 4.5 } }} className=" inline-block font-bold      mb-0  " style={{ color: "#666666", opacity: 0.2 }}>
                {text}
            </motion.p>

            {/* Overlay Text (painted) */}
            <motion.p
                className="absolute top-0 left-0   text-yellow-500  overflow-hidden  font-bold"
                style={{
                    // width: overlayWidth,


                    // Change this to your "paint" color
                }}
            >
                {text.split('\n').map((word, index) => (
                    <motion.span
                        key={index}
                        className="inline-block   "
                        style={{ clipPath, height: "100%", width: "100%" }}
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.p>
        </div >
    );
};

export default function AboutArticle({ scrollProgress, aboutRef }: { scrollProgress: MotionValue<number>, aboutRef: React.RefObject<HTMLDivElement | null> }) {
    const text1 = `I'm a passionate Front-End Developer`;
    const text2 = `with a keen eye for design,`
    const text3 = `specializing in modern, `
    const text4 = `responsive web interfaces using React,`
    const text5 = ` Next.js, and Tailwind CSS,`
    const text6 = ` My strong foundation in HTML, CSS,`
    const text7 = `and JavaScript ensures that my digital`
    const text8 = `experiences are both visually`
    const text9 = ` appealing and highly functional.`
    const text10 = `I also bring backend `;
    const text11 = `experience with Node.js,`
    const text12 = ` Express, and database management,which allows`;
    const text13 = `me to seamlessly integrate client-side design`
    const text14 = `with server-side functionality`
    const text15 = `Always eager to learn and tackle challenges`
    const text16 = `I strive to deliver creative`
    const text17 = `quality solutions`
    const text18 = `in every project`

    return (
        <article className="relative  txt-article p-5 min-h-64  mr-4 ">

            <div className="last-of-type:mb-5  quoted-text">
                <PaintedParagraph aboutRef={aboutRef} scrollProgress={scrollProgress} text={text1} className="min-[701px]:w-[40vw]" />
                <PaintedParagraph aboutRef={aboutRef} scrollProgress={scrollProgress} text={text2} className="min-[701px]:w-[40vw]" />
                <PaintedParagraph aboutRef={aboutRef} scrollProgress={scrollProgress} text={text3} className="min-[701px]:w-[40vw]" />
                <PaintedParagraph aboutRef={aboutRef} scrollProgress={scrollProgress} text={text4} className="min-[701px]:w-[40vw]" />
                <PaintedParagraph aboutRef={aboutRef} scrollProgress={scrollProgress} text={text5} className="min-[701px]:w-[40vw]" />
                <PaintedParagraph aboutRef={aboutRef} scrollProgress={scrollProgress} text={text6} className="min-[701px]:w-[40vw]" />
                <PaintedParagraph aboutRef={aboutRef} scrollProgress={scrollProgress} text={text7} className="min-[701px]:w-[40vw]" />
                <PaintedParagraph aboutRef={aboutRef} scrollProgress={scrollProgress} text={text8} className="min-[701px]:w-[40vw]" />
                <PaintedParagraph aboutRef={aboutRef} scrollProgress={scrollProgress} text={text9} className="min-[701px]:w-[40vw]" />
                <PaintedParagraph aboutRef={aboutRef} scrollProgress={scrollProgress} text={text10} className="min-[701px]:w-[40vw]" />
                <PaintedParagraph aboutRef={aboutRef} scrollProgress={scrollProgress} text={text11} className="min-[701px]:w-[40vw]" />
                <PaintedParagraph aboutRef={aboutRef} scrollProgress={scrollProgress} text={text12} className="min-[701px]:w-[40vw]" />
                <PaintedParagraph aboutRef={aboutRef} scrollProgress={scrollProgress} text={text13} className="min-[701px]:w-[40vw]" />
                <PaintedParagraph aboutRef={aboutRef} scrollProgress={scrollProgress} text={text14} className="min-[701px]:w-[40vw]" />
                <PaintedParagraph aboutRef={aboutRef} scrollProgress={scrollProgress} text={text15} className="min-[701px]:w-[40vw]" />
                <PaintedParagraph aboutRef={aboutRef} scrollProgress={scrollProgress} text={text16} className="min-[701px]:w-[40vw]" />
                <PaintedParagraph aboutRef={aboutRef} scrollProgress={scrollProgress} text={text17} className="min-[701px]:w-[40vw]" />
                <PaintedParagraph aboutRef={aboutRef} scrollProgress={scrollProgress} text={text18} className="min-[701px]:w-[40vw]" />

            </div>
        </article>
    );
}