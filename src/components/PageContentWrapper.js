import { Box } from '@chakra-ui/react'

const PageContentWrapper = ({ children, noPadding }) => {
  return (
    <Box
      mx={{ base: noPadding ? "0" : "4%", md: noPadding ? "0" : "auto" }}
      px={{md: "2%" }}
      maxWidth="1565px"
      // width="auto"
      // mx="auto"
    // width={noPadding ? "100%" : "auto"}
    >
      {children}
    </Box >
  )
}

export default PageContentWrapper
