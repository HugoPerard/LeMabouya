import React from 'react';

import {
  Box,
  Center,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import Head from 'next/head';
import anseArletImage from 'public/assets/anse-arlet-beach.png';
import anseFiguierRestaurantImage from 'public/assets/anse-figuier-restaurant.jpg';
import anseFiguierImage from 'public/assets/anse-figuier.jpg';
import rhumerieClementImage from 'public/assets/rhumerie-clement.jpg';
import salinesImage from 'public/assets/salines-beach.jpg';
import corpsDeGardeSunsetImage from 'public/assets/sunset-on-sea.jpg';

import { Hero, ReverseSection, Section, Page, Nav } from '@/components';

const PageKudos = () => {
  return (
    <Page bg="gray.500">
      <Head>
        <title>Coups de coeur | Le Mabouya</title>
      </Head>
      <Nav />
      <Hero img="assets/beach.jpg">
        <Heading size="xl" fontWeight="extrabold">
          Nous partageons avec vous nos coups de coeur en Martinique
        </Heading>
        <Heading fontSize="lg" fontWeight="medium" mt="3">
          A proximité du Mabouya 🦎
        </Heading>
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
              La superbe plage de sable blanc et son eau turquoise, l'endroit
              idéal pour passer une journée à la plage
            </Text>
            <Text
              fontWeight="medium"
              color={mode('gray.600', 'gray.400')}
              textAlign="right"
            >
              À 10 minutes de la résidence
            </Text>
          </Stack>
        </Section>
        <ReverseSection image={anseFiguierRestaurantImage}>
          <Stack spacing={4}>
            <Heading
              as="h2"
              size="xl"
              fontWeight="extrabold"
              color={mode('blue.600', 'blue.400')}
              letterSpacing="tight"
            >
              Le restaurant Chez Filin
            </Heading>
            <Text
              fontSize="xl"
              fontWeight="medium"
              color={mode('gray.800', 'gray.600')}
            >
              Reservez votre menu, selon l'arrivage du jour, dès votre arrivée à
              la plage pour profiter de ce restaurant
            </Text>
            <Text
              fontWeight="medium"
              color={mode('gray.600', 'gray.400')}
              textAlign="right"
            >
              Sur la plage d'Anse Figuier
            </Text>
          </Stack>
        </ReverseSection>
        <Section image={corpsDeGardeSunsetImage}>
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
              En février, vous pourrez découvrir le magnifique couché de soleil
              entre le Rocher du Diamant et la Femme Couchée
            </Text>
            <Text
              fontWeight="medium"
              color={mode('gray.600', 'gray.400')}
              textAlign="right"
            >
              À 10 minutes à pied par le sentier du littoral
            </Text>
          </Stack>
        </Section>
        <ReverseSection image={anseArletImage}>
          <Stack spacing={4}>
            <Heading
              as="h2"
              size="xl"
              fontWeight="extrabold"
              color={mode('blue.600', 'blue.400')}
              letterSpacing="tight"
            >
              La plage d'Anse d'Arlet
            </Heading>
            <Text
              fontSize="xl"
              fontWeight="medium"
              color={mode('gray.800', 'gray.600')}
            >
              Rendez-vous à l'Anse d'Arlet pour nager au milieu des poissons.
              Pour vous y rendre, nous vous conseillons de longer la côte pour
              découvrir le marché du Diamant et la maison du Bagnard
            </Text>
            <Text
              fontWeight="medium"
              color={mode('gray.600', 'gray.400')}
              textAlign="right"
            >
              À 30 minutes de la résidence
            </Text>
          </Stack>
        </ReverseSection>
        <Section image={salinesImage}>
          <Stack spacing={4}>
            <Heading
              as="h2"
              size="xl"
              fontWeight="extrabold"
              color={mode('blue.600', 'blue.400')}
              letterSpacing="tight"
            >
              La plage des Salines
            </Heading>
            <Text
              fontSize="xl"
              fontWeight="medium"
              color={mode('gray.800', 'gray.600')}
            >
              Immense étendue de sable blanc, prisée par les touristes
            </Text>
            <Text
              fontWeight="medium"
              color={mode('gray.600', 'gray.400')}
              textAlign="right"
            >
              À 30 minutes de la résidence
            </Text>
          </Stack>
        </Section>
        <ReverseSection image={rhumerieClementImage}>
          <Stack spacing={4}>
            <Heading
              as="h2"
              size="xl"
              fontWeight="extrabold"
              color={mode('blue.600', 'blue.400')}
              letterSpacing="tight"
            >
              La rhumerie Clément
            </Heading>
            <Text
              fontSize="xl"
              fontWeight="medium"
              color={mode('gray.800', 'gray.600')}
            >
              Visitez la rhumerie Clément, sa boutique, le jardin et
              l'habitation Clément (maison coloniale typique)
            </Text>
            <Text
              fontWeight="medium"
              color={mode('gray.600', 'gray.400')}
              textAlign="right"
            >
              À 30 minutes de la résidence
            </Text>
          </Stack>
        </ReverseSection>
        <Center p={20} bg={mode('gray.100', 'gray.800')}>
          <Heading color="brand.600" fontSize="5xl">
            Bonnes vacances à tous !<Text textAlign="center">🏝☀️</Text>
          </Heading>
        </Center>
      </Box>
    </Page>
  );
};

export default PageKudos;
