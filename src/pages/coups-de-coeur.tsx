import React from 'react';

import {
  Box,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import anseFiguierImage from 'public/assets/anse-figuier.jpg';
import corpsDeGardeSunsetImage from 'public/assets/sunset.jpg';

import { Hero, ReverseSection, Section, Page, Nav } from '@/components';

const PageKudos = () => {
  return (
    <Page bg="gray.500">
      <title>Coups de coeur | Le Mabouya</title>
      <Nav />
      <Hero img="assets/beach.jpg">
        <Heading size="2xl" fontWeight="extrabold">
          A proximité du Mabouya
        </Heading>
        <Text fontSize="lg" fontWeight="medium" mt="3">
          Des coups de coeur qu'on vous conseille
        </Text>
      </Hero>

      <Box id="infos">
        <Section image={anseFiguierImage}>
          <Stack spacing={4}>
            <Heading
              as="h2"
              size="xl"
              fontWeight="extrabold"
              color={mode('blue.600', 'blue.400')}
              letterSpacing="tight"
            >
              Plage de Anse Figuier
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
        <ReverseSection image={corpsDeGardeSunsetImage}>
          <Stack spacing={4}>
            <Heading
              as="h2"
              size="xl"
              fontWeight="extrabold"
              color={mode('blue.600', 'blue.400')}
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
        </ReverseSection>
      </Box>
    </Page>
  );
};

export default PageKudos;
