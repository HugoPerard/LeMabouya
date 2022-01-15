import React from 'react';

import {
  AspectRatio,
  Button,
  Heading,
  LightMode,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FaAirbnb } from 'react-icons/fa';

import { images } from '@/_data';
import { Gallery, Hero, Nav, Page } from '@/components';
import { DISPONIBILITIES_URL } from '@/constants';

const PageLanding = () => {
  return (
    <Page>
      <title>Le Mabouya</title>
      <Nav />
      <Hero img="assets/sunset-residence.jpg">
        <Heading size="2xl" fontWeight="extrabold">
          🦎 Le Mabouya 🦎
        </Heading>
        <Text fontSize="lg" fontWeight="medium" mt="3">
          Studio les pieds dans l'eau en Martinique
        </Text>
        <LightMode>
          <Link href={DISPONIBILITIES_URL} passHref>
            <Button
              target="_blank"
              colorScheme="blue"
              size="lg"
              mt="6"
              fontWeight="bold"
              fontSize="md"
              leftIcon={<FaAirbnb />}
            >
              Regarder les disponibilités
            </Button>
          </Link>
        </LightMode>
      </Hero>

      <Stack
        id="infos"
        name="infos"
        py={10}
        px={{ base: 5, md: 10, lg: 20 }}
        spacing={6}
        direction={{ base: 'column', lg: 'row' }}
      >
        <Gallery images={images} rootProps={{ flex: 2 }} />
        <AspectRatio ratio={16 / 9} minH={300} maxH={400} p={10} flex={1}>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31106.142868017647!2d-60.96792426654188!3d14.453950904516928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c401f9d25fd8133%3A0x9fd3a0262daf1f5b!2sStudio%2C%20Le%20Mabouya!5e0!3m2!1sfr!2sfr!4v1642259754301!5m2!1sfr!2sfr"
          ></iframe>
        </AspectRatio>
      </Stack>
    </Page>
  );
};

export default PageLanding;
