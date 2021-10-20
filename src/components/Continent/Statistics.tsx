import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";

interface StatisticsProps {
  count: string;
  description: string;
  showIcon?: boolean;
}

export default function Statistics({ count, description, showIcon=false }: StatisticsProps) {
  return (
    <Box
      fontWeight='600'
      textAlign='center'
    >
      <Text
        fontSize={['24px', '24px', '36px', '48px']}
        color='yellow.900'
      >
        {count}
      </Text>
      <Text
        fontSize={['20px', '20px', '20px', '24px']}
      >
        {description}
        {showIcon && (
          <Image src='/info.png' alt='Info' ml='3px' display='inline-block' w={['10px', '10px', '16px']} />
        )}
      </Text>
    </Box>
  );
}