import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import { utils } from '../constants';

const Utility = () => {
    const options = {
        triggerOnce: true,
        threshold: 0.5
    }

    const [ref, view] = useInView(options)
    return (
        <>
            <div className="w-full h-auto py-24 relative bg-lyllw/40 text-white">
                <div className="max-w-screen-md mx-auto p-4 flex flex-col items-center justify-center relative z-20" ref={ref}>
                    <motion.p initial={{ opacity: 0 }} animate={view ? { opacity: 1 } : {}} transition={{ duration: 1.5 }} className='font-age text-4xl lg:text-6xl leading-[2rem] lg:leading-[5rem] bg-gradient-to-r text-white bg-clip-text w-max text-transparent pointer-events-none p-4'>UTILITIES</motion.p>

                    <div className="w=full flex flex-col gap-y-4">
                        {utils.map((util, i) => (
                            <motion.div key={i} initial={{ opacity: 0 }} animate={view ? { opacity: 1 } : {}} transition={{ duration: 1.5, delay: i * 0.5 }} className="bg-gradient-to-t from-yllw/50 to-lyllw/50 flex flex-col lg:flex-row gap-y-8 items-center w-full p-12 rounded-2xl border-solid border-[1px] border-lyllw/70 backdrop-blur-lg">
                                <div className="flex flex-col justify-center gap-y-4 w-full text-center lg:text-left">
                                    <motion.p initial={{ opacity: 0, x: -50 }} animate={view ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1.5, delay: (i * 0.5) + 0.1 }} className="font-age text-3xl lg:text-4xl text-white">{util.title}</motion.p>
                                    <motion.p initial={{ opacity: 0, x: -50 }} animate={view ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1.5, delay: (i * 0.5) + 0.15 }} className=''>{util.desc}</motion.p>
                                    <motion.div initial={{ opacity: 0, x: -50 }} animate={view ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1.5, delay: (i * 0.5) + 0.2 }} className="flex gap-x-3 items-center justify-center lg:items-start lg:justify-start group w-full">
                                      
                                        
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Utility