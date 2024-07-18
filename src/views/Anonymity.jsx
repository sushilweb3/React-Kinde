import React, { useRef } from 'react'; // Add useRef here
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {FaTelegramPlane, FaTwitter } from 'react-icons/fa'
import Lottie from 'react-lottie-player';
import lottieJson from '../../lottie/Brett_snap.json';
import { Stream } from '@cloudflare/stream-react';

const Anonymity = () => {
    const options = {
        triggerOnce: true,
        threshold: 0.5
    }

    const lottieRef = useRef(null);
    const VideoBrett = "ebbf0cf114d2eb7cce51cccadff25482";
    const [ref, view] = useInView(options)
    return (
        <>
             <div className="w-full h-auto bg-lyllw/40 py-24 z-10 relative" id='about' ref={ref}>
                <div className="max-w-screen-xl mx-auto p-4 ">
                    <div className="flex justify-between items-center gap-x-4 flex-col lg:flex-row py-4 ">
                        <motion.p initial={{ opacity: 0, x: 50 }} animate={view ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1 }} className="text-primary text-4xl lg:text-6xl leading-[2rem] lg:leading-[5rem] bg-gradient-to-r text-white w-max text-transparent pointer-events-none">BRETT</motion.p>
                        <motion.div initial={{ width: 0 }} animate={view ? { width: "100%" } : {}} transition={{ duration: 2 }} className="w-full h-[2px] bg-gradient-to-r from-lyllw to-yllw hidden lg:block" />
                        <motion.p initial={{ opacity: 0, x: -50 }} animate={view ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1 }} className='tracking-[0.5rem] font-bold w-max whitespace-nowrap'>THE PEPE'S BESTFRIEND</motion.p>
                    </div>

                    <motion.div initial={{ opacity: 0 }} animate={view ? { opacity: 1 } : {}} transition={{ duration: 1.5 }} className="bg-gradient-to-t from-yllw/50 to-lyllw/50  backdrop-blur-lg  flex flex-col lg:flex-row gap-y-8 items-center justify-center w-full p-12 rounded-2xl border-solid border-[1px] border-lyllw/70">
                        <motion.div initial={{ opacity: 0 }} animate={view ? { opacity: 1 } : {}} transition={{ duration: 1.5, delay : 0.3 }} className="flex flex-col items-center justify-center w-1/2">
                            <Lottie 
            loop
            animationData={lottieJson}
            play
            style={{ width: '100%', height: '100%' }} // This makes the Lottie animation responsive to the container size
            ref={lottieRef}
          />
                        </motion.div>
                        <div className="flex flex-col justify-center gap-y-4 w-full lg:w-1/2 text-center lg:text-left">
                        <motion.h1 initial={{ opacity: 0, x: -50 }} animate={view ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1.5, delay : 0.3 }} className='text-stroke-sm text-5xl'>Who's Brett?!</motion.h1>

                            <motion.p initial={{ opacity: 0, x: -50 }} animate={view ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1.5, delay : 0.3 }} className='text-2xl'>Brett is the legendary character from Matt Furie’s Boys' club comic. He is a dancer and loves video games. Now he is living on the BASE blockchain as a Fan tribute. He has become blue mascot of the blue chain, BASE.</motion.p>
                            <div className='rounded-xl drop-shado-sm'>
                                <Stream  controls src={VideoBrett} />
                                </div>
                            <motion.p initial={{ opacity: 0, x: -50 }} animate={view ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1.5, delay : 0.3 }} className='text-2xl'>Video Courtesy: Feels Good Man</motion.p>


                            
                        </div>
                        
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={view ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1.5, delay : 0.5 }} className="flex gap-x-4 items-center justify-center mt-5 mx-auto">
                                <a href='https://t.me/basedbrett'><button className="bg-white  text-lyllw uppercase text-xl px-4 py-3 border-solid border-[1px] border-lyllw/70 rounded-full bg-gradient-to-tr from-yllw/10 to-lyllw/10 flex gap-x-3 items-center font-semibold hover:scale-[1.05] hover:from-yllw/20 hover:to-lyllw/20 transition-all ease-in-out duration-300">
                                    <p>Telegram</p>
                                    <FaTelegramPlane />
                                </button></a>
                               <a href="https://twitter.com/BasedBrett"> <button className="bg-white  text-lyllw uppercase text-xl px-4 py-3 border-solid border-[1px] border-lyllw/70 rounded-full bg-gradient-to-tr from-yllw/10 to-lyllw/10 flex gap-x-3 items-center font-semibold hover:scale-[1.05] hover:from-yllw/20 hover:to-lyllw/20 transition-all ease-in-out duration-300">
                                <p>Twitter</p>
                                <FaTwitter /></button></a>
                            </motion.div>
                </div>
            </div>
        </>
    )
}

export default Anonymity
