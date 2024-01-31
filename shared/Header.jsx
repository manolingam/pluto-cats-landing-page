'use client';

import { Flex, Text, Button, HStack } from '@chakra-ui/react';
import Icons from '@/Icons';

export const Header = () => {
  return (
    <Flex
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      py='1rem'
      px='8vw'
    >
      <Flex direction='column' position='relative'>
        <Text
          w='120px'
          borderRadius='17px'
          fontFamily='honk'
          fontSize={{ lg: '36px', sm: '24px' }}
        >
          Pluto
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

      <HStack justifyContent='space-between' mt='15px'>
        <Button
          py='0px'
          px='8px'
          fontSize={{ lg: '18px', sm: '12px' }}
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
  );
};
