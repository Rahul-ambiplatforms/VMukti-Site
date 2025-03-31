import { Box, Container, Heading, Text, Image, Flex, VStack } from '@chakra-ui/react';
import SolutionEMS from './SolutionEMS';
import TripleImageSection from '../../components/TripleImageSection';
import PageContentWrapper from '../../components/PageContentWrapper';

const Hero = () => {
    return (
        <Box>
            <PageContentWrapper>
            <TripleImageSection />
                <SolutionEMS />
            </PageContentWrapper>
        </Box>

    );
};

export default Hero;