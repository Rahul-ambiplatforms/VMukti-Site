'use client';

import SolutionDetails from '../../../components/SolutionDetails';
import { FAQSchema, ProductSchema, BreadcrumbSchema } from '../../../components/SchemaMarkup';
import { faqData } from '../../../data/faqData';
import { useMemo } from 'react';

export default function SolutionDetailsClient({ solutionName }) {
  // Map solution names to FAQ data keys
  const solutionFaqMap = {
    'video-management-system': 'vms',
    'cloud-vms': 'cloudVMS',
    'enterprise-management-system': 'ems',
    'iccc': 'iccc',
    'cloudai': 'aiAnalytics',
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
      },
      'cloud-vms': {
        name: 'VMukti Cloud AI VMS',
        description: 'Cloud-native video management system with auto-scaling, AI analytics, and global data sovereignty compliance.',
        url: 'https://www.vmukti.com/solution/cloud-vms',
        features: 'Cloud Architecture, Auto-scaling, AI Analytics, Multi-region, Disaster Recovery, Mobile Access',
      },
      'enterprise-management-system': {
        name: 'VMukti Enterprise Management System',
        description: 'Multi-site surveillance operations platform with infrastructure monitoring, SLA tracking, and incident management.',
        url: 'https://www.vmukti.com/solution/enterprise-management-system',
        features: 'Multi-site Management, Infrastructure Monitoring, SLA Tracking, Incident Management, Health Dashboards',
      },
      'iccc': {
        name: 'VMukti Integrated Command & Control Center',
        description: 'Unified command center integrating video, IoT, access control, and emergency systems for smart city operations.',
        url: 'https://www.vmukti.com/solution/iccc',
        features: 'Unified Dashboard, Video Wall, GIS Integration, IoT Integration, Emergency Response, Multi-agency Coordination',
      },
      'cloudai': {
        name: 'VMukti Cloud AI Analytics',
        description: 'Advanced AI video analytics including ANPR, facial recognition, crowd detection, and behavior analysis.',
        url: 'https://www.vmukti.com/solution/cloudai',
        features: 'ANPR, Facial Recognition, Crowd Analytics, Behavior Detection, Fire Detection, Custom Analytics',
      },
    };
    return configs[solutionName] || configs['video-management-system'];
  }, [solutionName]);

  // Breadcrumb items for current solution
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.vmukti.com' },
    { name: 'Solutions', url: 'https://www.vmukti.com/solutions' },
    { name: productSchemaConfig.name, url: productSchemaConfig.url },
  ];

  return (
    <>
      {/* Product Schema Markup */}
      <ProductSchema
        name={productSchemaConfig.name}
        description={productSchemaConfig.description}
        url={productSchemaConfig.url}
        features={productSchemaConfig.features}
      />

      {/* FAQ Schema Markup */}
      {faqContent.length > 0 && <FAQSchema faqs={faqContent} />}

      {/* Breadcrumb Schema Markup */}
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Solution Details Component */}
      <SolutionDetails solutionName={solutionName} />
    </>
  );
}
