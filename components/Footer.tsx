"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className='pt-1 lg:pt-32 bg-black'>
      <section className="">
        <div
          className="max-w-lg bg-black px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center"
        >
          <h1
            className="text-3xl font-extrabold leading-10 tracking-tight  text-white text-center sm:leading-none md:text-6xl  lg:text-7xl"
          >
            <span className="inline md:block">Join Us</span>
            <span
              className=" mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-green-500 md:inline-block"
            > We are<span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyon-400 to-purple-300"> Hiring</span> </span>
          </h1>
          <div
            className="mx-auto rounded-lg font-black mt-5 text-zinc-400 md:mt-12 md:max-w-lg text-center lg:text-lg"
          >
            <motion.button
            whileHover={{scale:1.5}}
            className="bg-tkb border text-sm text-white py-3 px-7 rounded-full" >
              AZOONEX
            </motion.button>
          </div>
        </div>
      </section>

      <hr className="text-white mx-5" />
      <div className="bg-black pb-5">
        <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-300 sm:justify-start">
              <Image
                alt="noting find"
                src='/logo.jpg'
                width={50}
                height={50}
              />
            </div>

            <p className="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
              T&C &nbsp; Career &nbsp; Privacy & Policy &nbsp; Developers
            </p>
          </div>
          <p className='text-center my-4'>
            Copyright © 2022 -
            <Link className="font-semibold " href="tem//:azoonex">Amir Abas</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer