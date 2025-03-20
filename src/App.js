import React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import './css/fonts.css';
import VMuktiHomepage from './pages/Home/VMuktiHomepage';
import theme from './pages/Home/theme';
import TechnologyDashboard from './pages/Technology/TechnologyDashboard';
import Navbar from './components/Navbar';
import NewsletterSubscription from './pages/Home/NewsletterSubscription';

function App() {
  return (
    <ChakraProvider theme={theme} bg={'#F3F3F3'}>
      <Router> {/* Wrap everything in Router */}
        <Flex
          p={{ base: "10px", md: "20px" }}
          bg={'transparent'}
          position="fixed"
          top={0}
          left={0}
          right={0}
          zIndex={1000}
        >
          <Navbar /> {/* Navbar will be visible on all pages */}
        </Flex>
        <Routes> {/* Define your routes here */}
          <Route path="/" element={<VMuktiHomepage />} /> {/* Homepage */}
          <Route path="/technology" element={<TechnologyDashboard />} /> {/* Technology Dashboard */}
        </Routes>
      </Router>
      <NewsletterSubscription />
    </ChakraProvider>
  );
}

export default App;