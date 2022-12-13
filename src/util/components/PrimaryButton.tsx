import { Box, Button } from '@chakra-ui/react'

const PrimaryButton = ({ text, size, onClick, mr, ml, disabled, children }: any) => {
  return (
    <Button bg="orange.400"
      color="white"
      size={size}
      mr={mr}
      ml={ml}
      disabled={disabled}
      onClick={() => onClick()}
    >
      <Box as="span" display="inline-flex" alignItems="center">{text}</Box>
      <Box ml={1}>{children}</Box>
    </Button>
  )
}

export default PrimaryButton
