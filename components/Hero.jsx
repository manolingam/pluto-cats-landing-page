'use client';

import {
  Flex,
  Image as ChakraImage,
  Text,
  HStack,
  Button
} from '@chakra-ui/react';

import Icons from '@/Icons';

export const Hero = () => {
  return (
    <Flex
      direction='column'
      alignItems='center'
      justifyContent='space-between'
      w='100%'
      h='100vh'
      className='scroll-snap-container'
    >
      <Flex
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        w='100%'
        my='2rem'
      >
        <ChakraImage src='logo.svg' w='75px' alt='logo' />
        <HStack justifyContent='space-between'>
          <Button
            px='8px'
            fontSize={{ lg: '14px', sm: '12px' }}
            fontFamily='jetbrains'
            bg='#5973fe'
            color='white'
            _hover={{ opacity: '0.8' }}
          >
            <HStack>
              <Icons.Discord fill='white' width='25px' />{' '}
              <Text>Join Discord</Text>
            </HStack>
          </Button>
        </HStack>
      </Flex>

      <Flex
        direction='column'
        alignItems='center'
        mb={{ xl: '4rem', lg: '2rem' }}
      >
        <Text
          color='#e97058'
          fontFamily='rubik'
          fontSize={{ xl: '48px', lg: '38px', sm: '24px' }}
          mb='10px'
        >
          Lorem Ipsum
        </Text>
        <Text
          color='white'
          fontFamily='jetbrains'
          fontSize={{ xl: '24px', lg: '20px', sm: '18px' }}
          textAlign='center'
          opacity='0.7'
          maxW={{ lg: '70%', sm: '100%' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Text>
      </Flex>
      <ChakraImage
        src={`hero_cat.png`}
        w={{ xl: '500px', lg: '250px' }}
        alt='pluto cat'
      />
    </Flex>
  );
};
