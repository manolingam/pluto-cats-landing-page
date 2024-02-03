'use client';

import {
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  SimpleGrid
} from '@chakra-ui/react';

import { FAQs } from '@/utils/constants';
import Icons from '@/Icons';

export const FaqAccordian = () => {
  return (
    <Flex
      w='100%'
      h='100vh'
      direction='column'
      justifyContent='space-evenly'
      className='scroll-snap-container'
    >
      <Accordion allowToggle px={{ lg: '15vw', sm: '0' }} color='#e97058'>
        {FAQs.map((faq, i) => {
          return (
            <AccordionItem border='none' key={i} py='10px'>
              <AccordionButton
                fontFamily='rubik'
                fontSize={{ lg: '24px', sm: '16px' }}
              >
                {faq.q}
                <AccordionIcon ml='auto' />
              </AccordionButton>

              <AccordionPanel
                pb={4}
                fontFamily='jetbrains'
                color='white'
                opacity='0.7'
              >
                {faq.a}
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
      <SimpleGrid columns='2' placeItems='center' mx='auto' gap='2' mt='2rem'>
        <Icons.Twitter fill='#ffab57' />
        <Icons.Discord fill='#ffab57' />
      </SimpleGrid>
    </Flex>
  );
};
