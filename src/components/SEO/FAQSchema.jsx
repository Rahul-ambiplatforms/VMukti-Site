import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * FAQ Schema Component for VMukti
 * - Generates FAQPage JSON-LD structured data
 * - Enables FAQ rich snippets in Google search results
 * - Increases SERP real estate and click-through rate
 *
 * Usage:
 *   <FAQSchema faqs={[{ question: "What is VMS?", answer: "..." }]} />
 */

// Default VMukti FAQs for main pages
const DEFAULT_FAQS = {
  home: [
    {
      question: 'What is VMukti?',
      answer: 'VMukti is a global enterprise platform offering Video Management System (VMS), Enterprise Management System (EMS), and Integrated Command & Control Center (ICCC) solutions for video surveillance, AI analytics, and centralized security management across industries worldwide.',
    },
    {
      question: 'Which industries does VMukti serve?',
      answer: 'VMukti serves 16+ industries including banking & finance, healthcare, smart cities, retail, manufacturing, education, oil & gas, transportation, government, hospitality, critical infrastructure, construction, agriculture, ports & maritime, and mining.',
    },
    {
      question: 'Does VMukti offer AI-powered video analytics?',
      answer: 'Yes, VMukti provides advanced AI video analytics including face recognition, ANPR/LPR (Automatic Number Plate Recognition), object detection, intrusion detection, crowd management, and behavioral analytics powered by deep learning models.',
    },
    {
      question: 'What regions does VMukti operate in?',
      answer: 'VMukti operates globally with a focus on the Middle East, Africa, Southeast Asia, Latin America, Europe, USA, and UK markets, providing enterprise-grade surveillance and security solutions.',
    },
    {
      question: 'How can I request a demo of VMukti solutions?',
      answer: 'You can request a free demo by visiting our Book a Demo page at vmukti.com/book-a-demo. Our team will schedule a personalized walkthrough of our VMS, EMS, or ICCC platform tailored to your industry needs.',
    },
  ],
  vms: [
    {
      question: 'What is a Video Management System (VMS)?',
      answer: 'A Video Management System (VMS) is software that manages video surveillance cameras, records footage, provides live monitoring, and enables intelligent video analytics. VMukti VMS supports 10,000+ cameras with AI-powered analytics.',
    },
    {
      question: 'How many cameras can VMukti VMS support?',
      answer: 'VMukti VMS is designed for enterprise scale and can manage 10,000+ cameras across multiple locations with centralized monitoring, recording, and AI analytics capabilities.',
    },
  ],
  ems: [
    {
      question: 'What is an Enterprise Management System (EMS)?',
      answer: 'An Enterprise Management System (EMS) is a unified platform that integrates video surveillance, access control, fire alarm, building management, and other security subsystems into a single dashboard for centralized enterprise security management.',
    },
  ],
  iccc: [
    {
      question: 'What is an Integrated Command & Control Center (ICCC)?',
      answer: 'An ICCC is a centralized command center that integrates multiple city/campus systems including CCTV surveillance, traffic management, emergency response, environmental monitoring, and public safety systems into a unified operational platform.',
    },
  ],
};

const FAQSchema = ({ faqs, pageType = 'home' }) => {
  const faqItems = faqs || DEFAULT_FAQS[pageType] || DEFAULT_FAQS.home;

  if (!faqItems || faqItems.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export { DEFAULT_FAQS };
export default FAQSchema;
