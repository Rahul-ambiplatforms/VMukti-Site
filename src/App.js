import React, { Suspense, lazy } from 'react';
import { ChakraProvider, Box, Spinner, Center } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/fonts.css';
import './css/scrollbar.css';
import theme from './components/theme';
import Navbar from './components/Navbar';
import NewsletterSubscription from './components/NewsletterSubscription';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import PageContentWrapper from './components/PageContentWrapper';
// Lazy load components
const VMuktiHomepage = lazy(() => import('./pages/Home/VMuktiHomepage'));
const TechnologyDashboard = lazy(() => import('./pages/Technology/TechnologyDashboard'));
const SolutionsHome = lazy(() => import('./pages/Solutions/SolutionsHome'));
const IndustryDashboard = lazy(() => import('./pages/IndustriesDashboard/industriesDashboard'));
const IndustryDetails = lazy(() => import('./components/industryDetails'));
const WhoWeare = lazy(() => import('./pages/Who/WhoDash'));
const EventSpotlight = lazy(() => import('./pages/EventSpotlight/EventDashboard'));
const OurServings = lazy(() => import('./pages/OurServings/OurServings'));
const ServingsDock = lazy(() => import('./pages/OurServings/ServingsDock'));
const ContactUs = lazy(() => import('./pages/ContactUs/Contactus'));
const VMuktiCareers = lazy(() => import('./pages/career/Career'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

// Loading component
const LoadingSpinner = () => (
  <Center h="100vh">
    <Spinner size="xl" color="blue.500" />
  </Center>
);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <ErrorBoundary>
          <Navbar />
          <ScrollToTop />
            <Box pt={{ base: "20%", sm: "20%", md: "100px" }} bg="#E7E7E7">
            <Suspense fallback={<LoadingSpinner />}>
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
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Box>
        </ErrorBoundary>
      </Router>
      <PageContentWrapper>
        <NewsletterSubscription />
      </PageContentWrapper>
    </ChakraProvider>
  );
}

export default React.memo(App);