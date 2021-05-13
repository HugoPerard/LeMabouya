import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import '@/config';
import theme from '@/theme';

export const Providers = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
