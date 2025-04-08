import { Box, Container, Heading, Text, Image, Flex, VStack } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import SolutionEMS from './SolutionEMS';
import TripleImageSection from '../../components/TripleImageSection';
import PageContentWrapper from '../../components/PageContentWrapper';


const Hero = () => {
    const location = useLocation();

    useEffect(() => {
        // Scroll to the slider section when a specific slide is requested
        if (location.search.includes('slider=')) {
            const sliderSection = document.getElementById('solutions-slider');
            if (sliderSection) {
                sliderSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <PageContentWrapper>
            <TripleImageSection />
            <Box id="solutions-slider"> {/* Add this ID */}
                <SolutionEMS />
            </Box>
        </PageContentWrapper>
    );
};

export default Hero;