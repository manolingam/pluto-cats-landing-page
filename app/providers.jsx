'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { accordionAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

import Fonts from '@/Fonts';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    bg: 'red.200'
  }
});

const accordionTheme = defineMultiStyleConfig({ baseStyle });

const breakpoints = {
  sm: '320px',
  md: '580px',
  md2: '742px',
  xtra: '900px',
  lg: '1026px',
  lg2: '1220px',
  xl: '1450px'
};

const theme = extendTheme({
  colors: {},
  fonts: {
    honk: 'honk',
    jetbrains: 'jetbrains',
    rubik: 'rubik'
  },
  breakpoints,
  components: {
    Accordian: accordionTheme
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
