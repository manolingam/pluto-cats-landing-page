'use client';

import { Flex, chakra, Text, HStack, Button } from '@chakra-ui/react';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import Icons from '@/Icons';

const ChakraImage = chakra(motion.img);

const ImageSequencer = () => {
  const sequence = Array.from({ length: 6 }, (_, index) => index + 1);

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex1((prevIndex1) => (prevIndex1 + 1) % sequence.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex2((prevIndex2) => (prevIndex2 + 1) % sequence.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Flex
      direction='row'
      alignItems='center'
      justifyContent='center'
      overflow='hidden'
      position='relative'
      w={{ lg: `250px`, sm: '150px' }}
    >
      <motion.div style={{ display: 'flex', flexDirection: 'row' }}>
        <ChakraImage
          key={sequence[index1]}
          src={`${sequence[index1]}.png`}
          w={{ lg: '250px', sm: '150px' }}
          mb={{ lg: '4rem', sm: '2rem' }}
        />
        <ChakraImage
          key={sequence[index2]}
          src={`${sequence[index2]}.png`}
          w={{ lg: '250px', sm: '150px' }}
          mb={{ lg: '4rem', sm: '2rem' }}
        />
      </motion.div>
    </Flex>
  );
};

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
      <ImageSequencer />

      <Text
        fontFamily='rubik'
        fontSize={{ lg: '36px', sm: '28px' }}
        textAlign='center'
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
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </Text>
      <HStack justifyContent='space-between' mt='2rem'>
        <Button
          fontFamily='jetbrains'
          bg='#5973fe'
          color='white'
          _hover={{ opacity: '0.8' }}
        >
          <HStack>
            <Icons.Discord fill='white' width='25px' />{' '}
            <Text fontSize={{ lg: '18px', sm: '12px' }}>Join Discord</Text>
          </HStack>
        </Button>
      </HStack>
    </Flex>
  );
};
