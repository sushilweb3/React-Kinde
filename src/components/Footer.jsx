import React from 'react'
import { HiLocationMarker } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import {MdCorporateFare} from 'react-icons/md';
const Footer = () => {
    return (
        <>
            <div className="w-full h-auto bg-black relative bg-lyllw/40">
                <div className="max-w-screen-xl mx-auto flex flex-col gap-y-4">
                    <div className="flex items-center justify-center py-12">
                        <p className='text-primary text-9xl text-center text-white w-max text-transparent pointer-events-none text-stroke'>BASED BRETT</p>


                        <div style={{ position: 'absolute', left: '-150px' }}>
      <img src="https://pixel.sitescout.com/iap/f6582fc6c2e08692" width="1" height="1" alt="Tracking Pixel 1" />
      <img src="https://clickserv.sitescout.com/conv/7f641777ea0adf8d" width="1" height="1" alt="Tracking Pixel 2" />
    </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-x-10">
                    <span className='flex items-center gap-x-2'><MdCorporateFare />BRETT BROS - FZCO</span>
                            <span className='flex items-center gap-x-2'><HiLocationMarker />DSO IFZA Properties, Dubai Silicon Oasis</span>

                            <span className='flex items-center gap-x-2'><FaPhone />+971 50 577 4317</span>
                        </div>
                    <div className="flex justify-center w-full py-4">
                        <p className="">Copyright © 2024. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer