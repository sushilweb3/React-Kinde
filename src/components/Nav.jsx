import React from 'react'
import { motion } from 'framer-motion';
import { LuWallet, LuAlignJustify } from "react-icons/lu";
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <>
            <motion.nav initial={{ y: "-100%", opacity: 0 }} animate={{ y: "0", opacity: 1 }} transition={{ duration: .5 }} className='p-8 relative z-50 bg-lyllw/40'>
                <div className='flex justify-between items-center  max-w-screen-xl mx-auto'>
                    <p className='text-primary text-4xl text-white  text-stroke-sm pointer-events-none'>BRETT</p>
                    <div className="gap-x-12 items-center hidden lg:flex">
                        {navLinks.map((link, i) =>
                            <a href={link.link} key={i}><p className='font-semibold hover:text-lyllw transition-all ease-in-out duration-300'>{link.name}</p></a>
                        )}
                    </div>
                    <div className="gap-x-4 items-center hidden lg:flex">

                        <a href='https://kyberswap.com/swap/base/eth-to-brett'>  <button className='px-4 py-3 border-solid border-[1px] border-lyllw/70 rounded-lg bg-gradient-to-tr from-yllw/10 to-lyllw/10 font-semibold hover:scale-[1.05] hover:from-yllw/20 hover:to-lyllw/20 transition-all ease-in-out duration-300'>Buy on Kyberswap</button></a>
                        <Link to="/Auth"><button className='text-black bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-semibold rounded-lg px-4 py-3 text-center'>Access Account</button></Link>
                    </div>

                </div>
            </motion.nav>
        </>
    )
}

export default Nav