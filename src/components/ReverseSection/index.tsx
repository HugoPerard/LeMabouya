import { Img } from '@chakra-ui/image';
import {
  Box,
  useBreakpointValue,
  useColorModeValue as mode,
} from '@chakra-ui/react';

import { SectionProps } from '@/components/Section';

export const ReverseSection: React.FC<SectionProps> = ({
  image,
  children,
  ...rest
}) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
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
      {isMobile && <Box pb={4}>{children}</Box>}
      <Box
        pos={{ lg: 'absolute' }}
        insetY={{ lg: '0' }}
        insetStart={{ lg: '0' }}
        w={{ base: 'full', lg: '50%' }}
        height={{ base: '96', lg: 'full' }}
        sx={{
          clipPath: { lg: 'polygon(0% 0%, 96% 0%, 88% 100%, 0% 100%)' },
        }}
      >
        <Img src={image} alt={image} />
      </Box>
      {!isMobile && (
        <Box maxW="7xl" ml="55%">
          <Box maxW={{ lg: 'md', xl: 'xl' }} pt="20" pb="8">
            {children}
          </Box>
        </Box>
      )}
    </Box>
  );
};
