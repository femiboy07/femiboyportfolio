"use client"
import Header from "../components/Header";
import { motion, useScroll, useTransform } from 'motion/react';
import RandomZigzag from "../components/RandomZizzag";
import AboutMeEllipse from "../components/ZizzagEllipseWithText";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import FooterBar from "../components/FooterBar";

export type Projects = {
  id: string;
  projectName: string;
  projectLink: string;
  projectImage: string;
  description: string
}

export default function Home() {

  const mainRef = useRef<HTMLElement | null>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const [activeSection] = useState(0);


  const { scrollYProgress } = useScroll();
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: aboutRef,
    offset: ["start end", "end end"]

  });
  const opacity1 = useTransform(scrollYProgress, [0, 0.25], [1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0.25, 0], [2, 0])
  const opacity2 = useTransform(scrollYProgress, [0, 0.25], [1, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.75], [0, 1]);
  // const opacity4 = useTransform(scrollYProgress, [0.75, 1], [0, 1]);


  // useEffect(() => {

  //   const sectionElements = sectionsRef.current.filter((el): el is HTMLElement => el !== null);


  //   observerRef.current = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry, index) => {
  //         if (entry.isIntersecting && index !== activeSection) {
  //           // Update the active section only when it's fully in view
  //           setActiveSection(index);
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.9,
  //       root: null,
  //       // rootMargin: "2.2px"
  //       // Trigger only when the section is fully in view
  //     }
  //   );


  //   sectionElements.forEach((section) => {
  //     if (section && observerRef.current) {
  //       observerRef.current.observe(section)
  //     }
  //   });
  //   return () => {
  //     if (observerRef.current) {
  //       sectionElements.forEach((section) => observerRef.current?.unobserve(section));
  //       observerRef.current.disconnect();
  //     }
  //   };

  // }, []);



  // useLayoutEffect(() => {
  //   const handleWheel = throttle((event: WheelEvent) => {
  //     if (isScrollingRef.current) return;

  //     const direction = event.deltaY > 0 ? 1 : -1;
  //     const nextSection = activeSection + direction;

  //     if (nextSection >= 0 && nextSection < sectionsRef.current.length) {
  //       setActiveSection(nextSection);
  //     }

  //     isScrollingRef.current = true;
  //     setTimeout(() => {
  //       isScrollingRef.current = false;
  //     }, 1000); // Adjust timeout to match animation speed
  //   }, 100); // Increased throttle delay to reduce rapid scrolls

  //   window.addEventListener("wheel", handleWheel);

  //   return () => {
  //     window.removeEventListener("wheel", handleWheel);
  //   };
  // }, [activeSection]);

  // Sync Scroll to Active Section
  useEffect(() => {
    const targetSection = sectionsRef.current[activeSection];
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeSection]);




  return (
    <div className=" relative">
      <Header className="" id="" />
      <motion.main className=" block " tabIndex={-1}
        ref={mainRef}>
        {/* <div className="max-w-[1000px] px-8 md:px-10 w-full"> */}
        <motion.section style={{

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: activeSection === 0 ? '#6B5B95' : '#FEFBF6',
          color: '#fff',
          fontSize: '1.2rem',
          transition: 'background-color 0.3s ease',
          scale: opacity1,
          rotate: rotate,
        }} ref={(el) => { sectionsRef.current[0] = el; }} tabIndex={-1} id="home" className="flex  w-full  sm:my-0  items-center bg-black   z-0 outline-none   justify-center flex-col flex-1  overfow-hidden  relative  pb-[4.17rem] ">

          <motion.div className="flex justify-center  relative max-[580px]:px-[15vw]    items-center w-full ">
            <motion.div className=" leading-10  z-30 text-left p-5 rounded-md -translate-y-1/2  absolute top-1/2  ">
              <motion.h5 initial={{ translateY: '100%' }} animate={{ translateY: "0", transition: { ease: ["easeInOut"], duration: '0.4' } }} className="text-white font-bold text-[1.4em]">Hey, Am a </motion.h5>
              {/* <br /> */}
              <div className="text-yellow-500 font-extrabold md:text-[4.4em] text-5xl  tracking-tighter ">
                <motion.h1 initial={{ translateX: '-100%' }} animate={{ translateX: '0', animationDelay: 'revert-layer', dur: '0.5', animation: "ease-in", transition: { delay: 0.5, ease: ["easeOut"], duration: '0.4' } }}>Frontend</motion.h1>
                {/* <br /> */}
                <motion.h1 initial={{ translateX: '100%' }} animate={{ translateX: '0', animationDelay: 'revert-layer', transition: { delay: 0.5, ease: ["easeInOut"], duration: '0.4' } }}>Developer</motion.h1></div>
              <motion.p initial={{ translateY: '100%' }} animate={{ translateY: "0", transition: { ease: ["easeInOut"], duration: '0.4' } }} className="text-yellow-500 text-[1.4em] tracking-tight font-bold  ">I like building nice api and user interfaces</motion.p>
              {/* <RandomZigzag /> */}
            </motion.div>
            <RandomZigzag />
          </motion.div>
          {/* <svg
            viewBox="0 0 1440 120"
            className="absolute "
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: 'block' }}
          >
            <path
              fill="#FEFBF6"
              // stroke="white"

              d="M0,96L48,85.3C96,75,192,53,288,69.3C384,85,480,139,576,149.3C672,160,768,128,864,101.3C960,75,1056,53,1152,48C1248,43,1344,53,1392,58.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            />
          </svg> */}
        </motion.section>

        <motion.section style={{

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: activeSection === 1 ? '#FEFBF6' : '',
          color: '#fff',
          scale: opacity2,
          rotate: opacity3,
          transition: 'background-color 0.3s ease',
        }} ref={aboutRef} tabIndex={-1} id="about" className="  min-[701px]:min-h-screen   bg-[#FEFBF6]   max-[1199px]:min-h-screen relative   flex  items-center justify-center  text-center   ">

          <div className="min-[701px]:max-w-[1500px] min-[701px]:px-[10rem] max-[700px]:px-[5rem] min-[701px]:mt-[5.5vh] min-[701px]:items-center max-[700px]:flex-col max-[580px]:px-[15vw] max-[580px]:mt-[7.12em] max-[700px]:mt-[11.12em] w-full justify-between mb-4   flex  md:flex-row items-center px-3 md:px-[10rem]  ">
            <AboutMeEllipse scrollProgress={scrollYProgress2} aboutRef={aboutRef} />
          </div>

        </motion.section>

        <motion.section

          style={{
            // height: '100vh',
            display: 'flex',
            width: "100%",
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: activeSection === 2 ? '#6B5B95' : '#FF6F61',
            color: '#fff',
            // scale: opacity3,
            // rotate: opacity3,
            transition: 'background-color 0.3s ease',
          }} ref={(el) => { sectionsRef.current[2] = el; }} tabIndex={-1} id="projects" className=" max-[580px]:mb-[10rem] md:min-h-screen relative   flex flex-col max-[1199px]:min-h-screen    bg-black   py-[15vh] text-center px-3 items-center justify-center w-full">
          <div className="md:max-w-[1500px] mt-[2.78em] max-[580px]:py-0 w-full flex justify-center">
            <div className="max-w-2xl w-full bg-white rounded-md px-5 py-5  flex flex-col">
              <h1 className="text-yellow-500 text-[2.5em] font-bold">I Build  & <br /> Design Stuffs</h1>
              <p className="text-[1.5em] text-yellow-800">Open Source projects, web apps and experimentals</p>
              <Link href={'/work'} className="uppercase inline-flex mt-5   tracking-[0.1em] min-w-[23.222em] relative  bg-transparent  text-yellow-500  items-center justify-center  ">

                <div className="z-[10] butanimate h-full flex text-[0.9rem] transition duration-300 delay-300 overflow-hidden    relative justify-center min-h-[4.5em]  items-center py-[1.25em] px-[3em]   text-yellow-500 border border-yellow-800 ">
                  see my work
                  <svg width="72" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" className="bow-arrow w-[3.1em] h-[3.1em] ml-[1.55em]">
                    <path fill="none" stroke="#E6FF94" strokeWidth="2" strokeMiterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </motion.section >


        <motion.section ref={(el) => { sectionsRef.current[3] = el; }} tabIndex={-1} id="contacts" className="max-[580px]:mb-[10rem] bg-[#FEFBF6] md:min-h-screen  max-[1199px]:h-screen  w-full relative flex items-center flex-col justify-center  ">
          <div className="   flex flex-col justify-center items-center  md:max-w-[1500px] px-3  max-[580px]:px-[15vw] md:px-[10rem]  sm:px-[7rem] w-full ">
            <motion.article initial={{ translateY: '50%' }} whileInView={{ translateY: '0', transition: { duration: 1.5, type: "spring" } }} className="mb-[5.2em] sm:text-center relative ">
              <div className="text-center relative ">
                <h2 className="text-yellow-500 font-bold text-[3.2em]">Send me a message</h2>
                <p className="mx-auto text-[1.6em] mt-[15px] tracking-[0.02em] md:max-w-md  text-yellow-300">Got a question or proposal
                  <br />
                  to say hello? Go ahead
                </p>
              </div>
            </motion.article>

            <ContactForm />
          </div>
        </motion.section>

      </motion.main>

      <FooterBar />
    </div >
  );
}
// NuPWkc66droV-ngIaKxX