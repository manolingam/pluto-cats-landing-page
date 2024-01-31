'use client';

import { Flex, Text, Button } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Flex
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      py='2rem'
      px='10vw'
    >
      <Flex direction='column' position='relative'>
        <Text
          w='120px'
          borderRadius='17px'
          fontFamily='honk'
          fontSize={{ lg: '36px', sm: '24px' }}
        >
          Nouns
        </Text>
        <Text
          position='absolute'
          top={{ lg: '20px', sm: '15px' }}
          w='120px'
          borderRadius='17px'
          fontFamily='honk'
          fontSize={{ lg: '36px', sm: '24px' }}
        >
          Cats
        </Text>
      </Flex>

      <Button
        py='0px'
        px='8px'
        fontSize={{ lg: '18px', sm: '12px' }}
        bg='#bf5947'
        fontFamily='jetbrains'
        color='white'
        isDisabled
        _hover={{ bg: '#bf5947' }}
      >
        Coming soon..
      </Button>
    </Flex>
  );
};
