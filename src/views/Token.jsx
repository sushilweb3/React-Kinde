import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LuCopy, LuShoppingCart } from "react-icons/lu";
// import DOTS from 'vanta/dist/vanta.cells.min'
import Lottie from 'react-lottie-player';
import lottieJson from '../../lottie/brett_gun.json';
import { Stream } from '@cloudflare/stream-react';

const Token = () => {
    const lottieRef = useRef(null);

    // const [vantaEffect, setVantaEffect] = useState(null)
    // const myRef = useRef(null)
    // useEffect(() => {
    //     if (!vantaEffect) {
    //         setVantaEffect(DOTS({
    //             el: myRef.current,
    //             mouseControls: true,
    //             touchControls: true,
    //             gyroControls: false,
    //             minHeight: 200.00,
    //             minWidth: 200.00,
    //             scale: 1.00,
    //             color1: 0x17ffff,
    //             color2: 0x3d9fc,
    //             size: 3.30,
    //             speed: 0.50
    //         }))
    //     }
    //     return () => {
    //         if (vantaEffect) vantaEffect.destroy()
    //     }
    // }, [vantaEffect])

    const options = {
        triggerOnce: true,
        threshold: 0.5,
    }
    const videoIdOrSignedToken = "023a54329fa9c24ef9fc6dab1dd8b428";
    const Video2 = "04c4c207b282817c614356d7815e673b";

    const [ref, view] = useInView(options)
    return (
        <>
            <div className="w-full h-auto relative bg-lyllw/40 !text-white" >
                <div className="w-full h-screen absolute z-10 opacity-100">
                  
                </div>
                <div className="max-w-screen-xl mx-auto p-4 flex flex-col gap-y-8 items-center justify-center relative z-20" ref={ref}>
                    <div className='flex flex-col items-center font-bold gap-y-4 translate-y-28 z-50'>
                        <motion.div initial={{ opacity: 0, y: -50 }} animate={view ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="flex flex-col items-center">
                            <p className='tracking-[0.5rem]'>PEPE'S</p>
                            <p className='tracking-[0.5rem]'>BESTFRIEND</p>
                        </motion.div>
                        <a href="#" className='hover:scale-110 transition-all ease-in-out duration-300'>
                            <motion.div initial={{ opacity: 0, scale: 0 }} animate={view ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.7 }} className="bg-gradient-to-b from-gry to-blk p-6 rounded-full border-solid border-[1px] border-lyllw/70">
                                <motion.div initial={{ opacity: 0, scale: 0 }} animate={view ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.7, delay: 0.25 }} className="bg-gradient-to-tr from-lyllw to-yllw rounded-full p-4">
                                    <div className="rounded-full w-40 h-40">
                                        <Lottie 
            loop
            animationData={lottieJson}
            play
            style={{ width: '100%', height: '100%' }} // This makes the Lottie animation responsive to the container size
            ref={lottieRef}
          />
                                    </div>
                                </motion.div>
                            </motion.div>
                        </a>
                    </div>
                    <motion.div initial={{ opacity: 0 }} animate={view ? { opacity: 1 } : {}} transition={{ duration: 2 }} className="bg-gradient-to-t from-white/20 to-black/20 flex flex-col gap-y-8 items-center justify-center w-full pt-24 pb-12 rounded-2xl border-solid border-[1px] border-lyllw/70 relative overflow-hidden backdrop-blur-lg">

                        
                      

                        <div className='flex flex-col justify-center items-center text-6xl lg:text-9xl leading-[3rem] lg:leading-[5rem]'>
                            <motion.p initial={{ opacity: 0, x: -50 }} animate={view ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1, delay: 0.3 }} className="text-primary bg-gradient-to-r text-white w-max text-transparent pointer-events-none text-stroke">BRETT</motion.p>
                           
                        </div>
                     

                        <div className='flex p-10 gap-x-3 flex-col md:flex-row gap-y-7 w-full'>
  <div className='w-full'>
    <div className='aspect-w-16 aspect-h-9'>
      <Stream className='w-full h-full object-cover' controls src={videoIdOrSignedToken} />
    </div>
    <p className='text-center text-xl'>How to buy on Base Mainnet</p>
  </div>
  <div className='w-full'>
    <div className='aspect-w-16 aspect-h-9'>
      <Stream className='w-full h-full object-cover' controls src={Video2} />
    </div>
    <p className='text-center text-xl'>How to buy on CoinBase</p>
  </div>
</div>


                            <motion.div initial={{ opacity: 0 }} animate={view ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 2 }} className="flex gap-x-4">
                        <a  href="https://kyberswap.com/swap/base/eth-to-brett" target="_blank" rel="noopener noreferrer"><button className="px-4 py-3 border-solid border-[1px] border-lyllw/70 rounded-full bg-gradient-to-tr from-yllw/100 to-lyllw/100 flex gap-x-3 items-center font-semibold hover:scale-[1.05] hover:from-yllw/20 hover:to-lyllw/100 transition-all ease-in-out duration-300">
                            <p>Buy Now</p>
                            <LuShoppingCart />
                        </button></a>


                        <a href="https://www.dextools.io/app/en/base/pair-explorer/0x404e927b203375779a6abd52a2049ce0adf6609b?t=1708765825026" target="_blank" rel="noopener noreferrer"><button className="px-4 py-3 border-solid border-[1px] border-lyllw/70 rounded-full bg-gradient-to-tr from-yllw/30 to-lyllw/30 font-semibold hover:scale-[1.05] hover:from-yllw/40 hover:to-lyllw/40 transition-all ease-in-out duration-300">See Charts</button></a>
                    </motion.div>
                    </motion.div>
                    {/* <motion.p initial={{ opacity: 0 }} animate={view ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 1.5 }} className='max-w-3xl text-center'>$Brett is a DAO Token which is designed as a revenue share of Brett. Holders can stake $Brett to earn revenue generated by the Brett platform.</motion.p> */}
                    



                    
                </div>
                
            </div>
        </>
    )
}

export default Token
