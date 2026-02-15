import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * CapabilitiesSchema - VMukti AI Platform Capabilities JSON-LD
 * Based on real deployment use cases (Railway, Smart City, Enterprise)
 * Covers: VMS, EMS, ICCC, Cloud AI, Gen AI, 26+ AI Analytics
 */

// ── VMukti VMS Platform Schema ──
const VMS_PLATFORM_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'VMukti VMS - AI Video Management System',
  description: 'Enterprise-grade AI-powered Video Management System by VMukti. Supports 10,000+ cameras, 26+ AI analytics including face recognition, ANPR, crowd detection, fire/smoke detection, and behavioral analytics. Deployed across railways, smart cities, enterprises, and critical infrastructure globally.',
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Windows, Linux, Cloud',
  author: {
    '@type': 'Organization',
    name: 'VMukti Solutions',
    url: 'https://www.vmukti.com'
  },
  featureList: 'Camera Tampering Detection, Crowd Density Estimation, Face Recognition, ANPR, Fire Detection, Smoke Detection, Unattended Object Detection, Intrusion Detection, People Counting, Loitering Detection, PPE Detection, Vendor Authorization, No-Parking Detection, Staff Presence Monitoring, Water Leakage Detection, Lift Status Monitoring, Garbage Detection, Littering Detection, Fall Detection, Line Crossing, Heat Map Analytics',
  offers: {
    '@type': 'Offer',
    description: 'Enterprise licensing - contact for pricing',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock'
  }
};

// ── VMukti EMS Platform Schema ──
const EMS_PLATFORM_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'VMukti EMS - Enterprise Management System',
  description: 'VMukti Enterprise Management System for unified workforce management, asset tracking, operational analytics, and compliance monitoring. Integrates with VMS for AI-driven staff presence tracking, idle-time analysis, productivity monitoring, and automated reporting.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, Cloud',
  author: {
    '@type': 'Organization',
    name: 'VMukti Solutions',
    url: 'https://www.vmukti.com'
  },
  featureList: 'Face-Based Staff Attendance, Idle-Time Analysis, Workforce Productivity Monitoring, Booking Counter Occupancy Detection, Cleaning Staff Tracking, Uniform Compliance Verification, Task Assignment, Automated Reporting, Role-Based Access Control'
};

// ── VMukti ICCC Platform Schema ──
const ICCC_PLATFORM_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'VMukti ICCC - Integrated Command & Control Center',
  description: 'VMukti Integrated Command and Control Center platform for smart cities, railways, airports, and critical infrastructure. Centralized real-time monitoring with AI-powered incident detection, automated alerting, GIS integration, and multi-agency coordination.',
  applicationCategory: 'GovernmentApplication',
  operatingSystem: 'Web, Cloud, On-Premise',
  author: {
    '@type': 'Organization',
    name: 'VMukti Solutions',
    url: 'https://www.vmukti.com'
  },
  featureList: 'Centralized Monitoring Dashboard, AI Incident Detection, Automated Alert Routing, GIS Map Integration, Multi-Agency Coordination, Real-Time Analytics, Video Wall Management, Disaster Response, SOS Management, Public Safety Analytics'
};

// ── Cloud AI & Gen AI Schema ──
const CLOUD_AI_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'VMukti Cloud AI & Generative AI Platform',
  description: 'VMukti Cloud AI platform with generative AI capabilities for intelligent video surveillance, natural language search across video feeds, automated incident report generation, predictive analytics, and AI-powered decision support. Enables organizations to move from reactive to proactive security and operations management.',
  provider: {
    '@type': 'Organization',
    name: 'VMukti Solutions',
    url: 'https://www.vmukti.com'
  },
  serviceType: 'Cloud AI Platform',
  areaServed: [
    { '@type': 'Place', name: 'Middle East' },
    { '@type': 'Place', name: 'Africa' },
    { '@type': 'Place', name: 'Southeast Asia' },
    { '@type': 'Place', name: 'United States' },
    { '@type': 'Place', name: 'United Kingdom' },
    { '@type': 'Place', name: 'Latin America' },
    { '@type': 'Place', name: 'Europe' }
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Cloud AI Capabilities',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Natural Language Video Search', description: 'Search across thousands of camera feeds using plain English queries powered by Gen AI' }},
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automated Incident Reports', description: 'AI-generated incident reports with context, timeline, and recommended actions' }},
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Predictive Analytics', description: 'AI-driven forecasting for crowd patterns, incident likelihood, and resource optimization' }},
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Anomaly Detection', description: 'Self-learning AI that identifies unusual patterns and behaviors without manual rule creation' }},
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Decision Support', description: 'Real-time AI recommendations for security personnel based on multi-camera analysis' }}
    ]
  }
};

