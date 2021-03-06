import React, { useContext, useLayoutEffect, useRef, useState } from 'react';

import { Box, Flex, FlexProps, HStack, Stack } from '@chakra-ui/react';

const PageContext = React.createContext(null);

const PageContainer = ({ children, ...rest }) => {
  const { hideContainer, containerSize } = useContext(PageContext);

  const containerSizes = {
    sm: '60ch',
    md: '80ch',
    lg: '100ch',
    xl: '140ch',
    full: '100%',
  };

  if (hideContainer) return children;

  return (
    <Flex
      direction="column"
      flex="1"
      w="full"
      px="6"
      mx="auto"
      maxW={containerSizes[containerSize]}
      {...rest}
    >
      {children}
    </Flex>
  );
};

interface PageTopBarProps extends FlexProps {
  onBack?(): void;
  showBack?: boolean;
}

export const PageTopBar = ({
  children,
  onBack = () => {},
  showBack = false,
  ...rest
}: PageTopBarProps) => {
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
      <PageContainer>
        <HStack spacing="4" justifyContent="center">
          {children}
        </HStack>
      </PageContainer>
    </Flex>
  );
};

interface PageContentProps extends FlexProps {
  onBack?(): void;
  showBack?: boolean;
}

export const PageContent = ({ children, ...rest }: PageContentProps) => {
  const { nav } = useContext(PageContext);
  return (
    <Flex zIndex="1" direction="column" flex="1" py="4" {...rest}>
      <PageContainer>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: '4', lg: '8' }}
          flex="1"
        >
          {nav && (
            <Flex direction="column" w={{ base: 'full', lg: '12rem' }}>
              {nav}
            </Flex>
          )}
          <Flex direction="column" flex="1">
            {children}
          </Flex>
        </Stack>
      </PageContainer>
      <Box w="full" h="0" pb="safe-bottom" />
    </Flex>
  );
};

export const PageBottomBar = ({ children, ...rest }: FlexProps) => {
  const bottomBarRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setHeight(bottomBarRef.current?.offsetHeight || 0);
  }, [setHeight]);

  return (
    <>
      <Box h={`${height}px`} />
      <Flex
        zIndex="3"
        ref={bottomBarRef}
        direction="column"
        mt="auto"
        position="fixed"
        bg="white"
        bottom="0"
        left="0"
        right="0"
        py="2"
        boxShadow="0 -4px 20px rgba(0, 0, 0, 0.05)"
        {...rest}
      >
        <PageContainer>{children}</PageContainer>
        <Box w="full" h="0" pb="safe-bottom" />
      </Flex>
    </>
  );
};

interface PageProps extends FlexProps {
  isFocusMode?: boolean;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  hideContainer?: boolean;
  nav?: React.ReactNode;
}

export const Page = ({
  isFocusMode = false,
  hideContainer,
  containerSize = 'md',
  nav = null,
  ...rest
}: PageProps) => {
  return (
    <PageContext.Provider
      value={{
        nav,
        hideContainer,
        containerSize,
      }}
    >
      <Flex direction="column" flex="1" position="relative" {...rest} />
    </PageContext.Provider>
  );
};
