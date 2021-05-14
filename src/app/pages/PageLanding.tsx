import React from 'react';

import {
  Box,
  Button,
  Heading,
  LightMode,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { FaAirbnb } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

import { Page } from '@/app/layout';
import { Hero, ReverseSection, Section } from '@/components';
import { DISPONIBILITIES_URL } from '@/constants';

export const PageLanding = () => {
  return (
    <Page bgGradient="linear(to-tl, #dce2e1, #906d47)">
      <Hero img="residence.png">
        <Heading size="2xl" fontWeight="extrabold">
          Le Mabouya
        </Heading>
        <Text fontSize="lg" fontWeight="medium" mt="3">
          Studio les pieds dans l'eau en Martinique
        </Text>
        <LightMode>
          <Button
            as={RouterLink}
            to={{ pathname: DISPONIBILITIES_URL }}
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
        </LightMode>
      </Hero>

      <Box id="infos" name="infos">
        <ReverseSection image="/residence.png">
          <Heading
            as="h1"
            size="2xl"
            lineHeight="1"
            fontWeight="extrabold"
            letterSpacing="tight"
          >
            Connect and engage with{' '}
            <Box
              as="mark"
              color={mode('blue.500', 'blue.300')}
              bg="transparent"
            >
              your customers globally
            </Box>
          </Heading>
          <Text
            mt={4}
            fontSize="xl"
            fontWeight="medium"
            color={mode('gray.600', 'gray.400')}
          >
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </Text>
        </ReverseSection>
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
      </Box>
    </Page>
  );
};
