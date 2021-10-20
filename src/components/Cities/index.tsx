import { Box, Flex, Text } from "@chakra-ui/layout";
import City from "./City";

interface CitiesProps {
  cities: [
    {
      city: string,
      country: string,
      image: string,
      flag: string
    }
  ]
}

export default function Cities({ cities }: CitiesProps) {
  return (
    <Box mt={['40px', '60px']} mb={['40px', '60px']}>
      <Text fontSize={['24px', '36px']}>Cidade 100+</Text>

      <Flex
        flexWrap='wrap'
        justifyContent={['center', 'space-between']}
      >
        {cities.map((data, index) => (
          <City key={index} city={data.city} country={data.country} image={data.image} flag={data.flag}  />
        ))}
      </Flex>
    </Box>
  );
}