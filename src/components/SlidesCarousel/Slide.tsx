import { Image } from "@chakra-ui/image";
import { Box, Flex, Link, Text } from "@chakra-ui/layout";

interface SlideProps {
  link: string;
  title: string;
  subTitle: string;
  image: string;
}

export default function Slide({ link, title, subTitle, image }: SlideProps) {
  return (
    
    <Flex
      justifyContent='center'
      alignItems='center'
      width={['100%', '100%', 'auto']}
      height={['250px', '250px', '450px']}      
    >
      <Image 
        src={image} 
        alt='Europa'
        width='100%' 
        height='100%'
        objectFit='fill'
      />
      <Link 
        href={link}      
        position='absolute'
        fontWeight='700'
        textAlign='center'
        _hover={{textDecoration: 'none'}}
      >
        <Box>
          <Text fontSize={['24px', '24px', '48px']} color='white.950'>{title}</Text>
          <Text fontSize={['14px', '14px', '24px']} color='gray.250'>{subTitle}</Text>
        </Box>
      </Link>
    </Flex>

  );
}