// ── Railway & Smart City AI Use Cases Schema ──
const USE_CASES_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'VMukti AI Solutions for Railways & Smart Cities',
  description: 'VMukti deploys 26+ AI-powered video analytics use cases for Indian Railways, smart cities, and critical infrastructure. From platform overcrowding detection to fire safety, criminal face recognition to cleanliness monitoring - VMukti AI transforms surveillance from passive recording to proactive intelligence.',
  provider: {
    '@type': 'Organization',
    name: 'VMukti Solutions',
    url: 'https://www.vmukti.com'
  },
  serviceType: 'AI Video Surveillance Solutions',
  areaServed: { '@type': 'Country', name: 'India' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Use Cases',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Camera Tampering & Frozen Feed Detection', description: 'Detects camera obstruction, vandalism, misalignment, signal loss, or frozen video feeds in real-time' }},
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Platform Overcrowding Detection', description: 'Real-time crowd density estimation with threshold-based alerts for passenger safety at railway stations' }},
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Long-Duration Presence Detection', description: 'Identifies individuals remaining in monitored areas beyond permissible duration for security' }},
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Unattended Bag Detection', description: 'AI identifies bags and luggage left unattended beyond defined time threshold for bomb threat prevention' }},
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Criminal Database Face Recognition', description: 'Real-time face matching against authorized watchlists and criminal databases for law enforcement' }},
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fire & Smoke Safety Alert', description: 'AI-powered early fire and smoke detection with instant alerts for railways, warehouses, and smart cities' }},
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vendor Authorization Management', description: 'Face-based identification of authorized vs unauthorized vendors in commercial areas' }},
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'No-Parking Violation Detection', description: 'Detects parking violations with automated challan generation support for traffic management' }},
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Staff Presence & Idle-Time Analysis', description: 'Face-based workforce tracking with staff presence, movement, and inactivity monitoring' }},
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cleanliness & Hygiene Monitoring', description: 'AI detects garbage accumulation, littering, spitting, smoking, and monitors cleaning staff productivity' }},
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Water Leakage Detection', description: 'Visual AI detection of water leakage from hydrants and pipes with camera location tracking' }},
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Disabled Person Assistance Alert', description: 'AI detection of disabled persons for proactive assistance and improved accessibility' }}
    ]
  }
};

// ── Industry Solutions Schema ──
const INDUSTRIES_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'VMukti Industry Solutions',
  description: 'VMukti AI-powered video surveillance and management solutions across industries worldwide',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Railways & Transportation', description: 'AI surveillance for railway stations, airports, metros with 26+ use cases including crowd detection, face recognition, and safety monitoring' },
    { '@type': 'ListItem', position: 2, name: 'Smart Cities & Government', description: 'ICCC platforms for smart city operations, traffic management, public safety, and urban analytics' },
    { '@type': 'ListItem', position: 3, name: 'Enterprise & Corporate', description: 'VMS and EMS for corporate campuses, data centers, and enterprise security operations' },
    { '@type': 'ListItem', position: 4, name: 'Oil & Gas', description: 'AI-powered safety monitoring for oil rigs, refineries, and pipeline infrastructure in Middle East and Africa' },
    { '@type': 'ListItem', position: 5, name: 'Banking & Finance', description: 'Branch surveillance, ATM monitoring, and compliance analytics for financial institutions' },
    { '@type': 'ListItem', position: 6, name: 'Manufacturing & Warehousing', description: 'Worker safety (PPE, fall detection), inventory monitoring, and production line analytics' },
    { '@type': 'ListItem', position: 7, name: 'Retail & Hospitality', description: 'People counting, heat maps, customer analytics, and loss prevention' },
    { '@type': 'ListItem', position: 8, name: 'Healthcare', description: 'Patient monitoring, staff tracking, facility security, and hygiene compliance' }
  ]
};

const CapabilitiesSchema = ({ includeVMS = true, includeEMS = true, includeICCC = true, includeCloudAI = true, includeUseCases = true, includeIndustries = true }) => {
  return (
    <>
      {includeVMS && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(VMS_PLATFORM_SCHEMA)}</script>
        </Helmet>
      )}
      {includeEMS && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(EMS_PLATFORM_SCHEMA)}</script>
        </Helmet>
      )}
      {includeICCC && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(ICCC_PLATFORM_SCHEMA)}</script>
        </Helmet>
      )}
      {includeCloudAI && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(CLOUD_AI_SCHEMA)}</script>
        </Helmet>
      )}
      {includeUseCases && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(USE_CASES_SCHEMA)}</script>
        </Helmet>
      )}
      {includeIndustries && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(INDUSTRIES_SCHEMA)}</script>
        </Helmet>
      )}
    </>
  );
};

export default CapabilitiesSchema;
