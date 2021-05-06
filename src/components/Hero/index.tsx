import { Button } from '@chakra-ui/button';
import { LightMode } from '@chakra-ui/color-mode';
import { Box, BoxProps, Center, Heading, Text } from '@chakra-ui/layout';

export const Hero: React.FC<BoxProps> = (props) => {
  return (
    <Box
      as="section"
      bg="gray.800"
      py="12"
      position="relative"
      h="100vh"
      bgImage="url(/beach.jpg)"
      bgSize="cover"
      bgPosition="center"
      _after={{
        content: `""`,
        display: 'block',
        w: 'full',
        h: 'full',
        bg: 'blackAlpha.700',
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}
      {...props}
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
          opacity="0.8"
        >
          <Heading size="2xl" fontWeight="extrabold">
            Le Mabouya
          </Heading>
          <Text fontSize="lg" fontWeight="medium" mt="3">
            Studio les pieds dans l'eau en Martinique
          </Text>
          <LightMode>
            <Button
              colorScheme="blue"
              size="lg"
              mt="6"
              fontWeight="bold"
              fontSize="md"
            >
              Regarder les disponibilités
            </Button>
          </LightMode>
        </Center>
      </Box>
    </Box>
  );
};
