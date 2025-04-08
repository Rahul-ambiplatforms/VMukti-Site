import { Box } from '@chakra-ui/react'

const PageContentWrapper = ({ children, noPadding }) => {
  return (
    <Box
      mx={{ base: noPadding ? "0" : "4%", md: noPadding ? "0" : "auto" }}
      maxWidth="1465px"
      // width="auto"
      // mx="auto"
    // width={noPadding ? "100%" : "auto"}
    >
      {children}
    </Box >
  )
}

export default PageContentWrapper
