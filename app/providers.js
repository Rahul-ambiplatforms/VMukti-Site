'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import theme from '../components/theme';

function RouterWrapper({ children }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  // Use MemoryRouter during SSR, BrowserRouter on client
  if (!isClient) {
    return <MemoryRouter>{children}</MemoryRouter>;
  }
  return <BrowserRouter>{children}</BrowserRouter>;
}

export function Providers({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <HelmetProvider>
        {children}
      </HelmetProvider>
    </ChakraProvider>
  );
}
