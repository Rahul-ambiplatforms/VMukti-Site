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

function App() {
  // Assuming the Navbar height is 60px
  const navbarHeight = '60px';

  return (
    <ChakraProvider theme={theme}>
      <Router>
        {/* Navbar with transparent background */}
        <Flex
          p={{ base: "10px", md: "20px" }}
          bg={'transparent'}
          position="fixed"
          top={0}
          left={0}
          right={0}
          zIndex={1000}
          height={navbarHeight}
        >
          <Navbar />
        </Flex>

        {/* Page content with padding to account for Navbar height */}
        <Box pt={navbarHeight} bg="#f3f3f3">  {/* Add padding-top equal to Navbar height */}
          <Routes>
            <Route path="/" element={<VMuktiHomepage />} />
            <Route path="/technology" element={<TechnologyDashboard />} />
            <Route path="/solution" element={<SolutionsHome />} />
          </Routes>
        </Box>
      </Router>
      <NewsletterSubscription />
    </ChakraProvider>
  );
}

export default App;