'use client';

import { ChakraProvider, localStorageManager } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import theme from '../components/theme';

export function Providers({ children }) {
  return (
    // Issue #2 — Pass colorModeManager so Chakra reads color-mode from localStorage
    // on the client, preventing the SSR/CSR mismatch that causes hydration error #418.
    <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
      <HelmetProvider>
        {children}
      </HelmetProvider>
    </ChakraProvider>
  );
}
