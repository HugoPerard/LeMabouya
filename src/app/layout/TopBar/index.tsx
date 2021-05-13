import React from 'react';

import { SlideFade, useTheme, useBreakpointValue } from '@chakra-ui/react';

import { MainMenu } from '@/app/layout';

import { NavDrawer } from '../NavDrawer';

export const TopBar = () => {
  const theme = useTheme();
  const showDrawer = useBreakpointValue({
    base: true,
    [theme.layout.breakpoints.desktop]: false,
  });

  return (
    <>
      <SlideFade in offsetY={-40} style={{ zIndex: 2 }}>
        <MainMenu mr="auto" ml="4" display={{ base: 'none', md: 'flex' }} />
      </SlideFade>
      {showDrawer && <NavDrawer />}
    </>
  );
};
