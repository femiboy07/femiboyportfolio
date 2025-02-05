'use client';
import FooterBar from "@/femiboy/components/FooterBar";
import Header from "@/femiboy/components/Header";
import { ReactNode } from "react";



export default function WorkLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header className=" max-[700px]:py-[3rem] h-full items-center pb-[3rem] " id="site-header" />
            <div className="w-full flex justify-center items-center ">
                {children}
            </div>
            <FooterBar />
        </>
    )
}