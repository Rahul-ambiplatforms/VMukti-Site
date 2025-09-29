import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Avatar,
  VStack,
  HStack,
  IconButton,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Import slick-carousel styles (these are necessary)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// --- DATA: Array of testimonial objects (No changes here) ---
const testimonials = [
  {
    description:
      "VMukti Solutions provided webcasting services for our 1st Convocation Ceremony at IIT Mandi. The audio and video quality were excellent, and the entire execution was seamless. Their technology and service delivery were flawless and met the high standards expected at IIT Mandi.",
    name: "Dr. Varun Dutt",
    company: "IIT Mandi",
    image: "/assets/client_1.png",
  },
  {
    description:
      "VMukti Solutions successfully managed the webcasting of the 2nd Convocation of IIT Patna, held in the august presence of the President of India, Sri Pranab Mukherjee. Their technology and execution were up-to-date and highly satisfactory, ensuring seamless coverage of this prestigious event.",
    name: "Dr. Prolay Das",
    company: "IIT Patna",
    image: "/assets/client_1.png",
  },
  {
    description:
      "We thank VMukti Solutions for providing excellent webcasting services for our student activity ‘Milaap’. Their support and technology were impressive, and the performance of their portal exceeded our expectations, making the entire experience seamless and professional.",
    name: "Trusha Joshi",
    company: "IRMA, Anand",
    image: "/assets/client_1.png",
  },
  {
    description:
      "Vmukti Solutions provided webcasting services for our Workshop on Technology Enhanced Learning (TEL). The audio and video quality were excellent, and the entire execution was seamless. Their technology and service were flawless and met all our expectations.",
    name: "Dr. S. Mohankumar",
    company: "SDM Engineering College",
    image: "/assets/client_1.png",
  },
  {
    description:
      "Vmukti Solutions provided webcasting services for the 5th Convocation ceremony at NIT Agartala. The audio and video quality were excellent, and the entire execution was seamless. Their technology and service were flawless, meeting the highest standards of excellence.",
    name: "Kamal Kanti Paul",
    company: "NIT, Agartala",
    image: "/assets/client_1.png",
  },
  {
    description:
      "VMukti Solutions successfully carried out the live webcasting of the Convocation event at Ganpat University through their SoLite Video Delivery Platform. The event was viewed by audiences worldwide. The VMukti team demonstrated excellent expertise and experience in managing live webcasts, delivering high-quality and seamless services.",
    name: "P. I. Patel",
    company: "Ganpat University, Mehsana",
    image: "/assets/client_1.png",
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <VStack
      display="flex"
      flexDirection="column"
      bg="white"
      borderRadius="24px"
      p={{ base: 8, md: 6 }}
      mr={{ base: 2, md: 4 }}
      align="flex-start"
      spacing={5}
      height="100%"
      // w="280px"
    >
      <svg
        width="46"
        height="37"
        viewBox="0 0 46 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.264 0.616211H21.248C18.688 3.68821 16.5973 7.05888 14.976 10.7282C13.44 14.3975 12.7573 17.5122 12.928 20.0722L10.24 16.8722C13.1413 16.8722 15.5733 17.8535 17.536 19.8162C19.584 21.6935 20.608 23.9975 20.608 26.7282C20.608 29.5442 19.6693 31.9335 17.792 33.8962C15.9147 35.8589 13.5253 36.8402 10.624 36.8402C7.46667 36.8402 4.90667 35.7309 2.944 33.5122C0.981333 31.2935 0 28.4349 0 24.9362C0 22.4615 0.512 19.7735 1.536 16.8722C2.64533 13.8855 4.01067 10.9842 5.632 8.16821C7.33867 5.26688 9.216 2.74954 11.264 0.616211ZM35.328 0.616211H45.312C42.752 3.68821 40.6613 7.05888 39.04 10.7282C37.504 14.3975 36.8213 17.5122 36.992 20.0722L34.304 16.8722C37.2053 16.8722 39.6373 17.8535 41.6 19.8162C43.648 21.6935 44.672 23.9975 44.672 26.7282C44.672 29.5442 43.7333 31.9335 41.856 33.8962C39.9787 35.8589 37.5893 36.8402 34.688 36.8402C31.5307 36.8402 28.9707 35.7309 27.008 33.5122C25.0453 31.2935 24.064 28.4349 24.064 24.9362C24.064 22.4615 24.576 19.7735 25.6 16.8722C26.7093 13.8855 28.0747 10.9842 29.696 8.16821C31.4027 5.26688 33.28 2.74954 35.328 0.616211Z"
          fill="#3F77A5"
        />
      </svg>

      <Text
        as="p"
        color="#444"
        fontSize={{ base: "14px", md: "16px" }}
        lineHeight={{ base: "18px", md: "20px" }}
        flex="1"
      >
        {" "}
        {testimonial.description}
      </Text>
      <HStack>
        <Flex justifyContent="center" alignItems="center">
          <Box w="64px" h="64px" color="red" borderRadius="8px">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              w="100%"
              h="100%"
              objectFit="cover"
              borderRadius="8px"
            />
          </Box>
          <VStack align="start" spacing={0} ml={{ base: "4", md: "1" }}>
            <Text fontWeight="700" fontSize="16px" color="black">
              {testimonial.name}
            </Text>
            <Text fontSize="14px" fontWeight="500" color="#444">
              {testimonial.company}
            </Text>
          </VStack>
        </Flex>
      </HStack>
    </VStack>
  );
};

