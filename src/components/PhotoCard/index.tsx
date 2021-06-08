import { useState } from 'react';

import { Box, Image, Text } from '@chakra-ui/react';

interface PhotoCardProps {
  src: string;
  alt: string;
  children?: string;
}

export const PhotoCard = ({
  src,
  alt,
  children = '',
  ...rest
}: PhotoCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const onEnter = () => {
    setShowDetails(true);
  };
  const onLeave = () => {
    setShowDetails(false);
  };

  return (
    <Box onMouseEnter={onEnter} onMouseLeave={onLeave} position="relative">
      <Image
        src={src}
        alt={alt}
        maxH="500"
        w="100%"
        borderRadius="lg"
        boxShadow="lg"
      />
      {children && (
        <Text
          lineHeight="1"
          fontSize="sm"
          position="absolute"
          left={0}
          right={0}
          bottom={0}
          bg={showDetails ? 'blackAlpha.600' : 'transparent'}
          w="full"
          zIndex="2"
          color={showDetails ? 'gray.200' : 'transparent'}
          px={2}
          py={3}
          {...rest}
        >
          {children}
        </Text>
      )}
    </Box>
  );
};
