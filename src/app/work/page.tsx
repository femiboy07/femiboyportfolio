"use client";
import { useEffect, useState } from "react";
import { Projects } from "../page";
import Link from "next/link";


export default function Page() {
    const [project, setProjects] = useState<Projects[]>([]);

    useEffect(() => {
        const handleFetchProjects = async () => {
            const response = await fetch("/data.json");
            const data = await response.json();
            setProjects(data);
        }
        handleFetchProjects()
    }, []);
    return (
        <main className="max-w-[1280px] max-[650px]:mt-0 max-[650px]:px-[8.9vw] px-[7.5vw] ">
            <header className="w-full text-center relative mt-[1.1em] mb-[1.5rem] ">
                <h1 className="text-black text-[1.802em]">Projects</h1>
                <p className="text-yellow-800 text-[1.5em] font-extrabold"> Selected projects have worked on</p>
            </header>
            <section>
                <ul className="flex gap-x-3  sm:text-[0.9rem]  flex-wrap mb-8  mt-8  ">
                    {project.map((item, index) => (
                        <li key={index} className={`shadow-md divide-boxes mb-[1.2em] max-[659px]:w-full   flex-1 hover:-translate-y-3 transition-all duration-300 bg-white  ease-in-out flex-grow-0 flex-shrink overflow-hidden rounded-md   `}>
                            <Link href={`/${item.projectName}`} className="*:w-full *:h-[80%] *:absolute -indent-96 *:top-0  *:overflow-hidden *:z-0   *:left-0 ">

                            </Link>
                            <figure className="m-0 h-[10em] flex justify-center items-center  bg-black">
                                <span aria-hidden={true}>
                                    <Link href={`/work/${item.projectName.replace(/\s+/g, "")}`} className="z-[10] w-full butanimate h-full flex text-[0.9rem] transition duration-300 delay-300 overflow-hidden    relative justify-center min-h-[4.5em]  items-center py-[1.25em] px-[3em]   text-yellow-500 border border-yellow-800 ">
                                        {item.projectName}
                                        <svg width="72" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" className="bow-arrow w-[3.1em] h-[3.1em] ml-[1.55em]">
                                            <path fill="none" stroke="#E6FF94" strokeWidth="2" strokeMiterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path>
                                        </svg>
                                    </Link>
                                </span>
                            </figure>
                            <div className="project-info p-[2em] text-wrap ">
                                <h5 className="m-0 ">{item.projectName}</h5>
                                <Link href={`${item.projectLink}`}>
                                    {item.projectLink}
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}