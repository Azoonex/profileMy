"use clinet";

import React, { useRef } from 'react';
import { HamburgerIcon, CloseIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { motion } from "framer-motion"
import { NAV_LINKS } from '@/constant';

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
} from '@chakra-ui/react'
import Link from 'next/link';
import Buttons from '../Buttons';


export  function Sildbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen} >
                    
                    {
                                isOpen?<CloseIcon /> : <HamburgerIcon />
                    }
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='bottom'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder='Type here...' />
                        <ul className='flex   flex-col gap-2 my-5'>
                            {
                                NAV_LINKS.map((item) => (
                                    <motion.div
                                    inherit={{x: -100}}
                                    animate={{x: 0}}
                                    >
                                        <Link
                                            className='text-black  hover:text-white 
                                        duration-100
                                        hover:bg-blue-70 p-2 rounded-md '
                                            key={item.key} href={item.href}>
                                            {item.label}
                                        </Link>

                                    </motion.div>
                                ))
                            }
                        </ul>
                        <div className="mr-4 hidden lg:flex">
                            <Buttons
                                lable="CONECT_MY"
                                icon=<ArrowForwardIcon />
                                fase="gray"
                                bgc="blue.200"
                            />
                        </div>

                    </DrawerBody>

                    <DrawerFooter>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}


export const NavLink:React.FC =()=>{
    return (
        <ul className='flex gap-7'>
            {
                NAV_LINKS.map((item)=>(
                    <Link
                        className='text-white font-bold hover:text-white 
                                        duration-100
                                        hover:bg-blue-70 p-2 rounded-md'
                    key={item.key}  href={item.href}>
                    {item.label}
                     </Link>
                ))
            }
        </ul>
    )
}