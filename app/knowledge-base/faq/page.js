import FAQPage from './faq-client';
import { FAQSchema } from '../../../components/SchemaMarkup';

export const metadata = {
  title: 'VMukti Cloud VMS FAQ | Comprehensive Q&A Guide',
  description: 'Find answers to 30+ frequently asked questions about VMukti Cloud VMS, AI video analytics, deployment, compliance, pricing, and support.',
  alternates: {
    canonical: 'https://vmukti.com/knowledge-base/faq',
  },
};

const schemaFaqs = [
  {
    question: 'What is VMukti?',
    answer: 'VMukti is a cloud-native Video Management System platform that enables enterprises to deploy, manage, and analyse video surveillance across multiple locations. VMukti processes 1 billion+ video feeds monthly across 700+ districts and 50+ smart cities globally.',
  },
  {
    question: 'What is Cloud VMS and how does it work?',
    answer: 'Cloud VMS (Video Management System) is a scalable, cloud-based platform that ingests video from IP cameras, processes streams for analytics, and stores footage in secure cloud storage. Unlike on-premise NVRs, Cloud VMS eliminates infrastructure maintenance, provides elastic storage, and enables AI-powered analysis at scale.',
  },
  {
    question: 'What AI analytics modules does VMukti offer?',
    answer: 'VMukti offers 30+ AI analytics modules including intrusion detection, face recognition, ANPR/LPR, PPE compliance, crowd counting, vehicle tracking, object detection, fire/smoke detection, and behaviour analysis. Modules can be enabled per-camera based on use case requirements.',
  },
  {
    question: 'What certifications and compliance standards does VMukti maintain?',
    answer: 'VMukti is compliant with GDPR, PDPB (India), PCI DSS, and sector-specific regulations including HIPAA for healthcare and NERC CIP for utilities. The platform supports automated audit trails, encryption in transit and at rest, and retention management for regulatory adherence.',
  },
  {
    question: 'What camera brands are compatible with VMukti Cloud VMS?',
    answer: 'VMukti Cloud VMS integrates with all major IP camera manufacturers including Hikvision, Dahua, Uniview, Axis, Sony, Bosch, and Hanwha. The platform supports ONVIF and RTSP protocols, ensuring compatibility with existing camera infrastructure without requiring hardware replacement.',
  },
  {
    question: 'What are the main benefits of Cloud VMS?',
    answer: 'Key benefits include: remote access from any device, automatic software updates eliminating patching overhead, elastic storage that scales on demand, built-in disaster recovery, reduced hardware footprint and maintenance costs, integration with AI analytics, and centralised multi-site management. Enterprises report 40-60% reduction in total cost of ownership compared to NVR deployments.',
  },
  {
    question: 'What is the scale of VMukti operations?',
    answer: 'VMukti operates at scale: 900+ active projects, 700+ government districts, 50+ smart cities, 200+ enterprise customers, 30+ AI analytics modules, and processes over 1 billion video feeds annually. The platform maintains 99.99% uptime for mission-critical deployments.',
  },
];

export default function FAQPageWrapper() {
  return (
    <>
      <FAQSchema faqs={schemaFaqs} />
      <FAQPage />
    </>
  );
}
