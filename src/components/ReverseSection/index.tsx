import { Img } from '@chakra-ui/image';
import { Box, useColorModeValue as mode } from '@chakra-ui/react';

import { SectionProps } from '@/components/Section';

export const ReverseSection: React.FC<SectionProps> = ({
  image,
  children,
  ...rest
}) => {
  return (
    <Box
      as="section"
      bg={mode('gray.100', 'gray.800')}
      py={4}
      pos="relative"
      px={{ base: '6', lg: '12' }}
      h={{ base: '100vh', lg: '50vh' }}
      {...rest}
    >
      <Box
        pos={{ lg: 'absolute' }}
        insetY={{ lg: '0' }}
        insetStart={{ lg: '0' }}
        bg="gray.50"
        w={{ base: 'full', lg: '50%' }}
        height={{ base: '96', lg: 'full' }}
        sx={{
          clipPath: { lg: 'polygon(0% 0%, 96% 0%, 88% 100%, 0% 100%)' },
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
      <Box maxW="7xl" ml={{ lg: '55%' }}>
        <Box
          maxW={{ lg: 'md', xl: 'xl' }}
          pt={{ base: '10', lg: '20' }}
          pb={{ base: '4', lg: '8' }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
