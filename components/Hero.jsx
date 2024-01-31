'use client';

import { Flex, Text, Image as ChakraImage } from '@chakra-ui/react';

export const Hero = () => {
  return (
    <Flex
      direction='column'
      alignItems='center'
      justifyContent='center'
      w='100%'
      px='10vw'
      py='2rem'
    >
      <Flex
        direction='row'
        boxShadow='
       inset 5px 5px 10px #e4e0d9,
       inset -5px -5px 10px #ffffff
      '
        bg='#F8F4EC'
        borderRadius='17px'
        mb={{ lg: '2rem', sm: '2rem' }}
        p='10px 5px 0px 5px'
      >
        <ChakraImage
          src={`4.png`}
          w={{ lg: '230px', sm: '100px' }}
          filter='drop-shadow(0 0 0.75rem #1A202C)'
        />
        <ChakraImage
          src={`5.png`}
          w={{ lg: '230px', sm: '100px' }}
          filter='drop-shadow(0 0 0.75rem #1A202C)'
        />
        <ChakraImage
          src={`6.png`}
          w={{ lg: '230px', sm: '100px' }}
          filter='drop-shadow(0 0 0.75rem #1A202C)'
        />
      </Flex>

      <Text
        fontFamily='rubik'
        fontSize={{ lg: '36px', sm: '28px' }}
        textAlign='center'
        bgColor='#F8F4EC'
      >
        Lorem Ipsum
      </Text>

      <Text
        fontSize={{ lg: '24px', sm: '18px' }}
        textAlign='center'
        fontFamily='jetbrains'
        mt='5px'
        w={{ lg: '70%', sm: '100%' }}
        opacity='0.7'
        bgColor='#F8F4EC'
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </Text>
    </Flex>
  );
};
