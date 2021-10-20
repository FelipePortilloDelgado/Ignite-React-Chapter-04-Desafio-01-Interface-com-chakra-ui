import { Flex, Text } from '@chakra-ui/layout';

import Statistics from "./Statistics";

interface InformationProps {
  description: string;
  statistics: [
    {
      count: string;
      description: string;
      showIcon?: boolean;
    }
  ]
}

export default function Information({description, statistics}: InformationProps) {
  return (
    <Flex
      flexDir={['column', 'column', 'row']}
    >
      <Text
        flex='1'
        fontSize={['14px', '14px', '20px', '24px']}
        textAlign='justify'
      >
        {description}
      </Text>
      <Flex
        flex='1'
        ml={['0', '80px']}
        mt={['20px', '0']}
        justifyContent='space-between'
        alignItems='center'
        flexDir='row'
      >
        {statistics.map((statistic, index) => (
          <Statistics key={index} count={statistic.count} description={statistic.description} showIcon={statistic.showIcon} />
        ))}
      </Flex>
    </Flex>
  );
}