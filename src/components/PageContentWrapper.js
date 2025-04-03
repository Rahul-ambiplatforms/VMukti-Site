import { Box } from '@chakra-ui/react'

const PageContentWrapper = ({ children, noPadding }) => {
  return (
    <Box
      // mx={noPadding ? "0" : "2%"}
      // set media query mx for mobile to be 5% and rest to 2%
      mx={{ base: "4%", md: noPadding ? "0" : "2%" }}
      width={noPadding ? "100%" : "auto"}
    >
      {children}
    </Box>
  )
}

export default PageContentWrapper
