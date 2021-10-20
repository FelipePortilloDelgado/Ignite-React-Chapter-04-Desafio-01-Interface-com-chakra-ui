import { Image } from '@chakra-ui/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';

interface ImageTravelProps {
  src: string
  description: string;
}

export default function ImageTravel({ src, description }: ImageTravelProps) {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (

    isWideVersion ? (
      <Flex
        flexDir='column'
        justifyContent='space-between'
        alignItems='center'
        h='145px'
      >
        <Image src={src} alt={description} w='85px' h='85px' />
        <Text fontSize='24px' fontWeight='600'>{description}</Text>
      </Flex>
    ) : (
      <Flex
        flexDir='row'
        justifyContent='flex-start'
        alignItems='center'
        h='55px'
        pl='35px'
        pr='35px'
        flex-wrap='wrap'
      >
        <Box w='8px' h='8px' mr='10px' borderRadius='100%' bg='yellow.900' />
        <Text fontSize='18px' fontWeight='600'>{description}</Text>
      </Flex>
    )

  );

}