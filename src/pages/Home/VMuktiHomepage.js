// src/pages/VMuktiHomepage/index.js
import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import PageContentWrapper from "../../components/PageContentWrapper";
import AdvancedComputerVision from "../../components/AdvancedComputerVision";
import VideoAnalytics from "./Components/VideoAnalytics";
import Achieved from "./Components/Achieved";
import Diagram from "./Components/Diagram";
import Industries from "./Components/industriesData";
import AdvancedSurveillance from "../../components/AdvancedSurveillance";
import SurveillanceSoftware from "./Components/SurveillanceSoftware";
import ObjectDescription from "../../components/ObjectDescription";
import StickySection from "./Data/StickySection";
import HeroSection from "./Components/HeroSection";
import { customData, customData1 } from "./Data/customData";

const VMuktiHomepage = () => {

    return (
        <PageContentWrapper>
            <HeroSection />
            <Box bg="#E7E7E7"  >
                {/* Page Content Sections */}
                <AdvancedComputerVision {...customData1} />
                <Flex mt={"5%"} direction="column">
                    <ObjectDescription
                        description={`Catch Everything,\n Miss Nothing`}
                        image="../assets/objectdetection.png"
                        list={["Precision Tracking", "Automated Alerts", "AI-Powered Recognition", "Adaptive Learning"]}
                    />
                </Flex>
                <Box mt="5%"><SurveillanceSoftware /></Box>
                <StickySection>
                    <AdvancedComputerVision {...customData} />
                    <VideoAnalytics />
                    <AdvancedComputerVision />
                </StickySection>
                <Diagram />
                <Industries />
                <AdvancedSurveillance />
                <Achieved />
            </Box>
        </PageContentWrapper>
    );
};

export default VMuktiHomepage;