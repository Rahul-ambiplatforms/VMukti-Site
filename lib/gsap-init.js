'use client';

// Only import and register GSAP plugins in the browser
if (typeof window !== 'undefined') {
  const gsap = require('gsap').default || require('gsap');
  const { ScrollTrigger } = require('gsap/ScrollTrigger');

  gsap.registerPlugin(ScrollTrigger);

  module.exports = { gsap, ScrollTrigger };
} else {
  // Server-side: export dummy objects to prevent import errors
  module.exports = {
    gsap: { to: () => {}, from: () => {}, fromTo: () => {} },
    ScrollTrigger: {}
  };
}
