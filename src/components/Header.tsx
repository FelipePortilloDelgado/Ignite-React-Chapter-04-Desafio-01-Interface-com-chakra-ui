import { Image } from "@chakra-ui/image";
import { Flex, Link, Text } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Header() {
  const { colorMode, toggleColorMode, setColorMode } = useColorMode();
  const { asPath } = useRouter();


  return (
    <Flex
      w='100%'
      h={['50px', '100px']}
      justifyContent='center'
      alignItems='center'
    >      
      { asPath !== '/' &&
        <Link 
          href='/'
          mr='auto'
          ml={['30px', '100px']}
        >
          <Image 
            src='/back.png'
            alt='voltar'
            h={['16px', '32px']}
          />
        </Link>
      }
      <Image 
        src='/logo.png'
        alt='logo'
        h={['20px', '45px']}
        position='absolute'
      />

      {colorMode === 'light' ? (
        <Text fontSize={['16px', '20px']} ml='auto' mr={['30px', '100px']} color='gray.750'><FaMoon onClick={toggleColorMode} cursor='pointer'/></Text>
      ) : (
        <Text fontSize={['16px', '20px']} ml='auto' mr={['30px', '100px']} color='white.950'><FaSun onClick={toggleColorMode} cursor='pointer'/></Text>
      )}
      
    </Flex>
  )

}