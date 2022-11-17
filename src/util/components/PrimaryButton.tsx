import { Box, Button } from '@chakra-ui/react'
import { useEffect } from 'react'

const PrimaryButton = ({ text, size, onClick, mr, disabled, children }: any) => {
  useEffect(() => {
    console.log(disabled, "disabled")
  })
  return (
    <Button bg="orange.400"
      color="white"
      size={size}
      mr={mr}
      disabled={disabled}
      onClick={() => onClick()}
    >
      <Box as="span" display="inline-flex" alignItems="center">{text}</Box>
      <Box ml={1}>{children}</Box>
    </Button>
  )
}

export default PrimaryButton
