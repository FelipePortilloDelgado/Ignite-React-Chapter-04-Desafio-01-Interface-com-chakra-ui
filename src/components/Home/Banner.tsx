import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image, useBreakpointValue } from "@chakra-ui/react";


export default function Banner() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex 
      w='100%'
      h={['163px', '335px']}
      bgImage='url(/background.png)'
      bgSize='cover'
    >
      <Flex
        justifyContent='center'
        flexDir='column'
        pr={['20px', '20px', '100px', '20px', '100px']}
        pl={['20px', '20px', '100px', '20px', '100px']}
        flex='1 50%'
      >
        <Box
        fontSize={['20px', '36px']}
        lineHeight={['30px', '54px']}
        color='white.950'
        >
          <Text>5 Continentes, </Text>
          <Text>infinitas possibilidades.</Text>
        </Box>
        <Text
          fontSize={['14px', '20px']}
          lineHeight={['21px', '30px']}
          color='gray.250'
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Flex>
      {
        (isWideVersion && (
          <Flex
            alignItems='end'
            justifyContent='center'
            flex='1 50%'
          >
            <Image src='/airplane.png' alt='' mb='-30px' />
          </Flex>
        ))
      }
    </Flex>
  );
}