const Reviews = () => {
  const sliderRef = React.useRef(null);
  const slides_to_show = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slides_to_show,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box my="3%">
      <Flex
        align={["left", "left", "left", "center"]}
        direction={{ base: "column", lg: "row" }}
      >
        {/* Left Side: Testimonials Slider */}
        <Box mt="2%" display={["block", "block", "block", "none"]}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.0367 33C31.6935 32.9989 33.0357 31.6548 33.0346 29.9979L33.0159 2.99793C33.0148 1.34108 31.6707 -0.00113821 30.0138 7.15256e-06C28.357 0.00115204 27.0148 1.34523 27.0159 3.00208L27.0325 27.0021L3.03251 27.0187C1.37566 27.0198 0.0334406 28.3639 0.0345855 30.0207C0.0357304 31.6776 1.3798 33.0198 3.03666 33.0187L30.0367 33ZM5 5L2.88015 7.12279L27.9147 32.1228L30.0346 30L32.1544 27.8772L7.11985 2.87721L5 5Z"
              fill="#3F77A5"
            />
          </svg>
        </Box>
        <Heading
          as="h2"
          fontSize="16px"
          fontWeight="600"
          lineHeight="45px"
          display={["block", "block", "block", "none"]}
          mb="4%"
        >
          <Text as="span" color="#DB7B3A">
            Experiences
          </Text>{" "}
          from Our
          {/* <br /> */} Clients
        </Heading>
        <Box
          w={{ base: "100%", lg: "70%" }}
          position="relative"
          // bg="blue"
        >
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              // The parent Box for each slide needs consistent padding
              <Box key={index} h="480px">
                <TestimonialCard testimonial={testimonial} />
              </Box>
            ))}
          </Slider>
        </Box>

        {/* Right Side: Title and Navigation */}
        <Flex
          // w={{ base: "100%", md: "35%", lg: "35%" }}
          w={["100%", "100%", "100%", "35%"]}
          align={["flex-end", "flex-end", "flex-end", "flex-start"]}
          justifyContent="space-between"
          spacing={4}
          direction="column"
          mt={["0%", "0%", "0%", "14%"]}
        >
          <Box mb="2%" display={["none", "none", "none", "block"]}>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.0367 33C31.6935 32.9989 33.0357 31.6548 33.0346 29.9979L33.0159 2.99793C33.0148 1.34108 31.6707 -0.00113821 30.0138 7.15256e-06C28.357 0.00115204 27.0148 1.34523 27.0159 3.00208L27.0325 27.0021L3.03251 27.0187C1.37566 27.0198 0.0334406 28.3639 0.0345855 30.0207C0.0357304 31.6776 1.3798 33.0198 3.03666 33.0187L30.0367 33ZM5 5L2.88015 7.12279L27.9147 32.1228L30.0346 30L32.1544 27.8772L7.11985 2.87721L5 5Z"
                fill="#3F77A5"
              />
            </svg>
          </Box>
          <Heading
            as="h2"
            fontSize="36px"
            fontWeight="600"
            lineHeight="45px"
            display={["none", "none", "none", "block"]}
          >
            <Text as="span" color="#DB7B3A">
              Experiences
            </Text>{" "}
            from Our
            <br />
            Clients
          </Heading>

          <Flex gap="2" mt={["5%", "5%", "5%", "25%"]}>
            {/* Previous Button */}
            <IconButton
              aria-label="Previous testimonial"
              isRound
              onClick={() => sliderRef?.current?.slickPrev()}
              bg="white"
              color="#3F77A5"
              _hover={{
                bg: "#3F77A5",
                color: "white",
              }}
              icon={
                <svg
                  width="25"
                  height="16"
                  viewBox="0 0 25 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.978953 7.29289C0.588428 7.68342 0.588429 8.31658 0.978953 8.7071L7.34291 15.0711C7.73344 15.4616 8.3666 15.4616 8.75713 15.0711C9.14765 14.6805 9.14765 14.0474 8.75713 13.6569L3.10027 8L8.75713 2.34314C9.14765 1.95262 9.14765 1.31946 8.75713 0.928932C8.3666 0.538408 7.73344 0.538407 7.34291 0.928932L0.978953 7.29289ZM24.3135 8L24.3135 7L1.68606 7L1.68606 8L1.68606 9L24.3135 9L24.3135 8Z"
                    // --- 3. The Key Change is Here ---
                    fill="currentColor"
                  />
                </svg>
              }
            />

            {/* Next Button */}
            <IconButton
              aria-label="Next testimonial"
              isRound
              onClick={() => sliderRef?.current?.slickNext()}
              bg="white"
              color="#3F77A5"
              _hover={{
                bg: "#3F77A5",
                color: "white",
              }}
              icon={
                // --- The SVG is now INSIDE the icon prop ---
                <svg
                  width="25"
                  height="16"
                  viewBox="0 0 25 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.021 8.70711C24.4116 8.31658 24.4116 7.68342 24.021 7.29289L17.6571 0.928932C17.2666 0.538408 16.6334 0.538407 16.2429 0.928932C15.8523 1.31946 15.8523 1.95262 16.2429 2.34315L21.8997 8L16.2429 13.6569C15.8523 14.0474 15.8523 14.6805 16.2429 15.0711C16.6334 15.4616 17.2666 15.4616 17.6571 15.0711L24.021 8.70711ZM0.686523 8V9L23.3139 9L23.3139 8L23.3139 7L0.686523 7V8Z"
                    fill="currentColor" // This color works well with the new background
                  />
                </svg>
              }
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Reviews;
