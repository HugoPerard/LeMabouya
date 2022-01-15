import * as React from 'react';

import {
  AspectRatio,
  Box,
  BoxProps,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';

import { CoupsDeCoeur } from '@/_data-coups-de-coeurs';

interface Props {
  coupDeCoeur: CoupsDeCoeur;
  rootProps?: BoxProps;
}

export const CoupDeCoeurCard = (props: Props) => {
  const { coupDeCoeur, rootProps } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      position="relative"
      key={coupDeCoeur.name}
      borderRadius="xl"
      overflow="hidden"
      minH={{ base: 'sm', lg: 'auto' }}
      maxH={400}
      onClick={() => onOpen()}
      {...rootProps}
    >
      <Link>
        <Image
          src={coupDeCoeur.imageUrl}
          height="full"
          objectFit="cover"
          alt={coupDeCoeur.name}
          fallback={<Skeleton />}
        />
        <Box
          position="absolute"
          inset="0"
          bg="linear-gradient(180deg, rgba(0, 0, 0, 0) 47.92%, #000000 100%)"
          boxSize="full"
        />
        <Flex
          color="white"
          direction="column-reverse"
          position="absolute"
          inset="0"
          boxSize="full"
          px={{ base: '4', md: '6' }}
          py={{ base: '4', md: '6' }}
        >
          <Stack spacing={2}>
            <Heading fontSize="2xl" fontWeight="extrabold">
              {coupDeCoeur.name}
            </Heading>
            <Flex>
              <Button
                rightIcon={<Icon as={FaChevronRight} />}
                fontSize="lg"
                fontWeight="bold"
                bg="transparent"
                px={0}
                _hover={{
                  bg: 'transparent',
                  textDecoration: 'underline',
                }}
              >
                Plus d'informations
              </Button>
            </Flex>
          </Stack>
        </Flex>
      </Link>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="4xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{coupDeCoeur.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box maxW="7xl" mx="auto">
              <Stack direction={{ base: 'column-reverse', md: 'row' }}>
                <Stack spacing={{ base: '8', lg: '10' }} flex={1}>
                  <Text fontSize="lg">{coupDeCoeur.description}</Text>
                  <AspectRatio>
                    <>
                      <iframe
                        title="itinéraire"
                        src={coupDeCoeur.itinerary}
                      ></iframe>
                      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d61807.9192877277!2d-61.05228211092733!3d14.484979012263999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x8c401f9d25fd8133%3A0x9fd3a0262daf1f5b!2sStudio%2C%20Le%20Mabouya%2C%20F28V%2BQW4%2C%20Sainte-Luce%2C%20Martinique!3m2!1d14.466885!2d-60.955185199999995!4m5!1s0x8c401c7068be21ef%3A0x8b3f147630925f10!2sPlage%20de%20l&#39;Anse%20d&#39;Arlet%2C%20Rue%20Eugene%20Larcher%2C%20Les%20Anses-d&#39;Arlet%2C%20Martinique!3m2!1d14.4909921!2d-61.0808913!5e0!3m2!1sfr!2sfr!4v1642265537120!5m2!1sfr!2sfr"></iframe> */}
                    </>
                  </AspectRatio>
                </Stack>
                <Flex flex="1" overflow="hidden">
                  <Image
                    src={coupDeCoeur.imageUrl}
                    alt="Lovely Image"
                    fallback={<Skeleton />}
                    maxH="450px"
                    minW="300px"
                    objectFit="cover"
                    flex="1"
                  />
                </Flex>
              </Stack>
            </Box>
            {/* <Image
              src={coupDeCoeur.imageUrl}
              height="full"
              objectFit="cover"
              alt={coupDeCoeur.name}
              fallback={<Skeleton />}
            />
            <Text>{coupDeCoeur.description}</Text>
            <AspectRatio>
              <iframe
                title="itinéraire"
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d30906.603835076334!2d-60.947980532742065!3d14.465990458010713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x8c401f9d25fd8133%3A0x9fd3a0262daf1f5b!2sStudio%2C%20Le%20Mabouya%2C%20F28V%2BQW4%2C%20Sainte-Luce%2C%20Martinique!3m2!1d14.466885!2d-60.955185199999995!4m5!1s0x8c402180700d200f%3A0x57562f982f580e6d!2sAnse%20Figuier%2C%20Martinique%2C%20Le%20Marin%2C%20Martinique!3m2!1d14.4599902!2d-60.9096116!5e0!3m2!1sfr!2sfr!4v1642262072186!5m2!1sfr!2sfr"
              ></iframe>
            </AspectRatio> */}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
