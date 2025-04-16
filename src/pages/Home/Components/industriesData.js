'use client'

import {
  Box,
  Grid,
  GridItem,
  Text,
  Flex,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import HeadingAnimation from '../../../components/Animation/Text/HeadingAnimation'
import { Link } from 'react-router-dom'

// Industry data with SVGs
const industriesData = [
  {
    name: 'Healthcare Industry',
    img:
      'data:image/svg+xml;charset=utf-8,' +
      encodeURIComponent(
        '<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 0C7.38746 0 0 7.38746 0 16.5C0 25.6125 7.38746 33 16.5 33C25.6125 33 33 25.6125 33 16.5C33 7.38746 25.6125 0 16.5 0ZM13.8963 7.6956H19.1037V13.8963H25.2912V19.1037H19.1037V25.3044H13.8963V19.1037H7.7088V13.8963H13.8963V7.6956Z" fill="#3F77A5"/></svg>'
      ),
    className: 'light-blue',
    position: [1, 1],
    bgColor: '#BECEDC',
    textColor: 'black',
    dashColor: '#3F77A5',
    image: "./assets/HealthcareIndustry.png"
  },
  {
    name: '',
    img: '',
    className: '',
    position: [1, 2],
    bgColor: '',
    textColor: '',
    dashColor: '',
  },
  {
    name: 'Education Industry',
    img:
      'data:image/svg+xml;charset=utf-8,' +
      encodeURIComponent(
        '<svg width="44" height="33" viewBox="0 0 44 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 10.8349C0 13.3727 1.42522 13.6145 3.86606 14.7034L7.39173 16.3339C8.3296 16.7523 9.31603 17.1727 10.2256 17.6252C10.4654 17.7444 10.6786 17.81 10.9436 17.9385C11.235 18.0795 11.3311 18.13 11.6512 18.2623L19.433 21.8244C20.9138 22.3863 22.1818 22.5024 23.7199 22.0942C23.9915 22.0222 24.2671 21.933 24.5044 21.8474L31.5969 18.6273C31.8785 18.4959 32.0048 18.4195 32.3006 18.2997C32.5471 18.1998 32.7599 18.0769 33.0012 17.9692L41.5068 14.0997C42.1673 13.8051 42.9874 13.4513 43.4138 12.913C43.7612 12.4747 43.9548 11.9522 44 11.419V10.9282C43.9186 9.97419 43.3652 9.05742 42.3675 8.60052L37.4699 6.36545C36.0687 5.6687 33.9157 4.81774 32.5705 4.13208C32.3158 4.00214 32.1532 3.93931 31.8582 3.81321C31.5826 3.69542 31.4454 3.59914 31.1594 3.48092C30.1729 3.07344 29.2902 2.6306 28.3315 2.18393C27.3802 1.74066 26.4771 1.39282 25.5528 0.923356C23.0336 -0.35681 21.0015 -0.268412 18.5051 0.894814L4.58325 7.25432C4.11421 7.47286 3.698 7.65456 3.23812 7.88588C2.20056 8.40796 0.000213006 8.98478 0.000213006 10.8354L0 10.8349ZM38.5002 18.3975L38.4951 26.1371C38.5206 27.4117 40.0428 28.0194 40.931 27.0159C41.2271 26.6813 41.2575 26.4815 41.2524 25.8764L41.2501 17.1945C40.881 17.2805 38.9831 18.285 38.5002 18.3975ZM21.2267 33.007C25.1332 33.007 27.268 32.7096 30.9476 31.3841C32.5927 30.7917 33.9112 30.1612 34.8759 28.6953C35.2508 28.1255 35.6834 27.142 35.7467 26.3005C35.8947 24.3353 35.7501 21.723 35.7501 19.6866L34.1536 20.4104C33.59 20.6432 33.0602 20.9148 32.5143 21.1772C31.9577 21.4448 31.4633 21.6226 30.908 21.8915C30.5953 22.0427 30.3827 22.1309 30.0794 22.2659L26.0155 24.1316C22.3509 25.6981 19.8066 25.0569 16.3846 23.4117C15.8385 23.149 15.309 22.8775 14.7453 22.6449L8.25036 19.6866C8.25036 21.7911 8.14982 24.1461 8.24929 26.2189C8.32662 27.8326 9.4498 29.4679 10.7572 30.3282C11.3087 30.6909 12.3469 31.1238 12.9889 31.3619C13.8126 31.6676 14.5888 31.9021 15.4585 32.1581C16.9425 32.5948 19.3128 33.0072 21.2269 33.0072L21.2267 33.007Z" fill="#3F77A5"/></svg>'
      ),
    className: 'white',
    position: [1, 3],
    bgColor: 'white',
    textColor: 'black',
    dashColor: '#3F77A5',
    image: "./assets/EducationIndustry.png"
  },
  {
    name: 'Defense',
    img:
      'data:image/svg+xml;charset=utf-8,' +
      encodeURIComponent(
        '<svg width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.000105915 5.9168L13.928 0.881836V34.1176C9.65723 31.3919 5.4666 27.0673 2.62918 22.4434C0.909035 19.6515 0 16.4112 0 13.0798L0.000105915 5.9168Z" fill="#3F77A5"/><path d="M30 5.9168V13.0801C30 16.4114 29.091 19.6516 27.3708 22.4462C24.5333 27.0688 20.3428 31.3904 16.072 34.1162V0.881836L30 5.9168Z" fill="#3F77A5"/></svg>'
      ),
    className: 'light-blue',
    position: [1, 4],
    bgColor: '#BECEDC',
    textColor: 'black',
    dashColor: '#3F77A5',
    image: "./assets/DefenseIndustry.png"
  },
  {
    name: 'Election',
    img:
      'data:image/svg+xml;charset=utf-8,' +
      encodeURIComponent(
        '<svg width="46" height="33" viewBox="0 0 46 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M23.8947 12.1933C25.4461 12.6076 28.2012 16.3535 26.2137 19.1439C25.7755 19.7595 24.8434 20.4041 23.7896 20.4041C22.2985 20.4041 17.1392 20.5366 16.0216 20.2702C15.5747 20.1635 14.7212 19.7828 15.6121 21.5291L19.2634 29.4568C18.0004 29.4568 16.7365 29.4619 15.4735 29.4565C14.6854 29.453 14.3542 29.3856 13.8741 29.7516C12.3993 30.8763 13.441 32.8251 14.6318 32.8251H44.5265C45.3017 32.8251 46 31.964 46 31.1408C46 30.3876 43.6497 25.7601 43.2977 25.0009C42.8086 23.9455 42.3864 22.9856 41.8932 21.9842L39.7879 17.458C38.653 15.1607 37.3951 12.1109 36.2806 9.91263C35.6887 8.74451 35.5108 7.45659 34 7.45659C33.3962 7.45659 31.9208 8.23087 31.3685 8.50973C30.5553 8.9205 29.6596 9.26196 28.8403 9.66571C28.4072 9.87909 28.1264 10.0302 27.623 10.2381L25.0539 11.4583C24.806 11.5807 24.6783 11.6158 24.3847 11.7365C24.0531 11.8732 23.9861 11.8499 23.8944 12.1936L23.8947 12.1933ZM0 1.24607V14.9304C0 16.3365 1.85137 15.9832 3.47372 15.9832C4.13237 15.9832 4.52655 15.3997 4.52655 14.7199V1.56197C4.52655 -0.091677 2.88407 0.193572 1.36842 0.193572C0.675908 0.193572 0 0.562503 0 1.24607ZM6.73694 1.45656V13.7725H10.0002C10.486 13.7725 11.8043 14.4593 12.2125 14.7183C12.4878 14.8931 12.9366 15.8354 13.5521 16.5365C14.5676 17.6925 16.4352 18.2991 18.1055 18.2991C19.3682 18.2991 23.6005 18.5134 24.2576 18.0298C25.3714 17.2108 24.5016 14.6244 22.4116 13.8878C20.4632 13.2011 18.0004 14.451 18.0004 12.6146C18.0004 11.2025 19.6282 11.5621 21.3687 11.5621C21.9031 10.5521 23.0636 9.90304 24.1806 9.42647L27.5792 7.87791C27.4425 7.36587 24.8328 4.77153 24.3004 4.10426C22.5777 1.94496 19.847 0.437608 16.992 0.869787L6.73694 1.45688V1.45656Z" fill="#3F77A5"/></svg>'
      ),
    className: 'election-box',
    position: [2, 1],
    bgColor: 'white',
    textColor: 'black',
    dashColor: '#3F77A5',
    isWide: true,
    image: "./assets/ElectionIndustry.png"
  },
  {
    name: '',
    img: '',
    className: '',
    position: [2, 2],
    bgColor: '',
    textColor: '',
    dashColor: '',
  },
  {
    name: '',
    img: '',
    className: '',
    position: [2, 2],
    bgColor: '',
    textColor: '',
    dashColor: '',
  },
  {
    name: 'Banking Industry',
    img: "data:image/svg+xml;charset=utf-8," +
      encodeURIComponent(
        `<svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.2432 8.81782V31.9696C26.2432 32.5811 26.6621 33.0001 27.2736 33.0001H32.0139C32.6255 33.0001 33.0444 32.5811 33.0444 31.9696V8.81782C33.0444 8.28679 32.6459 7.78735 32.1513 7.78735H27.1363C26.6417 7.78735 26.2432 8.28679 26.2432 8.81782Z" fill="#3F77A5"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M26.6556 2.90961C26.6556 3.26863 26.7942 3.65063 26.8617 3.94009C26.5815 4.35859 26.3111 4.47274 26.0537 4.7122C25.945 4.81336 25.8905 4.88889 25.7792 4.98721L24.3096 6.26568C23.8638 6.62156 22.759 7.72713 22.2588 8.06206C21.9945 8.00046 21.9485 7.91193 21.6668 7.82968C20.5826 7.51321 19.6999 7.86456 18.9501 8.46311C18.4327 8.87621 18.1729 9.51621 17.9995 10.2604C17.7288 10.2665 17.3507 10.3636 17.0667 10.4268C16.7168 10.5047 16.4705 10.56 16.1044 10.6324C15.7319 10.7062 15.5148 10.7653 15.143 10.8389C14.8308 10.9007 14.4496 11.0096 14.1523 11.0161C13.9017 10.6419 13.6413 10.3275 13.232 10.0816C10.5041 8.44239 8.10688 11.6341 8.93117 13.3519L5.64656 15.632C5.43395 15.7767 5.38191 15.8412 5.15267 15.9625C4.7703 15.7602 4.49427 15.5571 3.97388 15.4907C2.60906 15.3165 1.30117 15.9757 0.782616 17.2945C0.424552 18.2053 0.585414 19.1532 1.05069 19.9272C1.22878 20.2235 1.60136 20.6223 1.90045 20.7949C4.43471 22.2562 6.38925 19.9883 6.38925 18.7105L6.32057 17.5426C6.80599 17.2858 7.68911 16.5883 8.18833 16.2502C8.51698 16.0277 8.79863 15.8388 9.11787 15.5997L10.0303 14.9321C12.3258 16.4692 14.5304 14.4709 14.5645 12.9397C14.9154 12.9397 15.2058 12.8312 15.5548 12.7621C16.0852 12.6572 18.1281 12.184 18.4804 12.184C18.5706 12.5217 18.8799 12.7342 19.0762 12.8935C21.2072 14.6229 23.7703 12.6253 23.7703 11.0161V10.3979C23.7703 9.55738 23.1328 9.80137 24.7218 8.53274L28.167 5.45146C30.1659 6.50916 32.4951 5.08967 32.4951 2.90961C32.4951 0.408711 29.5258 -0.995084 27.5307 0.830561C27.2992 1.04229 27.1006 1.3978 26.9431 1.68565C26.8033 1.94103 26.6556 2.54089 26.6556 2.90961Z" fill="#3F77A5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5186 16.3748V32.1757C17.5186 32.5883 18.0032 33.0001 18.4117 33.0001H23.2893C24.0806 33.0001 24.3198 32.333 24.3198 31.626V16.8556C24.3198 15.8726 23.9318 15.4817 22.9458 15.4817H18.8238C18.1768 15.4817 17.5186 15.7285 17.5186 16.3748Z" fill="#3F77A5"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.79346 18.367V31.9695C8.79346 32.581 9.21239 33 9.82393 33H14.5642C15.1758 33 15.5947 32.581 15.5947 31.9695V18.367C15.5947 17.9798 15.1583 17.4739 14.7703 17.4739H9.61782C9.20517 17.4739 8.79346 17.9586 8.79346 18.367Z" fill="#3F77A5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 24.6186V31.6259C0 32.3337 0.24019 32.9999 1.03047 32.9999H5.90813C6.31656 32.9999 6.80124 32.5882 6.80124 32.1756V24.069C6.80124 23.6649 6.39078 23.2446 5.83945 23.2446H1.03047C0.266099 23.2446 0 23.8443 0 24.6186Z" fill="#3F77A5"/>
</svg>
`
      ),
    className: 'white',
    position: [2, 4],
    bgColor: 'white',
    textColor: 'black',
    dashColor: '#3F77A5',
    image: "./assets/BankingIndustry.png"
  },
  {
    name: '',
    img: '',
    className: '',
    position: [3, 1],
    bgColor: '',
    textColor: '',
    dashColor: '',
  },
  {
    name: 'Transportation Industry',
    img:
      'data:image/svg+xml;charset=utf-8,' +
      encodeURIComponent(
        '<svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M27.3644 15.0409C27.3644 13.0773 27.1807 13.1754 28.6415 13.5602C29.3389 13.7439 29.1978 13.8601 29.1978 15.1769C29.1978 15.7453 28.7782 15.6561 28.3562 15.5441C28.001 15.4498 27.3645 15.4228 27.3645 15.0409H27.3644ZM17.4508 21.6274C17.4508 23.3674 17.2506 23.7323 17.994 23.7323V21.2879C17.7701 21.2879 17.4508 21.3148 17.4508 21.6274ZM29.4693 33.9853H30.0803C30.3604 33.9853 30.6914 33.7571 30.6914 33.5101V33.1706H28.9939C28.6137 33.1706 28.8414 33.9853 29.4691 33.9853H29.4693ZM19.6915 33.3743C19.6915 34.2286 21.5927 34.2286 21.5927 33.3743C21.5927 33.02 20.8738 33.1706 19.8952 33.1706C19.7388 33.1706 19.6915 33.2177 19.6915 33.3743ZM32.389 23.7323C32.7872 23.7323 33 23.6478 33 23.257V21.7633C33 21.3725 32.7871 21.288 32.389 21.288V23.7324V23.7323ZM1.62966 20.0657C1.62966 20.4153 0.959244 20.2694 0 20.2694V21.8991C0 22.0555 0.0472954 22.1028 0.203725 22.1028H15.0741C15.2305 22.1028 15.2778 22.0556 15.2778 21.8991V20.2694H13.6481V18.9792H11.068V20.2694H4.20983V18.9792H1.6295V20.0657H1.62966ZM19.0124 20.2694V26.3804H24.6483V18.9113H20.1668C19.4367 18.9113 19.0124 19.5284 19.0124 20.2694ZM25.7346 26.3804H31.3705V20.0657C31.3705 19.4957 30.8741 18.9113 30.3519 18.9113H25.7346V26.3804ZM21.4568 30.726C20.2323 30.726 20.0964 28.8926 21.5247 28.8926C22.1956 28.8926 22.6563 29.8419 22.0903 30.4087C21.945 30.5541 21.7159 30.726 21.4569 30.726H21.4568ZM26.2098 30.3186C25.3711 30.3186 23.6976 30.5241 23.6976 29.9111C23.6976 29.5886 23.7195 29.3001 24.1729 29.3001H26.3456C26.8256 29.3001 26.9707 30.3186 26.2098 30.3186ZM28.9939 30.726C27.7893 30.726 27.7642 28.8926 28.9939 28.8926C30.2213 28.8926 30.1924 30.726 28.9939 30.726ZM19.0124 32.152H31.3705V27.4667H19.0124V32.152ZM23.8334 13.9545C23.8334 11.7633 23.7784 11.9371 25.1664 12.4179C25.9718 12.6968 25.8025 12.6824 25.8025 14.4299C25.8025 15.0693 24.6905 14.6055 24.4669 14.5433C24.1043 14.4426 23.8335 14.3901 23.8335 13.9545H23.8334ZM20.3703 13.0038V10.763C20.3703 10.5704 20.6047 10.4235 20.7778 10.4235L22.0739 11.0965C22.2216 11.1813 22.4073 11.23 22.4073 11.4421C22.4073 12.106 22.4821 13.07 22.3393 13.6828C21.7906 13.8143 21.8508 13.7318 21.108 13.4883C20.8615 13.4075 20.3702 13.2859 20.3702 13.0038H20.3703ZM3.53085 12.9359H3.19136C2.52048 12.9359 1.90119 12.3166 1.90119 11.6457C1.90119 11.1228 1.87287 10.8709 2.3564 10.4033C3.12967 9.65528 4.82101 9.93554 4.82101 11.5779C4.82101 12.2405 4.18856 12.9359 3.53085 12.9359ZM16.8395 11.3062V8.18266C16.8395 7.90837 16.9874 7.7074 17.2469 7.7074C17.5257 7.7074 17.9911 8.28292 18.1797 8.47226C19.2542 9.55227 19.0124 8.46261 19.0124 12.1889C19.0124 12.8956 17.8635 12.2208 17.5959 12.1116C17.0474 11.8878 16.8396 11.8433 16.8396 11.3062H16.8395ZM12.2222 12.9359C11.6995 12.9359 11.4474 12.964 10.9798 12.4807C10.1583 11.6316 10.6464 10.016 12.1542 10.016C13.9824 10.016 13.9709 12.9359 12.2222 12.9359ZM2.30864 6.89265C2.30864 6.51459 2.49094 5.93876 2.58829 5.6106C2.83304 4.78605 3.02865 2.95435 4.82086 2.95435H11.2715C12.1471 2.95435 12.9124 3.53369 13.1443 4.20502L13.5802 6.89265C13.5802 7.1126 13.2851 7.3001 13.037 7.3001H2.85186C2.60375 7.3001 2.30864 7.1126 2.30864 6.89265ZM0 7.97909V13.3433C0 15.6313 1.6944 17.3494 3.87034 17.3494H30.2839C30.5127 17.3494 30.7592 17.2294 30.7592 17.0099V12.8679C30.7592 12.5316 30.5821 12.4793 30.3456 12.3988C27.7653 11.5196 25.5944 11.0155 22.9966 9.56252C20.3462 8.08011 19.2938 7.03316 17.625 4.74901C17.0045 3.89951 16.3768 2.46945 15.7247 1.96419C14.8696 1.30158 14.2132 0.985352 12.969 0.985352H4.82086C3.04365 0.985352 1.75012 2.0121 1.17598 3.24777C0.866793 3.91267 0 7.22449 0 7.97924V7.97909Z" fill="white"/></svg>'
      ),
    className: 'dark-blue',
    position: [3, 2],
    bgColor: '#3F77A5',
    textColor: 'white',
    dashColor: 'white',
    image: "./assets/TransportationIndustry.png"
  },
  {
    name: 'City Monitoring',
    img:
      'data:image/svg+xml;charset=utf-8,' +
      encodeURIComponent(
        '<svg width="37" height="33" viewBox="0 0 37 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M13.7542 16.5052H26.0271C26.0911 16.7449 27.1631 18.2798 27.3813 18.6072L28.7779 20.7373H10.2979C10.5311 20.3891 10.8714 20.0261 11.1601 19.695L12.8896 17.6156C13.0708 17.412 13.6991 16.7113 13.7542 16.5052ZM0 22.8533V28.2139C0 28.707 0.248839 28.9885 0.605374 29.1602C0.975238 29.3385 1.60777 29.2719 2.11601 29.2719C2.17542 28.558 2.29205 27.8548 2.56176 27.3196C2.90427 26.6399 3.03228 26.4159 3.54423 25.9039C6.55519 22.8931 11.638 24.9774 11.638 29.2719H22.853C22.853 27.9917 23.3811 26.7855 24.2085 25.9017L24.8689 25.363C25.1303 25.1803 25.3263 25.0607 25.6263 24.9213C28.7192 23.4837 32.375 25.7464 32.375 29.2719H35.1258C35.3344 29.2719 35.6921 29.0838 35.8111 28.9697C35.9813 28.8068 36.1133 28.5299 36.1133 28.2139V21.6542C36.1133 21.3079 35.7821 20.9648 35.519 20.838C35.1089 20.6404 31.9766 20.7373 31.3875 20.7373L27.5513 14.9808C27.3837 14.7225 27.116 14.3892 26.7323 14.3892H13.1192C12.7257 14.3892 12.5002 14.6811 12.3131 14.9232C12.1113 15.1844 11.8989 15.4016 11.6987 15.6489C10.5415 17.0782 9.10853 18.6758 8.01082 20.0724C7.24714 21.0441 7.38237 20.8776 6.28963 21.0316C5.41549 21.1548 1.00875 21.6847 0.512327 21.955C0.212626 22.1182 0 22.4158 0 22.8534L0 22.8533Z" fill="#3F77A5"/><path fillRule="evenodd" clipRule="evenodd" d="M17.6336 1.55176C17.0228 1.40949 16.3765 1.21597 15.7437 1.04352C15.1972 0.894581 14.2123 0.564325 13.6837 0.564325C13.0687 0.564325 12.6962 1.24458 12.6962 1.90447V6.70084C12.6962 7.48282 13.1704 8.04098 13.7542 8.04098C14.1978 8.04098 17.0971 7.09812 17.6336 7.05348C17.8245 7.87318 18.6918 8.53476 19.3969 8.53476H24.5459C25.1018 8.53476 25.6868 8.2355 26.0083 7.88117C26.3385 7.51721 26.5914 6.95308 26.5914 6.27766V2.32771C26.5914 0.944687 25.6469 0 24.2638 0H19.8201C18.7064 0 17.6995 0.759723 17.6337 1.55176H17.6336Z" fill="#3F77A5"/><path fillRule="evenodd" clipRule="evenodd" d="M6.84178 30.8229C6.1035 30.8229 5.36056 30.1604 5.36056 29.4122C5.36056 28.8402 5.34114 28.5584 5.9064 28.0536C6.76143 27.2902 8.46407 27.6829 8.46407 29.3416C8.46407 30.1827 7.72013 30.8229 6.84178 30.8229ZM3.17401 29.1301C3.17401 30.7598 4.02822 32.0652 5.36006 32.6573C6.3436 33.0946 7.411 33.1144 8.41623 32.6794C10.1336 31.9362 11.2148 29.6509 10.3462 27.8123C8.49004 23.8834 3.17407 25.4717 3.17407 29.1301H3.17401Z" fill="#3F77A5"/><path fillRule="evenodd" clipRule="evenodd" d="M26.0271 29.2715C26.0271 27.1377 29.2011 27.2429 29.2011 29.201C29.2011 31.3952 26.0271 31.2457 26.0271 29.2715ZM23.9111 28.9189C23.9111 30.1319 24.058 31.1191 25.0791 31.9828C25.465 32.3093 25.6415 32.4653 26.1465 32.6788C27.8681 33.4066 29.503 32.8526 30.6234 31.4697C31.0661 30.9233 31.2962 30.1565 31.3337 29.366C31.4335 27.2562 29.6634 25.5332 27.7904 25.5332C26.5913 25.5332 25.7701 25.8272 25.0206 26.5723C24.5247 27.0651 23.911 27.9705 23.911 28.9189H23.9111Z" fill="#3F77A5"/></svg>'
      ),
    className: 'white',
    position: [3, 3],
    bgColor: 'white',
    textColor: 'black',
    dashColor: '#3F77A5',
    image: "./assets/CityMonitoring.png"
  },
  {
    name: 'Warehousing & Logistic Industry',
    img:
      'data:image/svg+xml;charset=utf-8,' +
      encodeURIComponent(
        '<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 31.7125C0.00106823 32.3785 0.621354 32.9989 1.28745 33H4.12503V16.6288C4.12503 15.7718 4.67849 15.1465 5.54293 15.1465H27.4571C28.3215 15.1465 28.875 15.7718 28.875 16.6288V33H31.7125C32.3785 32.9989 32.9989 32.3785 33 31.7125V11.5362C32.9989 10.9531 31.8054 10.2921 31.1819 9.87475L22.4419 3.85502C22.2462 3.7222 22.1057 3.60683 21.9144 3.48019L17.7891 0.644501C17.2376 0.277147 16.929 0.0632632 16.6637 0H16.3366C16.0767 0.0620763 15.7778 0.269076 15.2495 0.618507L0.825148 10.5575C0.514293 10.7631 0.00106823 11.0597 0.000118692 11.5356V31.7127L0 31.7125ZM12.375 18.498V24.1054C12.375 24.4558 12.6723 24.75 13.0196 24.75H19.9804C20.3425 24.75 20.625 24.4675 20.625 24.1054V18.498C20.625 18.0948 20.2676 17.8534 19.8515 17.8534H17.5312C17.5312 18.5816 17.6989 19.9159 16.5 19.9159C15.301 19.9159 15.4688 18.5816 15.4688 17.8534H13.1485C12.7325 17.8534 12.375 18.0947 12.375 18.498ZM17.1445 27.0702V32.162C17.1445 32.5855 17.3698 32.9988 17.7873 32.9999H24.8161C25.2183 32.9988 25.4589 32.6419 25.4589 32.2264V26.8123C25.4589 26.4357 25.1264 26.1032 24.7498 26.1032H22.3006C22.3006 26.7648 22.4059 27.4737 22.0559 27.8566C21.4959 28.4693 20.3025 28.1354 20.3025 27.1344V26.1032H17.8533C17.3559 26.1032 17.1444 26.5698 17.1444 27.07L17.1445 27.0702ZM7.54099 26.8124V32.2265C7.54099 32.6419 7.78158 32.9989 8.18383 33H15.2125C15.6301 32.9989 15.8554 32.5855 15.8554 32.1621V27.0704C15.8554 26.5701 15.644 26.1036 15.1464 26.1036H12.6972C12.6972 26.9553 12.888 28.1661 11.6016 28.1661C11.2559 28.1661 10.6993 27.8143 10.6993 27.1994V26.1037H8.25006C7.87345 26.1037 7.54099 26.4362 7.54099 26.8128V26.8124Z" fill="#3F77A5"/></svg>'
      ),
    className: 'light-blue',
    position: [3, 4],
    bgColor: '#BECEDC',
    textColor: 'black',
    dashColor: '#3F77A5',
    image: "./assets/WarehousingLogisticIndustry.png"
  },
]

export default function IndustryGrid() {
  const [isDesktop, setIsDesktop] = useState(true)
  const [columns, setColumns] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsDesktop(width >= 768)
      if (width >= 992) {
        setColumns(4)
      } else if (width >= 768) {
        setColumns(3)
      } else {
        setColumns(2)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Create a grid layout based on the industry data
  const renderIndustryCards = () => {
    // Create a 4x4 grid (rows x columns) to place cards
    const grid = Array(4)
      .fill()
      .map(() => Array(5).fill(null))

    // Place each industry in its position
    industriesData.forEach((industry) => {
      const [row, col] = industry.position

      // Check if the number of columns is less than 4 and skip null/no image cards
      if (columns < 4 && !industry.name) {
        return
      }

      if (row >= 1 && row <= 3 && col >= 1 && col <= 4) {
        grid[row][col] = industry
      }
    })

    // Render the grid
    return (
      <Grid
        templateColumns={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        gap={{ base: '10px', md: '15px' }}
        mt="3%"
      >
        {grid.slice(1).flatMap((row, rowIndex) =>
          row.slice(1).map((industry, colIndex) => {
            if (!industry) return null

            return (
              <GridItem
                key={`${rowIndex}-${colIndex}`}
                colSpan={{
                  base: 1,
                  md: industry.isWide ? 2 : 1,
                }}
                rowSpan={1}
                sx={{
                  perspective: "1000px", // Adjust the depth effect
                }}
              >
                <Box
                  width={{
                    base: "100%",
                    md: "100%",
                    lg: industry.isWide ? "640px" : "100%",
                  }}
                  height={{ base: "200px", md: "320px" }}
                  borderRadius="24px"
                  position="relative"
                  style={{
                    transformStyle: "preserve-3d", // Ensure 3D depth is preserved
                    transition: "transform 0.6s ease-in-out",
                  }}
                  _hover={{
                    transform: "rotateY(180deg)", // Flip the card
                  }}
                >
                  {/* Flip Container */}
                  <Box
                    position="absolute"
                    width="100%"
                    height="100%"
                    borderRadius="24px"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Front Side */}
                    <Box
                      position="absolute"
                      width="100%"
                      height="100%"
                      backgroundColor={industry.bgColor}
                      color={industry.textColor}
                      borderRadius="24px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-end"
                      alignItems="flex-start"
                      padding={{ base: "10px", md: "20px" }}
                      style={{
                        transform: "rotateY(0deg)",
                        backfaceVisibility: "hidden", // Ensures it hides when flipped
                      }}
                    >
                      {/* Industry Icon */}
                      {industry.img && (
                        <Box
                          dangerouslySetInnerHTML={{
                            __html: decodeURIComponent(
                              industry.img.split("data:image/svg+xml;charset=utf-8,")[1]
                            ),
                          }}
                          position="absolute"
                          bottom="60px"
                          left="20px"
                          width="33px"
                          height="33px"
                        />
                      )}
                      {/* Industry Name & Line */}
                      <Text
                        fontSize="16px"
                        fontWeight="600"
                        position="absolute"
                        bottom="20px"
                        left="20px"
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        maxWidth="90%"
                      >
                        {industry.name}
                        <Box
                          width="18px"
                          height="3px"
                          borderRadius="2px"
                          marginTop="5px"
                          backgroundColor={industry.dashColor}
                        />
                      </Text>
                    </Box>

                    {/* Back Side */}
                    <Box
                      position="absolute"
                      width="100%"
                      height="100%"
                      borderRadius="24px"
                      padding="20px"
                      // bgImage={industry.image}
                      bgImage={`${process.env.PUBLIC_URL}${industry.image}`}
                      bgSize="cover"
                      bgPosition="center"

                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      textAlign="center"
                      style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden", // Ensures front side is not visible
                      }}
                    >
                    </Box>
                  </Box>
                </Box>
              </GridItem>

            )
          })
        )}
      </Grid>
    )
  }

  return (
    <>
      <Box
        textAlign="center"
        backgroundColor="#E7E7E7"
        maxWidth="100%"
        minHeight={{ base: 'auto', md: '1338px' }}
        position="relative"
        mx="auto"
        pb={{ base: '50px', md: '0' }}
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: '15%',
          left: '5%',
          width: '100%',
          height: '100%',
          backgroundImage: `./assets/image7.png`,
          backgroundPosition: 'left top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '1138px',
          opacity: '1',
          zIndex: '0',
        }}
      >
        {/* We can add some creativity here also. */}
        <HeadingAnimation>
          <Text
            fontSize={useBreakpointValue({
              base: '24px',
              sm: '32px',
              md: '40px',
              lg: '48px',
            })}
            fontWeight="600"
            marginBottom="10px"
            padding="0"
            lineHeight="normal"
            textAlign="center"
            position="relative"
            zIndex="2"
          >
            Crafting Unique{' '}
            <Text as="span" color="#db7b3a">
              AI
            </Text>{' '}
            Solutions for {<br />}
            <Text as="span" color="#3f77a5">
              Every Industry
            </Text>
            <Text as="span" color="#db7b3a">
              .
            </Text>
          </Text>
        </HeadingAnimation>
        {/* Industry Grid */}
        {renderIndustryCards()}

        {/* Bottom elements */}

        {/* Bottom elements */}
        <Flex
          justifyContent="flex-end" // Align to the right
          alignItems="center" // Vertically center
          mx="auto" // Center the container horizontally
          mt="5%" // Margin top
          position="relative" // Use relative positioning
          zIndex="2" // Ensure it's above other elements
        >
          {/* Line */}
          <Box
            width="466px" // Fixed width for the line
            height="1px"
            backgroundColor="#3f77a5"
            flexShrink={0} // Prevent the line from shrinking
            marginRight="10px" // Space between line and button
          />

          {/* Button */}
          <Button
            height={{ base: '40px', md: '50px' }} // Responsive height
            minWidth="146px" // Minimum width to fit content
            backgroundColor="white"
            color="#3F77A5"
            fontSize="14px"
            fontWeight="600"
            borderRadius="20px"
            as={Link}
            to="/industries"
            display="flex"
            alignItems="center"
            justifyContent="center"
            p="8px 16px" // Padding for better spacing
            gap="8px" // Space between text and icon
            zIndex="2"
            _hover={{ backgroundColor: '#f0f0f0' }}
          >
            All Industries
            <svg
              style={{
                width: '1em',
                height: '1em',
                minWidth: '14px',
                minHeight: '14px',
                flexShrink: 0, // Prevent the icon from shrinking
              }}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 2C17.5 1.17157 16.8284 0.499999 16 0.499999L2.5 0.5C1.67157 0.5 0.999999 1.17157 1 2C1 2.82843 1.67157 3.5 2.5 3.5L14.5 3.5L14.5 15.5C14.5 16.3284 15.1716 17 16 17C16.8284 17 17.5 16.3284 17.5 15.5L17.5 2ZM3.06066 17.0607L17.0607 3.06066L14.9393 0.939339L0.93934 14.9393L3.06066 17.0607Z"
                fill="#3F77A5"
              />
            </svg>
          </Button>
        </Flex>
      </Box>
    </>
  )
}
