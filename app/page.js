'use client';

import { Flex } from '@chakra-ui/react';

import { Hero } from '@/components/Hero';
import { FaqAccordian } from '@/components/FaqAccordian';

export default function HomePage() {
  return (
    <Flex
      direction='column'
      px='10vw'
      justifyContent='space-between'
      bgColor='#1c1c1e'
    >
      <Hero />
      <FaqAccordian />
    </Flex>
  );
}
