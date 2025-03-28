import { Box, Container, Heading, Text, Image, Flex, VStack } from '@chakra-ui/react';
import SolutionEMS from './SolutionEMS';
import TripleImageSection from '../../components/TripleImageSection';

const Hero = () => {
    return (
        <Box>
            <TripleImageSection />
            <SolutionEMS />
        </Box>

    );
};

export default Hero;