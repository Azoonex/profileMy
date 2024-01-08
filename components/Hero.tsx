"use client"

import Buttons from "./Buttons"
import Image from "next/image"
import {motion} from 'framer-motion'


function Hero() {
  return (
    <section className=' flex-col lg:flex-row mt-32 mb-20 lg:mb-10 lg:mt-20 w-full relative overflow-hidden   lg:max-w-6xl mx-auto  lg:h-[100vh] flex items-center'>


      <div className=" ml-5 my-10 flex-1 centeritems flex-col lg:items-start">
        <h2 className="text-blue-400 lowercase mr-4 lg:mr-0 leading-relaxed ">
          Crafting Experiences <span className=" text-yellow-400  font-bold ">
            Through
            </span> Code Front-end Wizard at Work
          <span className="mx-1 text-yellow-400  font-bold">Coding artisan</span>!!
        </h2>
        <div className="mt-4 flex items-center  gap-3">
            
            <h5 className="text-white bg-transparent
            border-2 border-white p-[5px] rounded-xl uppercase">
              front-end Developr
            </h5>
          <Buttons
            lable="CONECT_MY"
            fase="#ECC94B"
            bgc="RGBA(0, 0, 0, 0.22)"
            hover="blue"
          />
       </div>

       </div>
       <div className="z-20">
        <Image
        alt="noting find"
        src="/hero.png"
        width={500}
        height={500}
        />
       </div>
      <motion.h2
        initial={{ x: 2000,opacity:1 }}
        animate={{ x: -7000,opacity:0 }}
        transition={{ duration: 40, delay: 3 }}
        className="absolute text-[150px] opacity-60  text-current drop-shadow-[0_1.2px_1.2px_rgba(250,250,250)] font-bold bottom-0 w-[10000px]">
        Transforming ideas into captivating user interfaces. Passionate about crafting seamless experiences that blend innovation and elegance
      </motion.h2>
    </section>
  )
}

export default Hero