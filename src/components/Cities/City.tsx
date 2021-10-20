import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";

interface CityProps {
  city: string,
  country: string,
  image: string,
  flag: string
}


export default function City({city, country, image, flag}: CityProps) {
  const { colorMode } = useColorMode();

  return (
    <Flex
      w='256px'
      h='279px'
      mt='48px'
      border='1px solid'
      borderColor='yellow.900.50'
      borderRadius='5px'
      flexDir='column'
      bg={colorMode === 'light' ? 'white.950' : 'gray.900'}
    >
      <Image src={image} alt={city} />
      <Flex
        justifyContent='space-between'
        alignItems='center'
        flex='1'
      >
        <Box ml='20px'>
          <Text fontSize='20px' color={colorMode === 'light' ? 'gray.750' : 'white.1000'} fontWeight='600'>{city}</Text>
          <Text fontSize='16px' color={colorMode === 'light' ? 'gray.300' : 'white.950'} fontWeight='500'>{country}</Text>
        </Box>
        <Image src={flag} alt={country} mr='20px' w='30px' h='30px' borderRadius='100%' objectFit='cover' objectPosition='center' />
      </Flex>
    </Flex>
  );
}