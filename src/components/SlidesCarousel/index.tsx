import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';


import { Box } from '@chakra-ui/layout';
import Slide from './Slide';

interface SlidesCarouselProps {
  continents: [
    {
      id: string;
      title: string;
      subTitle: string;
    } 
  ]
}

export default function SlidesCarousel({continents}: SlidesCarouselProps) {

  return (
    <Box
      w='100%'
      maxWidth='1240px'
      margin='auto'
      mt='30px'
      mb='30px'
      pl={['0', '0', '20px']}
      pr={['0', '0', '20px']}
    >
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        //onSlideChange={() => console.log('slide change')}
        //onSwiper={(swiper) => console.log(swiper)}
      >
        {continents.map((continent, index) => {
          const {id, title, subTitle} = continent;

          return <SwiperSlide key={index}><Slide link={`/${id}`} title={title} subTitle={subTitle} image={`/${id}/slide.png`} /></SwiperSlide>  
        })}
      </Swiper>
    </Box>
  );
}