import React, { useState } from "react";
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import HeadingAnimation from "./Animation/Text/HeadingAnimation";

const AdvancedSurveillance = () => {
  const [activeCard, setActiveCard] = useState(0);

  // Data for the component
  const title1 = "Advanced Surveillance for All.";
  const subtitle = "Enterprise";
  const description =
    "Explore innovative, scalable solutions designed to meet the urban security and operational needs of enterprises.";

  const cards = [
    {
      type: "open",
      label: "Enterprise",
      description:
        "Explore innovative, scalable solutions designed to meet the urban security and operational needs of enterprises.",
      image: "./assets/rectangle1.svg",
    },
    {
      type: "squeezed",
      label: "Government",
      description: "Explore innovative, scalable solutions designed to meet the urban security and operational needs of enterprises.",
      image: "./assets/govsl.svg",
    },
    {
      type: "squeezed",
      label: "Consumers",
      description: "Explore innovative, scalable solutions designed to meet the urban security and operational needs of enterprises.",
      image: "./assets/gensl.svg",
    },
  ];

  // Handle navigation
  const handleNavigation = (direction) => {
    setActiveCard((prev) =>
      direction === "left"
        ? prev === 0
          ? cards.length - 1
          : prev - 1
        : prev === cards.length - 1
          ? 0
          : prev + 1
    );
  };

  return (
    <>
      <Flex
        backgroundColor="#E7E7E7"
        height="758px"
        h="auto"
        fontWeight="600"
        display="flex"
        justifyContent="center"
        alignItems="center"
        minH="auto"
      // bg="red"
      >
        {/* White Box */}
        <Box
          width="100%"
          height="758px"
          h="auto"
          borderRadius="20px"
          bgColor="white"
          position="relative"
          overflow="hidden"
        // minH="auto"
        // mb="2%"
        >
          {/* Title Section */}
          <Box
            marginRight={{ md: "70px" }}
            marginTop={{ base: "5%", md: "55px" }}
            ml={{ base: "5%" }}
            // width={{ base: "70%" , md:"100%"}}
            position="relative"
            zIndex="2"
            display="flex"
            justifyContent={{ md: "flex-end" }} // Right-align the text
          >
            <HeadingAnimation>
              <Text
                fontSize={{ base: "20px", md: "36px" }}
                fontWeight={{ base: "500", md: "600" }}
                letterSpacing="-0.54px"
                color="black"
              >
                Advanced{" "}
                <Text as="span" color="#3F77A5">
                  Surveillance for All.
                </Text>
              </Text>
            </HeadingAnimation>
          </Box>

          {/* Ellipses */}
          <Box
            position="absolute"
            top="-100px"
            left="980px"
            opacity="1"
            zIndex="2"
          >
            <Box
              width="408px"
              height="408px"
              flexShrink={0}
              borderRadius="408px"
              border="1px solid #000"
              opacity="0.12"
              background="#3F77A5"
              filter="blur(56.6px)"
            />
          </Box>
          {/* <Box
            position="absolute"
            top="336px"
            left="70px"
            opacity="1"
            zIndex="2"
          >
            <Image
              // src='./assets/Ellipse36.svg'
              alt="Ellipse 36"
              width="408px"
              height="408px"
            />
          </Box> */}
          {/* Ellipses */}
          {/* <Box
            position="absolute"
            top="37px"
            left="933px"
            opacity="1"
            zIndex="2"
          >
            <Image
              src="./assets/Ellipse33.svg"
              alt="Ellipse 33"
              width="408px"
              height="408px"
              bg="blue"
            />
          </Box> */}
          <Box
            position="absolute"
            top={{ base: "300px", md: "400px", lg: "450px" }}
            left={{ base: "50%", md: "40%", lg: "50px" }}
            transform={{ base: "translateX(-50%)", md: "translateX(-50%)", lg: "none" }}
            width={{ base: "255px", md: "320px", lg: "408px" }}
            height={{ base: "255px", md: "320px", lg: "408px" }}
            borderRadius="408px"
            bg="#3F77A5"
            opacity="0.12"
            filter="blur(56.6px)"
            flexShrink={0}
            zIndex="2"
            pointerEvents="none"
          />

          {/* Cards Section */}
          <Flex
            marginTop={{ base: "10px", md: "70px" }}
            marginLeft={{ base: "10px", md: "70px" }} // Smaller margin on mobile
            marginRight={{ base: "10px", md: "70px" }}
            gap="15px"
            position="relative"
            zIndex="2"
            direction={{ base: "column", md: "row" }} // Column for mobile, row for desktop
            overflow={"visible"} // Hide overflow to prevent scrollbars
            minH="auto"
            mb={{ base: "3%", md: "10%" }}
          >
            {/* Navigation Buttons */}
            <Flex
              position="absolute"
              top="-50px" // Move buttons above the cards
              right="0" // Align buttons to the right
              gap="2px"
              zIndex="2"
              display={{ base: "none", md: "flex" }} // Hide on mobile
            >
              <Button
                width="31px"
                height="31px"
                minWidth="31px"
                minHeight="31px"
                padding="0"
                borderRadius="5px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                bgColor="#E7E7E7"
                _hover={{ bgColor: "#e0e0e0" }}
                onClick={() => handleNavigation("left")}
              >
                <svg
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.076934 7.76919L7.46155 15.1538L7.46155 0.38458L0.076934 7.76919Z"
                    fill="#3F77A5"
                  />
                </svg>
              </Button>
              <Button
                width="31px"
                height="31px"
                minWidth="31px"
                minHeight="31px"
                padding="0"
                borderRadius="5px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                bgColor="#E7E7E7"
                _hover={{ bgColor: "#e0e0e0" }}
                onClick={() => handleNavigation("right")}
              >
                <svg
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.92307 7.99997L0.538452 0.615356L0.53845 15.3846L7.92307 7.99997Z"
                    fill="#3F77A5"
                  />
                </svg>
              </Button>
            </Flex>

            {cards.map((card, index) => (
              <Box
                key={index}
                width={{
                  base: "100%",
                  md: activeCard === index ? "80%" : "20%",
                }} // Full width on mobile
                height={{
                  base: activeCard === index ? "auto" : "80px",
                  md: "439px",
                }} // Compact height for inactive cards on mobile
                borderRadius="24px"
                bgColor="#E7E7E7"
                _hover={{ cursor: "pointer" }}
                transition="width 0.3s ease"
                position="relative"
                onClick={() => setActiveCard(index)}
                mb={{ base: "5px", md: "0" }} // Add margin between stacked cards on mobile
                word-wrap="break-word"
                overflow-wrap="break-word"
              >
                {activeCard === index ? (
                  // Expanded Card Content
                  <Flex
                    direction={{ base: "column", md: "row" }}
                    word-wrap="break-word"
                    overflow-wrap="break-word"
                  >
                    {/* Left Frame (Description) */}
                    <Box
                      width={{ base: "100%", md: "272px" }}
                      height={{ base: "auto", md: "439px" }}
                      padding="20px"
                      flexDirection="column"
                      justifyContent={{ base: "flex-end", md: "space-between" }} // Align content to the top
                      display={{ base: "flex", md: "flex" }} // Hide on mobile
                      order={{ base: 1, md: 0 }} // Ensure this is on top in mobile view
                    // bg="red"
                    >
                      <Box>
                        <Text
                          fontSize="16px"
                          fontWeight="700"
                          letterSpacing="-0.24px"
                          color="black"
                        >
                          {card.label}
                          <Box
                            width="15px"
                            height="2px"
                            bgColor="#3f77a5"
                            borderRadius="2px"
                            marginTop="5px"
                          />
                        </Text>
                        <Text
                          color="#696969"
                          fontSize="14px"
                          fontWeight="600"
                          letterSpacing="-0.21px"
                          marginTop="10px"
                        >
                          {card.description}

                          {card.description}
                        </Text>
                      </Box>
                      <Link to={`/serving/${card.label}`}>
                        <Flex gap={2} mt={{ base: "5%" }}>
                          <Text
                            fontSize={{ base: "14px", md: "14px" }}
                            fontWeight={400}
                          >
                            Know more
                          </Text>
                          <Box>
                            <svg
                              width="22"
                              height="23"
                              viewBox="0 0 22 23"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.9602 12.9601C21.546 12.3743 21.546 11.4245 20.9602 10.8388L11.4143 1.29281C10.8285 0.707026 9.87876 0.707026 9.29297 1.29281C8.70719 1.8786 8.70719 2.82835 9.29297 3.41413L17.7783 11.8994L9.29297 20.3847C8.70719 20.9705 8.70719 21.9202 9.29297 22.506C9.87876 23.0918 10.8285 23.0918 11.4143 22.506L20.9602 12.9601ZM0.100586 13.3994L19.8996 13.3994V10.3994L0.100586 10.3994V13.3994Z"
                                fill="black"
                              />
                            </svg>
                          </Box>
                        </Flex>
                      </Link>
                    </Box>
                    {/* Right Frame (Image) */}
                    <Box
                      width={{ base: "100%", md: "706px" }}
                      height={{ md: "439px" }}
                      borderRadius="24px"
                      border={{ md: 2 }}
                    // bg="green"
                    >
                      <Image
                        // src={card.image}
                        src={`${process.env.PUBLIC_URL}${card.image}`}
                        alt={card.label}
                        width="100%"
                        height="100%"
                        objectFit="cover"
                      />
                    </Box>
                  </Flex>
                ) : (
                  // Squeezed Card - Rotated Text Inside
                  <Box
                    position="absolute"
                    bottom="28%" // Adjust this value to control vertical positioning
                    right={{ base: "auto", md: "10%" }}
                    left={{ base: "5%", md: "auto" }}
                    transform={{ md: "rotate(-90deg)" }} // Rotate the text vertically
                    transformOrigin={{ md: "bottom right" }} // Rotate around the bottom-right corner
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start" // Align dash with the start of the text
                    whiteSpace="nowrap" // Ensure text stays in one line
                  >
                    <Text
                      fontSize="16px"
                      fontWeight="700"
                      letterSpacing="-0.24px"
                      color="black"
                    >
                      {card.label}
                    </Text>
                    <Box
                      width="15px"
                      height="2px"
                      bgColor="#3f77a5"
                      borderRadius="2px"
                      marginTop="5px"
                    />
                  </Box>
                )}
              </Box>
            ))}
          </Flex>

          {/* "Book Demo" Button */}
          <Button
            position="absolute"
            top="653px"
            left="70px"
            height="50px"
            width="146px"
            as={Link}
            to="/contactus"
            backgroundColor="white"
            color="#3F77A5"
            fontSize="16px"
            fontWeight="600"
            borderRadius="12px"
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            justifyContent="center"
            gap="8px"
            zIndex="2"
            _hover={{ backgroundColor: "#f0f0f0" }}
            mb="2%"
          >
            Book Demo
            {/* <Image src="./assets/arrowdb.svg" alt="Arrow" width="14px" height="14px" /> */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 2C17 1.17157 16.3284 0.499999 15.5 0.499999L2 0.5C1.17157 0.5 0.499999 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5L14 3.5L14 15.5C14 16.3284 14.6716 17 15.5 17C16.3284 17 17 16.3284 17 15.5L17 2ZM2.56066 17.0607L16.5607 3.06066L14.4393 0.939339L0.43934 14.9393L2.56066 17.0607Z"
                fill="#3F77A5"
              />
            </svg>
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default AdvancedSurveillance;
