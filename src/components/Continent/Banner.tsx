import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/react";
import { Flex, Text } from '@chakra-ui/layout';

interface BannerProps {
  id: string;
  title: string;
}

export default function Banner({id, title}: BannerProps) {
  return (
    <Flex
      justifyContent='center'
      alignItems={['center', 'center', 'flex-end']}
    >
      <Image src={`/${id}/banner.png`} alt={title} w='100%' maxH='500px' />
      <Box 
        position='absolute'
        w={['auto', 'auto', '100%']}
        maxW='1600px'
        >
        <Text
          color='white.950'
          fontSize={['28px', '28px', '48px']}
          fontWeight='700'
          mb={['0', '0', '60px']}
          ml={['0', '0', '140px']}
        >
          {title}
        </Text>
      </Box>
    </Flex>
  );
}