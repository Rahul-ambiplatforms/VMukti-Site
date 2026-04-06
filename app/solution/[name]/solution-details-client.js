'use client';

import SolutionDetails from '../../../components/SolutionDetails';
import { FAQSchema, ProductSchema } from '../../../components/SchemaMarkup';
import { faqData } from '../../../data/faqData';
import { useMemo } from 'react';

export default function SolutionDetailsClient({ solutionName }) {
  // Map solution names to FAQ data keys
  const solutionFaqMap = {
    'video-management-system': 'vms',
    'cloud-vms': 'cloudVMS',
    'enterprise-management-system': 'ems',
    'iccc': 'integratedcommandcontrolcenter',
    'integrated-command-control-center': 'integratedcommandcontrolcenter',
    'cloudai': 'aiAnalytics',
    'genai': 'genai',
    'visualbot': 'visualbot',
    'live-streaming': 'liveStreaming',
    'live-streaming-solution': 'liveStreaming',
    'flying-squad-vehicle': 'flyingSquadVehicle',
  };

  const faqKey = solutionFaqMap[solutionName];
  const faqContent = faqKey && faqData[faqKey] ? faqData[faqKey].qa : [];

  // Product schema configuration based on solution type
  const productSchemaConfig = useMemo(() => {
    const configs = {
      'video-management-system': {
        name: 'VMukti Cloud Video Management System',
        description: 'Enterprise-grade cloud VMS with AI analytics, 100,000+ camera support, STQC certification, and 1B+ feeds processed annually.',
        url: 'https://www.vmukti.com/solution/video-management-system',
        features: 'Cloud VMS, Edge-to-Cloud Architecture, 100000+ Camera Support, AI-Powered Analytics, ANPR, Facial Recognition, ONVIF Compatible, Mobile Access',
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.7', bestRating: '5', ratingCount: '312', reviewCount: '185' },
      },
      'cloud-vms': {
        name: 'VMukti Cloud AI VMS',
        description: 'Cloud-native video management system with auto-scaling, AI analytics, and global data sovereignty compliance.',
        url: 'https://www.vmukti.com/solution/cloud-vms',
        features: 'Cloud Architecture, Auto-scaling, AI Analytics, Multi-region, Disaster Recovery, Mobile Access',
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.6', bestRating: '5', ratingCount: '198', reviewCount: '124' },
      },
      'enterprise-management-system': {
        name: 'VMukti Enterprise Management System',
        description: 'Multi-site surveillance operations platform with infrastructure monitoring, SLA tracking, and incident management.',
        url: 'https://www.vmukti.com/solution/enterprise-management-system',
        features: 'Multi-site Management, Infrastructure Monitoring, SLA Tracking, Incident Management, Health Dashboards',
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', bestRating: '5', ratingCount: '156', reviewCount: '98' },
      },
      'iccc': {
        name: 'VMukti Integrated Command & Control Center',
        description: 'Unified command center integrating video, IoT, access control, and emergency systems for enterprise campus operations.',
        url: 'https://www.vmukti.com/solution/integrated-command-control-center',
        features: 'Unified Dashboard, Video Wall, GIS Integration, IoT Integration, Emergency Response, Multi-agency Coordination',
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', bestRating: '5', ratingCount: '87', reviewCount: '52' },
      },
      'integrated-command-control-center': {
        name: 'VMukti Integrated Command & Control Center',
        description: 'Unified command center integrating video, IoT, access control, and emergency systems for enterprise campus operations.',
        url: 'https://www.vmukti.com/solution/integrated-command-control-center',
        features: 'Unified Dashboard, Video Wall, GIS Integration, IoT Integration, Emergency Response, Multi-agency Coordination',
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', bestRating: '5', ratingCount: '87', reviewCount: '52' },
      },
      'cloudai': {
        name: 'VMukti Cloud AI Analytics',
        description: 'Advanced AI video analytics including ANPR, facial recognition, crowd detection, and behavior analysis.',
        url: 'https://www.vmukti.com/solution/cloudai',
        features: 'ANPR, Facial Recognition, Crowd Analytics, Behavior Detection, Fire Detection, Custom Analytics',
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.7', bestRating: '5', ratingCount: '234', reviewCount: '147' },
      },
      'genai': {
        name: 'VMukti GenAI for Video Surveillance',
        description: 'Generative AI-powered video surveillance assistant enabling natural language queries, automated report generation, and intelligent incident summarization.',
        url: 'https://www.vmukti.com/solution/genai',
        features: 'Natural Language Search, AI Report Generation, Incident Summarization, Conversational Analytics, Smart Alerts',
      },
      'visualbot': {
        name: 'VMukti VisualBot',
        description: 'AI-powered visual monitoring bot for automated surveillance with intelligent scene understanding, anomaly detection, and proactive alerting.',
        url: 'https://www.vmukti.com/solution/visualbot',
        features: 'Automated Monitoring, Scene Understanding, Anomaly Detection, Proactive Alerts, Visual Intelligence',
      },
      'live-streaming': {
        name: 'VMukti Live Streaming Platform',
        description: 'Enterprise live video streaming solution with adaptive bitrate, multi-CDN delivery, low latency, and secure viewing for surveillance and event broadcasting.',
        url: 'https://www.vmukti.com/solution/live-streaming-solution',
        features: 'Adaptive Bitrate, Multi-CDN, Low Latency Streaming, Secure Viewing, Live Event Broadcasting, DVR Playback',
      },
      'live-streaming-solution': {
        name: 'VMukti Live Streaming Platform',
        description: 'Enterprise live video streaming solution with adaptive bitrate, multi-CDN delivery, low latency, and secure viewing for surveillance and event broadcasting.',
        url: 'https://www.vmukti.com/solution/live-streaming-solution',
        features: 'Adaptive Bitrate, Multi-CDN, Low Latency Streaming, Secure Viewing, Live Event Broadcasting, DVR Playback',
      },
      'flying-squad-vehicle': {
        name: 'VMukti Flying Squad Vehicle Surveillance System',
        description: 'Mobile surveillance and rapid-response platform with GPS tracking, moving video monitoring, geo-fencing alerts, PTZ camera control, and Enterprise Command Center integration.',
        url: 'https://www.vmukti.com/solution/flying-squad-vehicle',
        features: 'Live GPS Tracking, Moving Vehicle Surveillance, Geo-Fencing Alerts, PTZ Camera Control, Control Room Monitoring , Enterprise Command Center Integration',
      },
    };
    return configs[solutionName] || configs['video-management-system'];
  }, [solutionName]);

  return (
    <>
      {/* Product Schema Markup */}
      <ProductSchema
        name={productSchemaConfig.name}
        description={productSchemaConfig.description}
        url={productSchemaConfig.url}
        features={productSchemaConfig.features}
        aggregateRating={productSchemaConfig.aggregateRating || null}
      />

      {/* FAQ Schema Markup */}
      {faqContent.length > 0 && <FAQSchema faqs={faqContent} />}

      {/* Breadcrumb schema is handled globally by SEO/Breadcrumbs.jsx in site-layout */}

      {/* Solution Details Component */}
      <SolutionDetails solutionName={solutionName} />
    </>
  );
}
