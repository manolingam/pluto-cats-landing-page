'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Fonts from '@/Fonts';

const theme = extendTheme({
  fonts: {
    jetbrains: 'jetbrains',
    rubik: 'rubik'
  },
  breakpoints: {
    sm: '320px',
    md: '580px',
    lg: '1026px',
    xl: '1450px'
  }
});

export function Providers({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      {children}
    </ChakraProvider>
  );
}
