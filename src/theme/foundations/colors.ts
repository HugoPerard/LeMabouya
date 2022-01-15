import { theme } from '@chakra-ui/react';

import tailwindColors from './tailwindColors';

export const colors = {
  brand: {
    50: '#e0f4ff',
    100: '#b8dcfa',
    200: '#8ec4f1',
    300: '#63ace8',
    400: '#3994e0',
    500: '#1f7bc6',
    600: '#135f9b',
    700: '#084470',
    800: '#002946',
    900: '#000f1d',
  },
  airbnb: {
    50: '#ffe2e3',
    100: '#ffb1b4',
    200: '#ff7f83',
    300: '#ff4d52',
    400: '#fe1d21',
    500: '#e50508',
    600: '#b30005',
    700: '#810003',
    800: '#4f0000',
    900: '#200000',
  },
  gray: tailwindColors.blueGray,
  success: theme.colors.green,
  error: theme.colors.red,
  warning: theme.colors.yellow,
};
