
import { Box, Flex, Text } from '@chakra-ui/layout';
import type { GetServerSideProps, NextPage } from 'next'
import Header from '../components/Header';
import Banner from '../components/Home/Banner';
import SlidesCarousel from '../components/SlidesCarousel';
import TravelType from '../components/TravelType';

import fs from 'fs';
import path from 'path';


interface ISlideCarouselData {
  id: string;
  title: string;
  subTitle: string;
}

interface HomeProps {
  continents: [
    {
    id: string;
    title: string;
    subTitle: string;
    }
  ]
}

const Home: NextPage<HomeProps> = ({ continents }: HomeProps) => {
//export default function Home( { continents } : HomeProps) {
  
  return (
    <Box>
      <Header/>
      <Banner/>
      <TravelType />
      <Flex
        flexDir='column'
        h='250px'
        justifyContent='center'
        alignItems='center'
        fontWeight='500'
        fontSize={['20px', '20px', '36px']}
        textAlign='center'
        pl='20px'
        pr='20px'
      >
        <Text>Vamos nessa?</Text>
        <Text>Então escolha seu continente</Text>
      </Flex>

      <SlidesCarousel continents={continents} />


      {/*

      <Button onClick={() => setColor('dark')}>
        Dark
      </Button>

      <Button onClick={() => setColor('light')}>
        Light
      </Button>
      <p>
        jaksdjçajdaçsds sdfsdf s fnssdjl sf s fksl fdln;askl fjs fsflksdfks kfs kdsf
        <br/>
        <p className='font'>
        {colorMode}
        </p>
      </p>
      */}
    </Box>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps = async({req, params = {}, res}) => {    
  const content = fs.readFileSync(path.join(process.cwd(), 'src', 'pages', 'api', 'data.json'), 'utf-8');
  const data: ISlideCarouselData[] = JSON.parse(content);

  const continents = data.map((continent) => {
    return {
      id: continent.id,
      title: continent.title,
      subTitle: continent.subTitle,
    }
  });

  if(!continents){
    res.end()
  }

  return {
    props: {
      continents
    }
  }

}