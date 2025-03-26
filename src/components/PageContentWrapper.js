import { Box } from '@chakra-ui/react'

const PageContentWrapper = ({ children, noPadding }) => {
  return (
    <Box
      mx={noPadding ? "0" : "2%"}
      width={noPadding ? "100%" : "auto"}
    >
      {children}
    </Box>
  )
}

export default PageContentWrapper
