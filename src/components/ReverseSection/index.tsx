import { Button } from '@chakra-ui/button';
import { Img } from '@chakra-ui/image';
import {
  Box,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';

import { SectionProps } from '@/components/Section';

export const ReverseSection: React.FC<SectionProps> = ({ image, ...rest }) => {
  return (
    <Box
      as="section"
      bg={mode('gray.100', 'gray.800')}
      pb="24"
      pos="relative"
      px={{ base: '6', lg: '12' }}
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
          alt="Lady working"
        />
      </Box>
      <Box maxW="7xl" ml="55%">
        <Box
          maxW={{ lg: 'md', xl: 'xl' }}
          pt={{ base: '10', lg: '20' }}
          pb={{ base: '4', lg: '8' }}
        >
          <Heading
            as="h1"
            size="2xl"
            lineHeight="1"
            fontWeight="extrabold"
            letterSpacing="tight"
          >
            Connect and engage with{' '}
            <Box
              as="mark"
              color={mode('blue.500', 'blue.300')}
              bg="transparent"
            >
              your customers globally
            </Box>
          </Heading>
          <Text
            mt={4}
            fontSize="xl"
            fontWeight="medium"
            color={mode('gray.600', 'gray.400')}
          >
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </Text>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing="4" mt="8">
            <Button
              size="lg"
              colorScheme="blue"
              height="14"
              px="8"
              fontSize="md"
            >
              Get Started Now
            </Button>
            <Button
              size="lg"
              bg="white"
              color="gray.800"
              _hover={{ bg: 'gray.50' }}
              height="14"
              px="8"
              shadow="base"
              fontSize="md"
            >
              Talk to an expert
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
