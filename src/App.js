import React from 'react';
import { ChakraProvider, Flex, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/fonts.css';
import './css/scrollbar.css';
import VMuktiHomepage from './pages/Home/VMuktiHomepage';
import theme from './pages/Home/theme';
import TechnologyDashboard from './pages/Technology/TechnologyDashboard';
import Navbar from './components/Navbar';
import NewsletterSubscription from './pages/Home/NewsletterSubscription';
import SolutionsHome from './pages/Solutions/SolutionsHome';
import IndustryDashboard from './pages/IndustriesDashboard/industriesDashboard'
import PageContentWrapper from './components/PageContentWrapper';

function App() {
  // Assuming the Navbar height is 60px
  const navbarHeight = '50px';

  return (
    <ChakraProvider theme={theme}>
      <Router>
        {/* Navbar with transparent background */}
        <Flex
          my="2%"
          bg={'transparent'}
          position="fixed"
          top={0}
          left={0}
          right={0}
          zIndex={1000}
          height={navbarHeight}
          width="100%" // Added this
        >
          <PageContentWrapper>
            <Navbar />
          </PageContentWrapper>
        </Flex>

        {/* Page content with padding to account for Navbar height */}
        <Box pt={navbarHeight} bg="#f3f3f3">  {/* Add padding-top equal to Navbar height */}
          <Routes>
            <Route path="/" element={<VMuktiHomepage />} />
            <Route path="/technology" element={<TechnologyDashboard />} />
            <Route path="/solution" element={<SolutionsHome />} />
            <Route path="/industries" element={<IndustryDashboard />} />
          </Routes>
        </Box>
      </Router>
      <NewsletterSubscription />
    </ChakraProvider>
  );
}

export default App;