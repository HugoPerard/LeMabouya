import React from 'react';

import { Box, BoxProps, Text, Flex, HStack } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

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
      <Text color={`${colorScheme}.200`}>{children}</Text>
    </Box>
  );
};

export const MainMenu = ({ ...rest }) => {
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
      color="gray.200"
      {...rest}
    >
      <Box w="full" h="0" pb="safe-top" />
      <HStack spacing="4" justifyContent="center">
        <MainMenuItem to="/">Accueil</MainMenuItem>
        <MainMenuItem to="/kudos">Coups de coeur</MainMenuItem>
        <MainMenuItem to="/about">À propos</MainMenuItem>
      </HStack>
    </Flex>
  );
};
