// .storybook/manager.js
import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

import logo from './logo.svg';

const theme = create({
  base: 'light',
  brandTitle: 'Le Mabouya',
  brandImage: logo,
});

addons.setConfig({
  theme,
});
