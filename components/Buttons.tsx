"use clinet"
import { Button } from '@chakra-ui/react'
import TypeButtonProps from '@/src/types/type'

function Buttons({ lable, bgc, fase, icon, hover }: TypeButtonProps) {
  return (
    <Button bg={bgc} _hover={{ zIndex:'20', transform: 'scale(1.1) ' }} rightIcon={icon} color={fase} variant='outline'>
      {lable}
    </Button>
  )
}

export default Buttons

// bg = "blue.500"