'use client';

import {
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react';

import { FAQs } from '@/utils/constants';

export const FaqAccordian = () => {
  return (
    <Flex w='100%' direction='column'>
      <Box
        h='66px'
        bgImage="url('wave.svg')"
        py={{ lg: '6rem', sm: '2rem' }}
        w='100%'
      ></Box>

      <Accordion
        bg='#1A202C'
        allowToggle
        minH={{ lg: '400px', sm: '200px' }}
        px={{ lg: '20vw', sm: '10vw' }}
        pt='2rem'
        color='#ebdcd5'
      >
        {FAQs.map((faq, i) => {
          return (
            <AccordionItem border='none' key={i} py='10px'>
              <AccordionButton
                fontFamily='rubik'
                fontSize={{ lg: '20px', sm: '16px' }}
              >
                {faq.q}
                <AccordionIcon ml='auto' />
              </AccordionButton>

              <AccordionPanel pb={4} fontFamily='jetbrains'>
                {faq.a}
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Flex>
  );
};
