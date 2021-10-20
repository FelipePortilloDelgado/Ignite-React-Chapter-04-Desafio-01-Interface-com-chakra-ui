import { useColorMode } from '@chakra-ui/color-mode';
import { Box, Flex } from '@chakra-ui/layout';
import ImageTravel from './ImageTravel';


export default function TravelType() {
  const { colorMode } = useColorMode();

  return (
    <>
      <Flex
        w='100%'
        h='300px'
        justifyContent='center'
        alignItems='center'
        
      >
        <Flex
          flex='1'          
          maxW='1160'
          justifyContent={['center', 'center', 'center', 'space-around']}
          flexWrap='wrap'
        >
          <ImageTravel src='/cocktail.png' description='vida noturna' />
          <ImageTravel src='/surf.png' description='praia' />
          <ImageTravel src='/building.png' description='moderno' />
          <ImageTravel src='/museum.png' description='clássico' />
          <ImageTravel src='/earth.png' description='e mais...' />
        </Flex>
      </Flex>
      <Box w='90px' border='1px solid' borderColor={colorMode === 'light' ? 'gray.750' : 'white.950'} margin='auto'/>
    </>
  )

}