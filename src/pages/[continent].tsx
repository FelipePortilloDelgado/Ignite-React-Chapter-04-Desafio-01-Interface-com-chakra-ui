import { Box } from "@chakra-ui/layout";

import { GetServerSideProps } from "next";
import Header from "../components/Header";
import fs from 'fs';
import path from 'path';
import Banner from "../components/Continent/Banner";
import Information from "../components/Continent/Information";
import Cities from "../components/Cities";

interface IContinentData {
  id: string;
  title: string;
  image: string;
  description: string;
  statistics: [
    {
      count: string;
      description: string;
      showIcon?: boolean;
    }
  ],
  cities: [
    {
      city: string,
      country: string,
      image: string,
      flag: string
    }
  ]
}

interface ContinentProps {
  continent: IContinentData
}

export default function Continent({continent}: ContinentProps) {

  return (
    <Box>
      <Header/>
      <Banner id={continent.id} title={continent.title}/>
      <Box
        mt={['24px', '24px', '80px']}
        ml={['16px', '16px', '16px', '16px', '140px']}
        mr={['16px', '16px', '16px', '16px', '140px']}
      >
        <Information description={continent.description} statistics={continent.statistics} />
        <Cities cities={continent.cities}/>
      </Box>
    </Box>
  );

}

export const getServerSideProps: GetServerSideProps = async({req, params = {}, res}) => {
  const { continent } = params;
  
  const content = fs.readFileSync(path.join(process.cwd(), 'src', 'pages', 'api', 'data.json'), 'utf-8');
  const continents: IContinentData[] = JSON.parse(content);

  const data = continents.find((c) => c.id === String(continent));

  
  if(!data){
    res.writeHead(301, { Location: '/' })
    res.end()
    
    return {
      props: {}
    };
  }


  return {
    props: {
      continent: data
    }
  }

}