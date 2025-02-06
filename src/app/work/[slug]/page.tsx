"use client"
import { useState, useEffect } from 'react';
import { useParams, usePathname } from 'next/navigation'; // or your respective hooks
import Image from 'next/image';
import { Projects } from '../../page';

export default function Page() {
    const param = useParams();
    const [currentProject, setCurrentProject] = useState(null);
    const path = usePathname();
    const splitpath = path.split('/');
    console.log(param.slug, splitpath);

    useEffect(() => {
        const handleFetchProjects = async () => {
            try {
                const response = await fetch("/data.json");
                const data = await response.json();
                const findData = data.find(
                    (item: Projects) =>
                        item.projectName?.trim().toLowerCase() ===
                        param?.slug?.toString().toLowerCase()
                );
                console.log(findData, "findData");
                setCurrentProject(findData || null);
            } catch (error) {
                console.error("Failed to fetch projects:", error);
            }
        };

        if (param.slug) {
            handleFetchProjects();
        }
    }, [param.slug]);

    // Optionally, you can show a loader or fallback UI while the data is loading.
    if (!currentProject) {
        return <p className='text-black'>Loading...</p>;
    }

    return (
        <main className="min-[651px]:text-[.9rem] h-full max-w-[1400px] max-[650px]:px-[8.9vw]">
            <header className="relative text-center font-bold mt-[1.1em] mb-[3.5em]">
                <h1 className="text-[1.802em] text-[#474747]">
                    <span>{currentProject?.projectName}</span>
                </h1>
            </header>
            <div className="flex flex-col relative mb-5">
                <div className="w-full relative overflow-hidden">
                    <div
                        className="h-full visible flex justify-center flex-row"
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        <div
                            className="min-h-[40vh] max-h-[42.5vw] relative flex-grow-0 flex-shrink-0 outline-none"
                            style={{ flexBasis: "inherit" }}
                        >
                            <Image
                                src={`/${currentProject.projectImage}`}
                                alt="project-image"
                                width={500}
                                height={500}
                                sizes="(max-width:580px) 100vw, (min-width:581px) 50vw"
                                style={{ objectFit: 'cover' }}
                                className="w-auto h-auto block max-w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="post-content mx-auto text-left max-w-[940px] relative">
                {currentProject?.description.split(`\n.`).map((item, index) => (
                    <p key={index} className="text-[17px]">{item}</p>
                ))}

            </div>
        </main>
    );
}