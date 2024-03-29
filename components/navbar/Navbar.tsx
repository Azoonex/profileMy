"use client"

import Image from "next/image";
import Buttons from "../Buttons";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Sildbar, NavLink } from "./Sildbar";

function Navbar() {
  return (
    <header className="absolute top-0 w-full">
      <div className={`relative z-10  shadow-lg rounded-md mt-5 
       flex justify-between items-center max-w-4xl lg:max-w-6xl mx-auto`}>

        {/* logo */}
        <div className=" ml-3">
          <Image
            alt="noting find"
            src='/logo.jpg'
            width={50}
            height={50}
          />
        </div>

        {/* navlink */}
        <div className="hidden lg:flex">
          <NavLink />
        </div>

        {/* btn */}
        <div className="mr-4 hidden lg:flex">
          <Buttons
            lable="CONECT_MY"
            icon=<ArrowForwardIcon />
            fase="gray"
            bgc="blue.200"
          />
        </div>

        {/* soils */}
        <div className=" static mr-3 lg:hidden">
          <Sildbar />
        </div>
      </div>
    </header>
  );
}

export default Navbar