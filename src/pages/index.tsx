import React from 'react';

import {
  Button,
  Grid,
  GridItem,
  Heading,
  LightMode,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import canapeImage from 'public/assets/canape.jpg';
import cuisineImage from 'public/assets/cuisine.jpg';
import doucheImage from 'public/assets/douche.jpg';
import equipementsImage from 'public/assets/equipements.jpg';
import litImage from 'public/assets/lit.jpg';
import planImage from 'public/assets/plan.png';
import residenceImage from 'public/assets/residence.png';
import salleDeBainImage from 'public/assets/salle-de-bain.jpg';
import teleImage from 'public/assets/tele.jpg';
import { FaAirbnb } from 'react-icons/fa';

import { Hero, Nav, Page, PhotoCard } from '@/components';
import { DISPONIBILITIES_URL } from '@/constants';

const PageLanding = () => {
  return (
    <Page
      bg="blackAlpha.300"
      // bgGradient="linear(to-br, #0F0F0B, #605B56, #67553F)"
    >
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

      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        gap={6}
        id="infos"
        name="infos"
        m={3}
        alignItems="center"
      >
        <GridItem>
          <PhotoCard src={residenceImage} alt="Résidence">
            Une résidence avec piscine à quelques pas de la plage
          </PhotoCard>
        </GridItem>
        <GridItem colSpan={2}>
          <PhotoCard src={planImage} alt="Visualisation">
            Une représentation virtuelle de l'appartement et son agencement
          </PhotoCard>
        </GridItem>
        <GridItem>
          <PhotoCard src={litImage} alt="Lit">
            Un lit 140x200 pour se reposer après des journées ensoleillées
          </PhotoCard>
        </GridItem>
        <GridItem>
          <PhotoCard src={teleImage} alt="Télé">
            Une télévision est disponible si vous souhaitez suivre vos
            programmes favoris
          </PhotoCard>
        </GridItem>
        <GridItem>
          <PhotoCard src={canapeImage} alt="Canapé">
            Un canapé pouvant servir de deuxième couchage, et le balcon pour
            manger en profitant du soleil
          </PhotoCard>
        </GridItem>
        <GridItem>
          <PhotoCard src={cuisineImage} alt="Cuisine">
            La cuisine équipée, notamment d'un four, de deux plaques de cuisson,
            d'une machine à laver, d'un micro-onde, d'un grille-pain et d'une
            cafetière
          </PhotoCard>
        </GridItem>
        <GridItem rowSpan={2} alignSelf="flex-start">
          <PhotoCard src={doucheImage} alt="Douche">
            La salle de bain équipée d'une douche et de toilettes
          </PhotoCard>
        </GridItem>
        <GridItem rowSpan={2} alignSelf="flex-start">
          <PhotoCard src={salleDeBainImage} alt="Salle de bain">
            Un grand meuble de salle de bain avec des rangements et un grand
            miroir
          </PhotoCard>
        </GridItem>
        <GridItem>
          <PhotoCard src={equipementsImage} alt="Equipements">
            Des équipements sont mis à votre disposition pour pouvoir profiter
            au maximum pendant votre séjour
          </PhotoCard>
        </GridItem>
      </Grid>
    </Page>
  );
};

export default PageLanding;
