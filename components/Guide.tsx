"use client";

import {motion, useScroll,useTransform} from 'framer-motion'
import { useRef } from 'react';


const Guide = ({ type }:any) => {
    
    const ref = useRef <HTMLInputElement>(null)
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start","end start"]
    })

    const yText = useTransform(scrollYProgress,[0,1],["0%","500%"])
    const yBg = useTransform(scrollYProgress,[0,1],["0%","100%"])
    return (
        <section className="h-screen overflow-hidden relative w-full centeritems " 
        ref={ref}
            style={{ backgroundColor: type === "content" ? "linear-gradinet(180deg,#111132,#0c0c1d"
             : "linear-gradinet(180deg,#111132,#505064" }}
        >

            
                <motion.h2
                style={{y:yText}}
                className=" absolute text-6xl text-white font-mono font-bold">
                    {type === "content" ? "what we do ?" : "what we DiD ?"}
                </motion.h2>

                <motion.div
                style={{
                        backgroundImage: `url('/mountains.png')`,
                        
                }}
                className=" bg-cover absolute z-30 bottom-0 bg-center w-full h-screen ">
                   
                </motion.div>
               <motion.div
                    style={{
                        backgroundImage: `url('/planets.png')`,
                        y: yBg
                    }}
                className=" bg-cover absolute z-20 bg-center w-full h-screen">
                  
               </motion.div>
                <motion.div style={{
                        backgroundImage: `url('/stars.png')`,
                        x: yBg
                    }}
                className=" bg-cover absolute z-10 bg-center w-full h-screen">
                   
                </motion.div>
        </section >
    )
}

export default Guide