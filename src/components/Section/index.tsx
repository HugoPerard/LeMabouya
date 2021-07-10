import {
  Box,
  BoxProps,
  Img,
  useColorModeValue as mode,
} from '@chakra-ui/react';

export interface SectionProps extends BoxProps {
  image: string;
}

export const Section: React.FC<SectionProps> = ({
  image,
  children,
  ...rest
}) => {
  return (
    <Box
      as="section"
      bg={mode('gray.100', 'gray.800')}
      pb="24"
      pos="relative"
      px={{ base: '6', lg: '12' }}
      h={{ lg: '50vh' }}
      {...rest}
    >
      <Box maxW="7xl" mx="auto">
        <Box
          maxW={{ lg: 'md', xl: 'xl' }}
          pt={{ base: '20', lg: '20' }}
          pb={{ base: '4', lg: '8' }}
        >
          {children}
        </Box>
      </Box>
      <Box
        pos={{ lg: 'absolute' }}
        insetY={{ lg: '0' }}
        insetEnd={{ lg: '0' }}
        bg="gray.50"
        w={{ base: 'full', lg: '50%' }}
        height={{ base: '96', lg: 'full' }}
        sx={{
          clipPath: { lg: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)' },
        }}
      >
        <Img
          height="100%"
          width="100%"
          objectFit="cover"
          src={image}
          alt={image}
        />
      </Box>
    </Box>
  );
};
