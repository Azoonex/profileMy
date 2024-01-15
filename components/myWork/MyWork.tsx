"use client"
import Image from "next/image"
import {motion,useScroll,useTransform} from 'framer-motion'
import { useRef } from "react"

function MyWork() {

  const ref = useRef < HTMLInputElement > (null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })


  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])


  return (
    <div
    className="flex flex-col lg:gap-32 lg:flex-row justify-around h-[70vh]  w-full ">
      <div

      className="flex items-center justify-strart ">
        <h2 className="lg:ml-7 
         text-white w-32 font-extrabold py-7 lg:py-0 underline decoration-wavy decoration-blue-700">Trip Guid</h2> 
      </div>
      <div className="relative w-full h-full   ">
        <motion.div
          style={{ x: yBg }}
          
        className="bg-blue-300  w-1/2">
          <Image
            src="/tripguide.png"
            alt="not_found"
            width={1000}
            height={1500}
          />
        </motion.div>
        <div className="m-12">
         <h2 className="
         font-bold text-3xl mt-32 text-white outline-4 underline
         ">
          Shop Cars !
         </h2>
        </div>

        {/* absolute left car */}
        <motion.div
          style={{ x: yText }}
        className=" w-1/2 top-1/4  h-full right-0 absolute  bottom-1/2 ">
          <Image
            className="rounded-tl-2xl rounded-bl-3xl"
            src="/carrent.png"
            alt="not_found"
            width={1000}
            height={1000}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default MyWork
