
import React, {useRef} from 'react'; // Add useRef here
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Anonymity = () => {
    const options = {
        triggerOnce: true,
        threshold: 0.5
    }

    const [ref, view] = useInView(options)
    return (
        <>
             <div className="w-full h-auto bg-lyllw/40 py-24 z-10 relative" id='tokenomics' ref={ref}>
                <div className="max-w-screen-xl mx-auto p-4 ">
                    
                    
                    <motion.div initial={{ opacity: 0 }} animate={view ? { opacity: 1 } : {}} transition={{ duration: 1.5 }} className="bg-gradient-to-t from-yllw/50 to-lyllw/50  backdrop-blur-lg  gap-y-8 items-center justify-center w-full p-12 rounded-2xl border-solid border-[1px] border-lyllw/70">
                    
                    <div className='flex flex-col md:flex-row'>
                        <div className=''>
                        <motion.div initial={{ opacity: 0 }} animate={view ? { opacity: 1 } : {}} transition={{ duration: 1.5, delay: .1 }} className="flex flex-col items-center justify-center ">
                        

                        <img src='https://imagedelivery.net/cwNlIhFkSHgM59lNYMgaeA/c49d64b0-1a07-4057-a7c7-1810e94bb600/public' alt='allocation'/>

                        </motion.div>
                        </div>
                        
                        <div className="items-center gap-y-4 w-full lg:w-1/2 text-center">
                        <motion.h1 initial={{ opacity: 0, x: -50 }} animate={view ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1.5, delay: .2 }} className='text-stroke-sm text-6xl md:text-8xl text-center'>TOKENOMICS</motion.h1>

                        <div className='text-center'>
                            <motion.p initial={{ opacity: 0, x: -50 }} animate={view ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1.5, delay: .3 }} className='mt-5 text-5xl md:text-7xl'>85% LP
                            </motion.p>
                            <motion.p initial={{ opacity: 0, x: -50 }} animate={view ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1.5, delay: .4 }} className='mt-5 text-5xl md:text-7xl'>10% TREASURY
                            </motion.p>
                            <motion.p initial={{ opacity: 0, x: -50 }} animate={view ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1.5, delay: .5 }} className='mt-5 text-5xl md:text-7xl'>5% CEX WALLET
                            </motion.p>
                            
                            </div>
                            
                        </div>

                        
                        </div>
                        <div className='flex flex-col sm:flex-row gap-y-5 gap-x-5 text-center text-5xl mt-5'>
                        <div className='w-full bg-lyllw/70 rounded-3xl drop-shadow-lg duration-300 transition-all ease-in-out hover:scale-110 hover:bg-lyllw/100'>
                        <a href='https://basescan.org/tx/0x748e6b909db8798aab851294c416e058f5b9fccc2367a7ec608bfda50c39432b' target="_blank" rel="noopener noreferrer"> <h1>CONTRACT RENOUNCED</h1></a>
                        </div>
                        <div className='w-full bg-lyllw/70 rounded-3xl drop-shadow-lg duration-300 transition-all ease-in-out hover:scale-110 hover:bg-lyllw/100'>
                        <a href='https://basescan.org/tx/0x7b59c9fc5476bfc5d5cdd467926a928ad6b18cb0092b9fa096332d9f441337c3' target="_blank" rel="noopener noreferrer"><h1>LP LOCKED 365 DAYS</h1></a>
                        </div>
                        </div>
                    </motion.div>
                    </div>
                    
                
            </div>
        </>
    )
}

export default Anonymity
