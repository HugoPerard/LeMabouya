import React from 'react';

import {
  Box,
  Heading,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';

import { Page } from '@/app/layout';
import { ReverseSection, Section } from '@/components';
import { Hero } from '@/components/Hero';

export const PageLanding = () => {
  return (
    <Page bgGradient="linear(to-tl, #dce2e1, #906d47)">
      <Hero />
      <Section image="/sunset.jpg">
        <Heading
          as="h1"
          size="2xl"
          lineHeight="1"
          fontWeight="extrabold"
          letterSpacing="tight"
        >
          Connect and engage with{' '}
          <Box as="mark" color={mode('blue.500', 'blue.300')} bg="transparent">
            your customers globally
          </Box>
        </Heading>
        <Text
          mt={4}
          fontSize="xl"
          fontWeight="medium"
          color={mode('gray.600', 'gray.400')}
        >
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </Text>
      </Section>
      <ReverseSection image="/residence.png" />
    </Page>
  );
};
