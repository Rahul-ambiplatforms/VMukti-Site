import React from 'react';
import VMuktiHomepage from './pages/VMuktiHomepage';
import { ChakraProvider } from '@chakra-ui/react';
import './css/fonts.css';
import theme from './pages/theme';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <VMuktiHomepage />
    </ChakraProvider>
  );
}

export default App;