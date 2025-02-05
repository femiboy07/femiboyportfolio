
import { useForm } from "@formspree/react";
import { motion } from "motion/react";
import { useRef } from "react";




export default function ContactForm() {
    const [state,] = useForm("xrbekwyo");
    const inputRef = useRef<(HTMLInputElement | HTMLTextAreaElement | null)[]>([])




    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if (state.submitting) {
            e.preventDefault();
            e.currentTarget.reset()
        }

    }


    return (
        <>

            {/* {state.succeeded && createPortal(<FormSuccess />, document.body)} */}
            <motion.form method="POST" onSubmit={handleSubmit} action={"https://formspree.io/f/xrbekwyo"} initial={{ translateY: '50%' }} whileInView={{ translateY: '0', transition: { duration: 1.5, type: "spring" } }} className=" w-full  space-y-4 rounded-md items-center  justify-center max-[580px]:w-full   md:w-[60%] md:min-w-[500px] flex  flex-col    shadow-none  ">
                {state.errors && <p>There was an error</p>}

                <div className=" [&:not(:last-of-type)]:mb-[3rem] w-full flex relative justify-between  max-[580px]:mb-[3rem] max-[580px]:flex-col self-center max-[580px]:text-[1.2rem]">
                    <div className="w-full flex sm:w-[45%] relative group  flex-col mr-[20px]" data-id="full-name">
                        <label htmlFor="full-name" className="mb-[5px] group-focus-within:font-bold text-green-300 font-[200]">Your Name</label>
                        <input ref={(el) => { if (inputRef.current) inputRef.current[1] = el }} id="full-name" placeholder="Enter your name" className="border-0 bg-transparent p-[0.6em] pl-0 relative focus:outline-none border-b text-yellow-200 border-b-yellow-300" type="text" name="Name" required />
                    </div>
                    <div className="w-full flex relative group   sm:w-[45%] flex-col mr-[20px]" data-id="Email-Address">
                        <label htmlFor="Email-Address" className="mb-[5px] group-focus-within:font-bold text-green-300 font-[200]">Your Name</label>
                        <input ref={(el) => { if (inputRef.current) inputRef.current[1] = el }} id="Email-Address" placeholder="Enter your email address" className="border-0   bg-transparent p-[0.6em] pl-0 relative focus:outline-none border-b text-yellow-200 border-b-yellow-300" type="text" name="Email" required />
                    </div>

                </div>
                <div className="w-full flex relative justify-between max-[580px]:text-[1.2rem] max-[580px]:flex-col">
                    <div className="w-full relative flex group flex-col">
                        <label htmlFor="message" className="mb-[5px] group-focus-within:font-bold text-green-300">Your message</label>
                        <textarea ref={(el) => { if (inputRef.current) inputRef.current[1] = el }} name="message" placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?" id="message" rows={7} minLength={30} required={true} className="border-0 h-[4.2em] after:content-none after:inset-0 after:w-full after:absolute after:h-[1px] overflow-auto resize-none bg-transparent p-[0.6em] pl-0 relative focus:outline-none border-b text-yellow-200 border-b-yellow-300" />
                    </div>
                </div>
                <button type="submit" className="uppercase inline-flex mt-5  text-[0.9em]  tracking-[0.1em] min-w-[23.222em] relative  bg-transparent  text-yellow-500  items-center justify-center  ">
                    <div className="z-[10] butanimate h-full flex text-[0.9rem] transition duration-300 delay-300 overflow-hidden    relative justify-center min-h-[4.5em]  items-center py-[1.25em] px-[3em]   text-yellow-500 border border-yellow-800 ">
                        shoot
                        <svg width="72" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" className="bow-arrow w-[3.1em] h-[3.1em] ml-[1.55em]">
                            <path fill="none" stroke="#E6FF94" strokeWidth="2" strokeMiterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path>
                        </svg>
                    </div>
                </button>
            </motion.form>
        </>
    )

}