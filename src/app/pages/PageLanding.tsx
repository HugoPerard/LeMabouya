import React from 'react';

import {
  Button,
  Grid,
  GridItem,
  Heading,
  LightMode,
  Text,
} from '@chakra-ui/react';
import { FaAirbnb } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

import { Page } from '@/app/layout';
import { Hero } from '@/components';
import { PhotoCard } from '@/components/PhotoCard';
import { DISPONIBILITIES_URL } from '@/constants';

export const PageLanding = () => {
  return (
    <Page
      bg="blackAlpha.300"
      // bgGradient="linear(to-br, #0F0F0B, #605B56, #67553F)"
    >
      <Hero img="sunset-residence.jpg">
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

      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        id="infos"
        name="infos"
        m={3}
        alignItems="center"
      >
        <GridItem>
          <PhotoCard src="residence.png" alt="Résidence">
            Une résidence avec piscine à quelques pas de la plage
          </PhotoCard>
        </GridItem>
        <GridItem colSpan={2}>
          <PhotoCard src="plan.png" alt="Visualisation">
            Une représentation virtuelle de l'appartement et son agencement
          </PhotoCard>
        </GridItem>
        <GridItem>
          <PhotoCard src="lit.jpg" alt="Lit">
            Un lit 140x200 pour se reposer après des journées ensoleillées
          </PhotoCard>
        </GridItem>
        <GridItem>
          <PhotoCard src="tele.jpg" alt="Télé">
            Une télévision est disponible si vous souhaitez suivre vos
            programmes favoris
          </PhotoCard>
        </GridItem>
        <GridItem>
          <PhotoCard src="canape.jpg" alt="Canapé">
            Un canapé pouvant servir de deuxième couchage, et le balcon pour
            manger en profitant du soleil
          </PhotoCard>
        </GridItem>
        <GridItem>
          <PhotoCard src="cuisine.jpg" alt="Cuisine">
            La cuisine équipée, notamment d'un four, de deux plaques de cuisson,
            d'une machine à laver, d'un micro-onde, d'un grille-pain et d'une
            cafetière
          </PhotoCard>
        </GridItem>
        <GridItem rowSpan={2} alignSelf="flex-start">
          <PhotoCard src="douche.jpg" alt="Douche">
            La salle de bain équipée d'une douche et de toilettes
          </PhotoCard>
        </GridItem>
        <GridItem rowSpan={2} alignSelf="flex-start">
          <PhotoCard src="salle-de-bain.jpg" alt="Salle de bain">
            Un grand meuble de salle de bain avec des rangements et un grand
            miroir
          </PhotoCard>
        </GridItem>
        <GridItem>
          <PhotoCard src="equipements.jpg" alt="Equipements">
            Des équipements sont mis à votre disposition pour pouvoir profiter
            au maximum pendant votre séjour
          </PhotoCard>
        </GridItem>
        {/* <ReverseSection image="/residence.png">
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
        </Section> */}
      </Grid>
    </Page>
  );
};
