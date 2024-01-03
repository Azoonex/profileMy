"use clinet"
import { Button} from '@chakra-ui/react'

import TypeButtonProps  from '@/types/type'

function Buttons({ lable, bgc , fase,icon }: TypeButtonProps) {
  return (
      <Button bg={bgc} rightIcon={icon} colorScheme={fase} variant='outline'>
          {lable} 
      </Button>
  )
}

export default Buttons

// bg = "blue.500"