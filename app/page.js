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
      bg='#F8F4EC'
      minH='100vh'
    >
      <Header />
      <Home />
      <Footer />
    </Flex>
  );
}
