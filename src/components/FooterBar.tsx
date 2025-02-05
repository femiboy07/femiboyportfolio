"use client";

import Link from "next/link";
import Image from "next/image";




export default function FooterBar() {
    return (
        <footer data-section="footer" aria-hidden={false} id="site-footer" tabIndex={-1} className=" z-[3] bg-[#6B5B95] flex  w-full relative items-center justify-center" >
            <div className=" pt-[8rem] h-full w-full px-5 pb-[5rem] flex justify-between ">
                <div className="footer-bottom  w-full flex items-center  justify-between">
                    <div className="text-yellow-500 font-extrabold">
                        <span>

                            © OluwaFeranmi {new Date().getFullYear()}
                        </span>
                    </div>
                    <Link href={'https://github.com/femiboy07'}>
                        <Image src='/Github_Logo.png' width={50} height={50} alt="Github-logo" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}
