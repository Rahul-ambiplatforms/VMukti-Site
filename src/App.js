import React, { Suspense, lazy } from "react";
import { ChakraProvider, Box, Spinner, Center } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/scrollbar.css";
import theme from "./components/theme";
import Navbar from "./components/Navbar";
import NewsletterSubscription from "./components/NewsletterSubscription";
import ScrollToTop from "./components/ScrollToTop";
import SEORouter from "./components/SEO/SEORouter";
import SEOIntegration from "./components/SEO/SEOIntegration";
import SEOContent from "./components/Content/SEOContent";
import ErrorBoundary from "./components/ErrorBoundary";
import PageContentWrapper from "./components/PageContentWrapper";
import AmbicamLandingPage from "./pages/Ambicam/AmbicamLandingPage";
import BlogsDashboard from "./pages/Blogs/BlogsDashboard";
import BlogsContents from "./pages/Blogs/BlogsContents";
import CustomCursor from "./components/CustomCursor";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SolutionDetails from "./components/SolutionDetails";
import Thankyou from "./pages/ThankYou/Thankyou";
import ThankyouDemo from "./pages/ThankYou/ThankyouDemo";
import PrivacyPolicy from "./pages/Who/components/PrivacyPolicy";
import TermsAndCondition from "./pages/Who/components/TermsAndCondition";
import CareerHome from "./pages/career/CareerHome";
import Thankyoucareer from "./pages/ThankYou/Thankyoucareer";
// Import VoiceAssistant
import VoiceAssistant from "./components/VoiceAssistant";
// import Particles from '@tsparticles/react';
// import ParticlesComponent from './components/Particles';
// Lazy load components
const VMuktiHomepage = lazy(() => import("./pages/Home/VMuktiHomepage"));
const VMuktiHomepageUS = lazy(() => import("./pages/Home_US/VMuktiHomepageUS"));
const VMuktiHomepageUK = lazy(() => import("./pages/Home_UK/VMuktiHomepageUK"));
const TechnologyDashboard = lazy(() =>
  import("./pages/Technology/TechnologyDashboard")
);
const SolutionsHome = lazy(() => import("./pages/Solutions/SolutionsHome"));
const IndustryDashboard = lazy(() =>
  import("./pages/IndustriesDashboard/industriesDashboard")
);
const IndustryDetails = lazy(() => import("./components/industryDetails"));
const WhoWeare = lazy(() => import("./pages/Who/WhoDash"));
const EventSpotlight = lazy(() =>
  import("./pages/EventSpotlight/EventDashboard")
);
const OurServings = lazy(() => import("./pages/OurServings/OurServings"));
const ServingsDock = lazy(() => import("./pages/OurServings/ServingsDock"));
const ContactUs = lazy(() => import("./pages/ContactUs/Contactus"));
const VMuktiCareers = lazy(() => import("./pages/career/Career"));
const BookDemo = lazy(() => import("./pages/BookDemo/BookDemo"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const SEOLandingPage = lazy(() => import("./pages/SEOLandingPages/SEOLandingPage"));

// Loading component
const LoadingSpinner = () => (
  <Center h="100vh">
    <Spinner size="xl" color="blue.500" />
  </Center>
);

function App() {
  return (
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        {/* <CustomCursor /> */}
        <Router>
          <ErrorBoundary>
            <Navbar />
            <ScrollToTop />
            <SEORouter />
                  <SEOIntegration />
            <Box pt={{ base: "20%", sm: "20%", md: "100px" }} bg="#E7E7E7">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<VMuktiHomepage />} />
                  <Route path="/usa/video-surveillance-solutions" element={<VMuktiHomepageUS />} />
                  <Route path="/uk/video-surveillance-solutions" element={<VMuktiHomepageUK />} />
                  {/* <Route path="/technology" element={<TechnologyDashboard />} /> */}
                  <Route path="/solution" element={<SolutionsHome />} />
                  <Route path="/solution/:name" element={<SolutionDetails />} />
                  <Route path="/industry" element={<IndustryDashboard />} />
                  <Route path="/industry/:name" element={<IndustryDetails />} />
                  <Route path="/about-us" element={<WhoWeare />} />
                  {/* <Route
                    path="/whoweare/eventspotlight"
                    element={<EventSpotlight />}
                  /> */}
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route
                    path="/terms-and-conditions"
                    element={<TermsAndCondition />}
                  />
                  {/* <Route path="/careers" element={<VMuktiCareers />} /> */}
                  <Route path="/careers" element={<CareerHome />} />
                  <Route path="/blog" element={<BlogsDashboard />} />
                  <Route path="/blog/:urlWords" element={<BlogsContents />} />
                  {/* <Route path="/serving" element={<OurServings />} /> */}
                  {/* <Route path="/serving/:name" element={<ServingsDock />} /> */}
                  <Route path="/book-a-demo" element={<BookDemo />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                  <Route path="/Ambicam" element={<AmbicamLandingPage />} />
                  <Route path="/thank-you" element={<Thankyou />} />
                  <Route path="/thank-you-us" element={<Thankyou />} />
                  <Route path="/thank-you-uk" element={<Thankyou />} />
                  <Route path="/demo-thank-you" element={<ThankyouDemo />} />
                  <Route path="/blog-thank-you" element={<Thankyou />} />
                  <Route
                    path="/careers-thank-you"
                    element={<Thankyoucareer />}
                  />
                  {/* SEO Landing Pages - 114 pages with flexible routing */}
                  <Route path="/technology/:pageSlug" element={<Suspense fallback={<div>Loading...</div>}><SEOLandingPage /></Suspense>} />
                  <Route path="/solutions/:pageSlug" element={<Suspense fallback={<div>Loading...</div>}><SEOLandingPage /></Suspense>} />
                  <Route path="/compare/:pageSlug" element={<Suspense fallback={<div>Loading...</div>}><SEOLandingPage /></Suspense>} />
                  <Route path="/resources/:pageSlug" element={<Suspense fallback={<div>Loading...</div>}><SEOLandingPage /></Suspense>} />
                  <Route path="/industry/:pageSlug" element={<Suspense fallback={<div>Loading...</div>}><SEOLandingPage /></Suspense>} />
                  <Route path="/:category/:pageSlug" element={<Suspense fallback={<div>Loading...</div>}><SEOLandingPage /></Suspense>} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
              <SEOContent />
            </Box>
          </ErrorBoundary>
          <PageContentWrapper>
            <NewsletterSubscription />
          </PageContentWrapper>
          {/* <VoiceAssistant /> */}
        </Router>
      </ChakraProvider>
    </HelmetProvider>
  );
}

export default React.memo(App);

