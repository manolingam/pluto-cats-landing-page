'use client';

import { Flex } from '@chakra-ui/react';

import { Header } from '@/shared/Header';
import { Home } from '@/views/Home';
import { Footer } from '@/shared/Footer';

export default function HomePage() {
  return (
    <Flex
      direction='column'
      justifyContent='space-between'
      bgColor='#F8F4EC'
      bgImage='radial-gradient(#1A202C 0.75px, #F8F4EC 0.75px)'
      bgSize='15px 15px'
      minH='100vh'
    >
      <Header />
      <Home />
      <Footer />
    </Flex>
  );
}
