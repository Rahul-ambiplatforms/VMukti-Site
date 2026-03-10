'use client';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: "var(--font-wix), 'WixMadeforDisplay', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    body: "var(--font-wix), 'WixMadeforDisplay', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: '#e7e7e7',
      },
    },
  },
});

export default theme;
