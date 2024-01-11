"use client"
import Image from "next/image"
import motion from 'framer-motion'


function MyWork() {
  return (
    <div
    className="flex justify-around h-screen w-full  bg-blue-300">
      <div className="flex w-[300px] items-center justify-strart">
      <h2>text-center</h2> 
      </div>
      <div className="relative w-full h-full  bg-red-700 ">
        <div className="bg-blue-300  w-1/2">
          <Image
            src="/tripguide.png"
            alt="not_found"
            width={1000}
            height={1000}
          />
        </div>
        <div className="m-12">
         <h2 className="
         font-bold text-2xl text-white outline-4
         ">
          Lorem, ipsum dolor.
         </h2>
        </div>

        {/* absolute left car */}
        <div className="bg-blue-300  w-1/2 top-1/4  h-full right-0 absolute  bottom-1/2 ">
          <Image
            className="rounded-t-2xl rounded-bl-3xl"
            src="/carrent.png"
            alt="not_found"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  )
}

export default MyWork
