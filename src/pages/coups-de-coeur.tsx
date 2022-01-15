import React from 'react';

import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import Head from 'next/head';

import { coupsDeCoeur } from '@/_data-coups-de-coeurs';
import { Hero, Page, Nav } from '@/components';
import { CoupDeCoeurCard } from '@/components/CoupDeCoeurCard';

const PageKudos = () => {
  return (
    <Page>
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

      <Flex id="infos" p={8}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          {coupsDeCoeur.map((coupDeCoeur) => (
            <CoupDeCoeurCard key={coupDeCoeur.name} coupDeCoeur={coupDeCoeur} />
          ))}
        </SimpleGrid>
      </Flex>
    </Page>
  );
};

export default PageKudos;
