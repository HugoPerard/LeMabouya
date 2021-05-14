import React from 'react';

import { Box, BoxProps, Text, Flex, HStack, Button } from '@chakra-ui/react';
import { FaAirbnb } from 'react-icons/fa';
import { Link as RouterLink, useLocation } from 'react-router-dom';

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
  const location = useLocation();
  return (
    <Box
      as={RouterLink}
      to={to}
      borderColor={
        location?.pathname === to ? `${colorScheme}.300` : 'transparent'
      }
      borderBottomWidth={2}
      p={1}
      {...rest}
    >
      <Text>{children}</Text>
    </Box>
  );
};

export const MainMenu = ({ color = 'gray.200', ...rest }) => {
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
        <MainMenuItem to="/kudos" colorScheme={itemColorScheme}>
          Coups de coeur
        </MainMenuItem>
        <MainMenuItem to="/about" colorScheme={itemColorScheme}>
          À propos
        </MainMenuItem>
        <Button
          as={RouterLink}
          to={{ pathname: DISPONIBILITIES_URL }}
          target="_blank"
          colorScheme="brand"
          size="xs"
          leftIcon={<FaAirbnb />}
        >
          Disponibilités
        </Button>
      </HStack>
    </Flex>
  );
};
