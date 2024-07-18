import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";

const Newsletter = () => {
    const options = {
        triggerOnce: true,
        threshold: 0.5
    }

    const [ref, view] = useInView(options)
    return (
        <>
            <div className="w-full h-auto py-24 z-10 relative bg-lyllw/40" ref={ref} id='contact'>
                <div className="max-w-screen-xl mx-auto p-4">
                    <div className="flex justify-between items-center gap-x-4 flex-col lg:flex-row py-4">
                        <motion.p initial={{ opacity: 0, x: 50 }} animate={view ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1 }} className="text-primary text-4xl lg:text-6xl leading-[2rem] lg:leading-[5rem] text-white w-max text-transparent pointer-events-none whitespace-nowrap text-stroke-sm">contact us</motion.p>
                        <motion.div initial={{ width: 0 }} animate={view ? { width: "100%" } : {}} transition={{ duration: 2 }} className="w-full h-[2px] bg-gradient-to-r from-white to-white hidden lg:block" />
                        <motion.p initial={{ opacity: 0, x: -50 }} animate={view ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1 }} className='tracking-[0.5rem] font-bold w-max whitespace-nowrap'>CONNECT WITH BRETT</motion.p>
                    </div>

                    <div className="flex justify-between items-center gap-x-4 gap-y-16 p-4 lg:px-24 lg:py-12 flex-col">
                        <div className='flex gap-x-4 gap-y-4 flex-col lg:flex-row items-center justify-center'>
                            <a href='mailto: contact@basedbrett.com' target="_blank" rel="noopener noreferrer"><motion.p initial={{ opacity: 0 }} animate={view ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 1 }} type="text" className="font-semibold underline hover:text-gry transition-all ease-in-out duration-300 text-3xl md:text-5xl text-stroke-sm"> contact@basedbrett.com</motion.p></a>
                        </div>
                        <motion.div initial={{ opacity: 0 }} animate={view ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 0.5 }} className='max-w-none lg:max-w-lg text-center lg:text-left'>
                            <div className="flex gap-x-4 text-6xl  text-white">
                                <a href="https://twitter.com/BasedBrett" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter className=' hover:text-gry cursor-pointer transition-all ease-in-out duration-300' /></a>
                                <a href="https://t.me/basedbrett" target="_blank" rel="noopener noreferrer"><BiLogoTelegram className='hover:text-gry cursor-pointer transition-all ease-in-out duration-300' /></a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter