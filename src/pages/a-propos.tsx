import React from 'react';

import {
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';

import { ReverseSection, Section, Page, Nav } from '@/components';

const PageAbout = () => {
  return (
    <Page bgGradient="linear(to-tl, #dce2e1, #906d47)" isFocusMode>
      <title>A propos - Le Mabouya</title>
      <Nav />
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

export default PageAbout;
