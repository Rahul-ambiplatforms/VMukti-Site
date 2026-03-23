'use client';
import { useState } from 'react';
import HeroSection from './components/HeroSection';
import FAQGrid from './components/FAQGrid';
import { kbFaqs } from './components/FAQGrid';
import KBBookDemoSection from './components/KBBookDemoSection';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: kbFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Video Surveillance Knowledge Base | VMukti',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', '.faq-answer'],
  },
  url: 'https://vmukti.com/knowledge-base',
};

const KnowledgeBase = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Speakable Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <HeroSection
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <FAQGrid
        activeCategory={activeCategory}
        searchQuery={searchQuery}
      />

      <KBBookDemoSection />
    </>
  );
};

export default KnowledgeBase;