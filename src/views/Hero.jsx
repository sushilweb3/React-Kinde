import {React, useRef, useState} from 'react'
import { motion } from 'framer-motion';
import { LuSwitchCamera } from "react-icons/lu";
import Lottie from 'react-lottie-player';
import lottieJson from '../../lottie/brett_kiss.json';
import { LuCopy } from 'react-icons/lu';
import { useInView } from 'react-intersection-observer';
const Hero = () => {
    const options = {
        triggerOnce: true,
        threshold: 0.5,
    }
    const [ref, view] = useInView(options)
    const lottieRef = useRef(null);

    const addressRef = useRef(null);
    const [copyMessage, setCopyMessage] = useState('');

    const copyAddress = () => {
        const address = addressRef.current.textContent;
        navigator.clipboard.writeText(address);
        setCopyMessage('Address Copied');
        setTimeout(() => {
            setCopyMessage('');
        }, 3000); // Clear the message after 3 seconds
    };

    return (

        <>
            <div className="w-ful  h-auto relative pb-24 z-40 bg-lyllw/40" id='home'>
               
                <motion.div initial={{ scale: 1 }} animate={{ scale: [1, 1.2, 1, 1.5, 1] }} transition={{ duration: 5, repeat: Infinity }} className="h-[48rem] w-[48rem] rounded-full blur-[128px] bg-lyllw/50 absolute -top-80 -right-80" />

                <motion.div initial={{ scale: 1 }} animate={{ scale: [1, 0.9, 1.2, 0.9, 1] }} transition={{ duration: 4, repeat: Infinity, delay: 0.1 }} className="h-[48rem] w-[48rem] rounded-full blur-[128px] bg-yllw/30 absolute -bottom-0 -left-48" />

                <div className="max-w-screen-xl mx-auto p-4 flex flex-col gap-y-12 items-center justify-center relative z-20">
                    <div className='flex items-center justify-center flex-col md:flex-row gap-y-8'>
                        <motion.div initial={{ opacity: 0, y: -25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2, delay: 0.2 }} className="w-full lg:w-1/2 flex justify-center items-center">
                            {/* <img src="/brett.webp" alt="logo image" className='w-3/4 duration-300 transition-all ease-in-out hover:scale-110 hover:rotate-[-25deg]' /> */}
                            <Lottie 
            loop
            animationData={lottieJson}
            play
            style={{ width: '100%', height: '100%' }} // This makes the Lottie animation responsive to the container size
            ref={lottieRef}
          />
                        </motion.div>
                        <div className="flex flex-col text-white w-full lg:w-1/2 items-center lg:items-start">
                            <motion.p initial={{ opacity: 0, y: -25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className='font-primary font-semibold tracking-[0.5rem]'>INTRODUCING</motion.p>
                            <motion.p initial={{ opacity: 0, y: -25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className='font-primary text-7xl lg:text-9xl bg-gradient-to-r text-white text-stroke text-transparent pointer-events-none'>BRETT</motion.p>
                            <motion.p initial={{ opacity: 0, y: -25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className='font-primary text-3xl tracking-[0.5rem] text-center lg:text-left'>PEPE’S best friend on BASE</motion.p>
                            
                        </div>
                        
                    </div>


                    
                    

                    <motion.p initial={{ opacity: 0, y: -25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .3 }} className='font-primary text-2xl tracking-[0.5rem] text-center'>one of cryptos most significant cultural icons and the mascot of BASE chain</motion.p>
                    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.3, delay: 1.5 }} className="w-3/4 h-[1px] bg-white/50" />
                    <div className="flex flex-col items-center justify-center gap-y-12">
                    <button
                        onClick={copyAddress}
                        className="px-4 py-3 border-solid border-[1px] border-lyllw/100 rounded-full bg-gradient-to-tr from-yllw/10 to-lyllw/10 flex gap-x-3 items-center font-semibold z-50 hover:scale-[1.05] hover:from-yllw/20 hover:to-lyllw/20 transition-all ease-in-out duration-300 text-sm lg:text-xl"
                    >
                        <LuCopy />
                        <p ref={addressRef} className="drop-shadow-lg">
                            0x532f27101965dd16442E59d40670FaF5eBB142E4
                        </p>
                    </button>
                    {copyMessage && (
                        <p className="text-white-500 text-xl fixed top-0 right-0 z-[155] duration-300 transition-all ease-in-out p-5 bg-lyllw/70 m-5 px-20 rounded-xl ">{copyMessage}</p>
                    )}
                        <motion.div initial={{ opacity: 0, y: -25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .3 }} className="flex flex-col md:flex-row gap-x-4 gap-y-5">
                            <a href="https://kyberswap.com/swap/base/eth-to-brett" target="_blank" rel="noopener noreferrer"><button className="bg-white  text-lyllw uppercase text-xl px-4 py-3 border-solid border-[1px] border-lyllw/70 rounded-full bg-gradient-to-tr from-yllw/10 to-lyllw/10 flex gap-x-3 items-center font-semibold hover:scale-[1.05] hover:from-yllw/20 hover:to-lyllw/20 transition-all ease-in-out duration-300 mx-auto">
                                <p>Buy on Kyberswap</p>
                                <LuSwitchCamera />
                            </button></a>
                            <a href="https://www.okx.com/web3/dex-swap#inputChain=8453&inputCurrency=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee&outputChain=8453&outputCurrency=0x532f27101965dd16442E59d40670FaF5eBB142E4" target="_blank" rel="noopener noreferrer"><button className="bg-white  text-lyllw uppercase text-xl px-4 py-3 border-solid border-[1px] border-lyllw/70 rounded-full bg-gradient-to-tr from-yllw/10 to-lyllw/10 flex gap-x-3 items-center font-semibold hover:scale-[1.05] hover:from-yllw/20 hover:to-lyllw/20 transition-all ease-in-out duration-300 mx-auto">
                                <p>Buy on OKX</p>
                                <LuSwitchCamera />
                            </button></a>
                            <a href="https://www.dextools.io/app/en/base/pair-explorer/0x404e927b203375779a6abd52a2049ce0adf6609b?t=1708765825026" target="_blank" rel="noopener noreferrer"><button className="bg-white  text-lyllw uppercase text-xl px-4 py-3 border-solid border-[1px] border-lyllw/70 rounded-full bg-gradient-to-tr from-yllw/10 to-lyllw/10 flex gap-x-3 items-center font-semibold hover:scale-[1.05] hover:from-yllw/20 hover:to-lyllw/20 transition-all ease-in-out duration-300 mx-auto">Dextools Chart</button></a>
                        </motion.div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero
