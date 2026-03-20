'use client';

import { Box } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import NewsletterSubscription from '../components/NewsletterSubscription';
import PageContentWrapper from '../components/PageContentWrapper';
import Breadcrumbs from '../components/SEO/Breadcrumbs';
import { usePathname } from 'next/navigation';

export default function SiteLayout({ children }) {
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <Box id="main-content" pt={{ base: "20%", sm: "20%", md: "100px" }} bg="#E7E7E7">
        {!isHomepage && (
          <PageContentWrapper>
            <Breadcrumbs />
          </PageContentWrapper>
        )}
        {children}
      </Box>
      <PageContentWrapper>
        <NewsletterSubscription />
      </PageContentWrapper>
    </>
  );
}
