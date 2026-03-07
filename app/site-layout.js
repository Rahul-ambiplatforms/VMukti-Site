'use client';

import { Box } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import NewsletterSubscription from '../components/NewsletterSubscription';
import PageContentWrapper from '../components/PageContentWrapper';

export default function SiteLayout({ children }) {
  return (
    <>
      <Navbar />
      <Box pt={{ base: "20%", sm: "20%", md: "100px" }} bg="#E7E7E7">
        {children}
      </Box>
      <PageContentWrapper>
        <NewsletterSubscription />
      </PageContentWrapper>
    </>
  );
}
