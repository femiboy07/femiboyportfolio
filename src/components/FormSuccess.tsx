"use client";
import React from "react";




export default function FormSuccess() {

    return (
        <dialog>
            <div className="fixed w-full h-full top-0 bottom-0 left-0 right-0 bg-slate-300 opacity-20"></div>
            <div className="bg-white max-w-md flex justify-center h-64 px-3 py-3">
                <p>Message submitted</p>
            </div>
        </dialog>
    )
}