import React from 'react';

import {
  Box,
  Heading,
  Stack,
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
        <Stack spacing={4}>
          <Heading
            as="h2"
            size="xl"
            fontWeight="extrabold"
            color={mode('blue.500', 'blue.300')}
            letterSpacing="tight"
          >
            Plage de Corps de Garde
          </Heading>
          <Text
            fontSize="xl"
            fontWeight="medium"
            color={mode('gray.800', 'gray.600')}
          >
            Le magnifique couché de soleil entre le Rocher du Diamant et la
            Femme Couchée
          </Text>
          <Text
            fontWeight="medium"
            color={mode('gray.600', 'gray.400')}
            textAlign="right"
          >
            À 3 minutes de la résidence
          </Text>
        </Stack>
      </Section>
      <ReverseSection image="/residence.png" />
    </Page>
  );
};
