import { Button } from '@chakra-ui/button';
import { Box, BoxProps, Center } from '@chakra-ui/layout';
import { FaChevronDown } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

import { Icon } from '../Icons';

interface HeroProps extends BoxProps {
  img: string;
}

export const Hero: React.FC<HeroProps> = ({ img, children, ...rest }) => {
  return (
    <Box
      as="section"
      bg="gray.800"
      py="12"
      position="relative"
      h="100vh"
      bgImage={`url(${img})`}
      bgSize="cover"
      bgPosition="center"
      _after={{
        content: `""`,
        display: 'block',
        w: 'full',
        h: 'full',
        bg: 'blackAlpha.600',
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}
      {...rest}
    >
      <Box
        maxW={{ base: 'xl', md: '7xl' }}
        mx="auto"
        px={{ base: '6', md: '8' }}
        h="full"
        zIndex={1}
        position="relative"
      >
        <Center
          flexDirection="column"
          textAlign="center"
          color="white"
          h="full"
          opacity="0.9"
        >
          <>
            {children}
            <Button
              as={ScrollLink}
              to="infos"
              spy={true}
              smooth={true}
              marginTop={4}
              bg="transparent"
              _hover={{ opacity: 0.7, cursor: 'pointer' }}
            >
              <Icon icon={FaChevronDown} iconProps={{ w: 6, h: 6 }} />
            </Button>
          </>
        </Center>
      </Box>
    </Box>
  );
};
