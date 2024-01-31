'use client';

import { Flex, Text } from '@chakra-ui/react';

import Icons from '@/Icons';

export const Footer = () => {
  return (
    <Flex
      direction='row'
      justifyContent='space-between'
      pt='4rem'
      pb='2rem'
      px='10vw'
      bg='#1A202C'
    >
      <Icons.Twitter fill='#ffab57' />
      <Text color='#ebdcd5' fontFamily='honk' fontSize='24px'>
        Pluto Cats
      </Text>
    </Flex>
  );
};
