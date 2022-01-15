import React from 'react';

import {
  Box,
  BoxProps,
  Link as ChakraLink,
  Text,
  Flex,
  HStack,
  Button,
  Icon,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaAirbnb } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

import { DISPONIBILITIES_URL } from '@/constants';

interface MainMenuItemProps extends BoxProps {
  to?: string;
  isActive?: boolean;
  colorScheme?: string;
}

export const MainMenuItem: React.FC<MainMenuItemProps> = ({
  children,
  to,
  isActive = false,
  colorScheme = 'gray',
  ...rest
}) => {
  const router = useRouter();
  return (
    <Link href={to}>
      <Box
        borderColor={
          router?.pathname === to ? `${colorScheme}.300` : 'transparent'
        }
        borderBottomWidth={2}
        p={1}
        cursor="pointer"
        {...rest}
      >
        <Text>{children}</Text>
      </Box>
    </Link>
  );
};

export const Nav = ({ color = 'gray.200', ...rest }) => {
  const itemColorScheme = color.split('.')[0];
  return (
    <Flex
      zIndex="2"
      direction="column"
      py={4}
      bg="transparent"
      position="absolute"
      left={0}
      right={0}
      top={0}
      color={color}
      {...rest}
    >
      <Box w="full" h="0" pb="safe-top" />
      <HStack spacing="4" justifyContent="center">
        <MainMenuItem to="/" colorScheme={itemColorScheme}>
          Accueil
        </MainMenuItem>
        <MainMenuItem to="/coups-de-coeur" colorScheme={itemColorScheme}>
          Coups de coeur
        </MainMenuItem>
        {/* <MainMenuItem to="/a-propos" colorScheme={itemColorScheme}>
          À propos
        </MainMenuItem> */}
        <ChakraLink href={DISPONIBILITIES_URL} isExternal passHref>
          <Button colorScheme="brand" size="xs" leftIcon={<FaAirbnb />}>
            Disponibilités <Icon as={FiExternalLink} ml={1} mb={0.5} />
          </Button>
        </ChakraLink>
      </HStack>
    </Flex>
  );
};
