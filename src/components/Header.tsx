"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useInitialWidthState from "../app/hooks/useInitialWidthState";
import Image from "next/image";


const Header = ({ className, id }: { className: string, id: string | undefined }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [width] = useInitialWidthState()


    const handleToggleNavBar = () => {
        const navButton = document.getElementById('nav-button');
        const navMenu = document.getElementById('contact-menu');

        if (!isOpen) {

            navButton?.addEventListener('click', () => {
                navMenu?.classList.add('open');




                setIsOpen(true);
                if (navMenu?.classList.contains('open') && width <= 768) document.documentElement.style.overflow = 'hidden'
                // document.documentElement.style.overflow = 'hidden'
            })
        } else {

            navButton?.addEventListener('click', () => {
                navMenu?.classList.remove('open');
                setIsOpen(false)
            })

        }
    }

    useEffect(() => {
        const navMenu = document.getElementById('contact-menu');
        const navButton = document.getElementById('nav-button');
        if (isOpen && width <= 768) {
            navMenu?.classList.add('open');
            navButton?.classList.add('x')
            document.documentElement.style.overflow = 'hidden'
        } else {
            navMenu?.classList.remove('open');
            navButton?.classList.remove('x')
            document.documentElement.style.overflow = 'auto'
        }
    }, [isOpen, width])


    return (
        <header id={id} className={` header-carriage flex ${className}    items-center h-[11.12em] z-[10000] max-[700px]:px-[3em] max-[580px]:text-[1.2rem]   text-[1rem] max-h-[12rem] justify-between w-full fixed min-[701px]:px-[6em]   `}>



            <div className="flex items-center z-[9999]  justify-center hover:rotate-2 hover:scale-110 transform  duration-100 ease-in ">
                <Link href={'/'} className="flex  h-full items-center">
                    {/* <h4 className=" text-yellow-500 text-[5.4em]  rounded-sm flex text-center items-center justify-center ">F
                        <br />
                        <div style={{ width: "inherit", height: "inherit" }} className="rounded-full  self-center bg-white animate-bounce duration-100"></div>
                    </h4> */}
                    <svg
                        width="150"
                        height="150"

                        viewBox="0 0 200 100"
                        fill="none"
                        stroke="#E6DF94"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg">

                        {/* <!-- Stylish "F" --> */}
                        <path d="M30 80 L30 30 Q30 25,35 25 L65 25" />
                        <path d="M30 55 L55 55" />

                        {/* <!-- "O" as a Dot --> */}
                        <circle cx="50" cy="0" r="6" fill="currentColor" className=" animate-spin" />

                    </svg>
                </Link>
            </div>
            <div>
                <Link href={'#contacts'} id="contact-me" className="px-3 py-2 hidden md:block  font-bold relative      bg-yellow-500 rounded-md">
                    <span className="z-[10]"> Contact Me.</span>
                </Link>
            </div>

            <button id="nav-button" onClick={handleToggleNavBar} aria-expanded={isOpen} className={`md:hidden   z-[9999]  cursor-pointer w-[2.78em] h-[2.09em] relative hover:bg-transparent inline-flex   mt-[0.699em] text-lime-500 items-center     `}>

            </button>
            {width <= 768 && <nav id="contact-menu" aria-label="contact-menu" className={`z-[9998]  shadow-md font-bold  flex *:text-yellow-500 p-[3.473em] flex-col items-center justify-center  ${isOpen ? 'fixed' : 'hidden'}  `}>
                <ul className="m-0 p-0 text-[10vw]  flex flex-col items-center justify-center">
                    <li className="  hover:text-blue-300 relative  ">
                        <Link href={'/work'} className="bar-button before:w-7 before:-z-20 before:hidden hover:before:block   before:top-0 hover:before:scale-125 hover:before:z-[99999] hover:before:contents-['My Work'] hover:before:text-white before:content-center   hover:before:bg-opacity-40   hover:before:z-30 hover:before:h-full hover:before:skew-x-9 hover:before:right-4 hover:before:bottom-0 before:left-0 hover:before:w-10 hover:before:translate-y-0 before:transition-all hover:before:bg-blue-300   before:duration-300 before:ease before:h-4 before:bg-yellow-600 before:absolute">
                            My Work
                        </Link>
                    </li>
                    <li className="  hover:text-blue-300 relative " onClick={() => setIsOpen(false)}>
                        <Link href={'#about'} className="bar-button before:w-7 before:-z-20 before:hidden hover:before:block   before:top-0 hover:before:scale-125 hover:before:z-[99999] hover:before:contents-['About Me'] hover:before:text-white before:content-center   hover:before:bg-opacity-40   hover:before:z-30 hover:before:h-full hover:before:skew-x-9 hover:before:right-4 hover:before:bottom-0 before:left-0 hover:before:w-10 hover:before:translate-y-0 before:transition-all hover:before:bg-blue-300   before:duration-300 before:ease before:h-4 before:bg-yellow-600 before:absolute">
                            About Me
                        </Link>
                    </li>
                </ul>

                <div className="absolute bottom-5 w-full left-0 right-0 flex justify-center items-center">
                    <div className="border-t flex ">
                        <div className="text-yellow-500 font-extrabold">
                            <span>

                                © OluwaFeranmi {new Date().getFullYear()}
                            </span>
                        </div>
                        <Link href={'https://github.com/femiboy07'} className="self-center pl-5">
                            <Image src='/Github_Logo.png' width={50} height={50} alt="Github-logo" />
                        </Link>
                    </div>
                </div>
            </nav>}


        </header >

    )
}

export default Header;