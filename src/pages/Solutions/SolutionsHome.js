import { Box, Container, Heading, Text, Image, Flex, VStack } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import SolutionEMS from './SolutionEMS';
import TripleImageSection from '../../components/TripleImageSection';
import PageContentWrapper from '../../components/PageContentWrapper';

const Hero = () => {
    const location = useLocation();
    const sectionRefs = {
        vms: useRef(null),
        icc: useRef(null),
        opt: useRef(null),
        gav: useRef(null),
        asc: useRef(null),
        fsv: useRef(null),
        lws: useRef(null),
    };

    useEffect(() => {
        if (location.state?.scrollTo && sectionRefs[location.state.scrollTo]) {
            sectionRefs[location.state.scrollTo].current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    return (
        <Box>
            <PageContentWrapper>
                <TripleImageSection />
                <Box ref={sectionRefs.vms}>
                    <SolutionEMS />
                </Box>
            </PageContentWrapper>
        </Box>
    );
};

export default Hero;