"use client"

import Buttons from "./Buttons"
import Image from "next/image"
import {motion} from 'framer-motion'


function Hero() {
  return (
    <section className=' w-full relative overflow-hidden mt-20  lg:max-w-6xl mx-auto  h-[100vh] flex items-center'>


      <div className=" ml-5  flex-1">
        <h2 className="text-white  leading-relaxed ">
          Crafting Experiences <span className=" text-red-500  shadow-text font-bold ">
            Through
            </span> Code Front-end Wizard at Work
          <span className="mx-1 text-red-600 font-bold shadow-text">Coding artisan</span>!!
        </h2>
        <div className="mt-4 flex items-center  gap-3">
            
            <h4 className="text-white bg-transparent
            border-2 border-white p-1 uppercase">
              front-end Developr
            </h4>
          <Buttons
            lable="CONECT_MY"
            fase="white"
            bgc="cyan.300"
          />
       </div>

       </div>
       <div className="z-20">
        <Image
        alt="noting find"
        src="/hero.png"
        width={700}
        height={700}
        />
       </div>
      <motion.h2
        initial={{ x: 2000,opacity:1 }}
        animate={{ x: -7000,opacity:0 }}
        transition={{ duration: 40, delay: 3 }}
        className="absolute text-[150px] opacity-60 text-current drop-shadow-[0_1.2px_1.2px_rgba(250,250,250)] font-bold bottom-0 w-[10000px]">
        Transforming ideas into captivating user interfaces. Passionate about crafting seamless experiences that blend innovation and elegance
      </motion.h2>
    </section>
  )
}

export default Hero