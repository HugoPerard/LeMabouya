import React, { useEffect, useState } from 'react';

import { Flex } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

import { TopBar } from '@/app/layout';
import { Viewport } from '@/components';

import { LayoutContext } from '../LayoutContext';

export const Layout = ({ children }) => {
  const [isFocusMode, setIsFocusMode] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <LayoutContext.Provider value={{ isFocusMode, setIsFocusMode }}>
      <Viewport>
        <TopBar
          {...(isFocusMode ? { color: 'brand.600' } : { color: 'gray.200' })}
        />
        <Flex flex="1" direction="column">
          {children}
        </Flex>
      </Viewport>
    </LayoutContext.Provider>
  );
};
