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
import IndustryDetails from './pages/IndustriesDashboard/industryDetails';
import WhoWeare from './pages/Who/WhoDash';
import EventSpotlight from './pages/EventSpotlight/EventDashboard';
import OurServings from './pages/OurServings/OurServings';
import ServingsDock from './pages/OurServings/ServingsDock';
import ScrollToTop from './components/ScrollToTop';
import ContactUs from './pages/ContactUs/Contactus';
import VMuktiCareers from './pages/IndustriesDashboard/career/Career';

function App() {
  // Assuming the Navbar height is 60px
  const navbarHeight = '50px';

  return (
    <ChakraProvider theme={theme}>
      <Router>
        {/* Navbar with transparent background */}

        <Navbar />
        <ScrollToTop />
        {/* Page content with padding to account for Navbar height */}
        <Box pt={navbarHeight} bg="#E7E7E7">  {/* Add padding-top equal to Navbar height */}
          <Routes>
            <Route path="/" element={<VMuktiHomepage />} />
            <Route path="/technology" element={<TechnologyDashboard />} />
            <Route path="/solutions" element={<SolutionsHome />} />
            <Route path="/industries" element={<IndustryDashboard />} />
            <Route path="/industries/:name" element={<IndustryDetails />} />
            <Route path="/whoweare" element={<WhoWeare />} />
            <Route path="/whoweare/eventspotlight" element={<EventSpotlight />} />
            <Route path="/whoweare/careers" element={<VMuktiCareers />} />
            <Route path="/serving" element={<OurServings />} />
            <Route path="/serving/:name" element={<ServingsDock />} />
            <Route path="/contactus" element={<ContactUs />} />

          </Routes>
        </Box>
      </Router>
      <NewsletterSubscription />
    </ChakraProvider>
  );
}

export default App;