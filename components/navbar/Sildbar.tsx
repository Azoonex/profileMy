"use clinet";

// import { useRef } from 'react';
import { HamburgerIcon, CloseIcon, ArrowForwardIcon } from '@chakra-ui/icons'
// import { motion } from "framer-motion"
import { NAV_LINKS } from '@/src/constant';

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
    // const btnRef = useRef < HTMLInputElement > (null)

    return (
        <>
            <Button  colorScheme='teal' onClick={onOpen} >
                    
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
                                    <div key={item.id}>
                                        <Link
                                        className='text-black  hover:text-white 
                                        duration-100
                                        hover:bg-blue-70 p-2 rounded-md '
                                        href={item.href}>
                                            {item.label}
                                        </Link>

                                    </div>
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
                        <h2>
                            hello world
                        </h2>
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
                    key={item.id}
                        className='text-white font-bold hover:text-white 
                                        duration-100
                                        hover:bg-blue-70 p-2 rounded-md'
                    href={item.href}>
                    {item.label}
                     </Link>
                ))
            }
        </ul>
    )
}