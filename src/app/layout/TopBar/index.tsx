import React from 'react';

import { SlideFade } from '@chakra-ui/react';

import { MainMenu } from '@/app/layout';

export const TopBar = (props) => {
  return (
    <>
      <SlideFade in offsetY={-40} style={{ zIndex: 2 }}>
        <MainMenu {...props} />
      </SlideFade>
    </>
  );
};
