import { extendTheme } from '@chakra-ui/react';
import { mode, GlobalStyleProps } from "@chakra-ui/theme-tools"

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    yellow: {
      "900": "#FFBA08",
      "900.50": "#ffba0880",
    },
    black: {
      "1000": "#000000"
    },
    gray: {
      "900": "#354144",
      "750": "#47585B",
      "300": "#999999",
      "275": "#C4C4C4",
      "250": "#DADADA"
    },
    white: {
      "1000": "#FFFFFF",
      "950": "#F5F8FA"
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'  
  },
  styles: {
    global: (props: GlobalStyleProps) => ({
      "html, body": {
        bg: mode('white.950', 'gray.750')(props),
        color: mode('gray.750', 'white.950')(props),
      },
      ".font": {
        color: mode('yellow.900', 'black.1000')(props),
      },
      ".swiper-button-next, .swiper-button-prev": {
        color: 'yellow.900',
      },
      ".swiper-pagination-bullet": {
        bg: 'gray.275',
        opacity: '1',
      },      
      ".swiper-pagination-bullet-active": {
        bg: 'yellow.900',
      }
    })
  }  
});

