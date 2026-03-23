'use client';
import { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

// ─── Icons (same as SolutionsComparison) ─────────────────────────────────────

const CheckIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <rect width="30" height="30" rx="15" fill="#3F77A5" />
    <path d="M9 15.5L13 19.5L21 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrossIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <rect width="30" height="30" rx="15" fill="#D1D5DC" />
    <path d="M10 10L20 20M20 10L10 20" stroke="#6A7282" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const DashIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <rect width="30" height="30" rx="15" fill="#DB7B3A" />
    <rect x="9" y="14" width="12" height="2" rx="1" fill="white" />
  </svg>
);

const ChevronIcon = ({ isOpen }) => (
  <Image
    src="/assets/dropdown.svg"
    alt="toggle"
    width={16}
    height={8}
    style={{
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.25s ease",
      flexShrink: 0,
    }}
  />
);

// ─── Data ─────────────────────────────────────────────────────────────────────
// columns: [milestone, genetec, vmukti]
// T = supported, P = partial, F = not supported

const T = 'T', F = 'F', P = 'P';

const SECTIONS = [
  {
    title: 'Core VMS',
    rows: [
      { feature: 'Cloud Video Management', values: [T, T, T] },
      { feature: 'Edge Management',        values: [P, T, T] },
      { feature: 'Multi-site Management',  values: [P, T, T] },
      { feature: 'On-premise Deployment',  values: [P, P, T] },
    ],
  },
  {
    title: 'AI Analytics',
    rows: [
      { feature: 'Object Detection',       values: [F, P, T] },
      { feature: 'Face Recognition',       values: [F, P, T] },
      { feature: 'Behavior Analytics',     values: [F, P, T] },
      { feature: 'LPR / ANPR',             values: [F, F, T] },
    ],
  },
  {
    title: 'Edge Computing',
    rows: [
      { feature: 'Edge AI Processing',     values: [F, P, T] },
      { feature: 'Local Processing',       values: [F, F, T] },
      { feature: 'Bandwidth Optimization', values: [F, P, T] },
    ],
  },
  {
    title: 'Command Center',
    rows: [
      { feature: 'Unified Dashboard',      values: [F, T, T] },
      { feature: 'Video Wall Support',     values: [T, T, T] },
      { feature: 'Incident Management',    values: [F, T, T] },
      { feature: 'Cross-site Correlation', values: [F, P, T] },
    ],
  },
  {
    title: 'Integration',
    rows: [
      { feature: 'ONVIF Compatible',       values: [T, T, T] },
      { feature: 'REST API',               values: [P, T, T] },
      { feature: 'SIEM Integration',       values: [F, P, T] },
      { feature: 'Access Control',         values: [P, T, T] },
    ],
  },
  {
    title: 'Support',
    rows: [
      { feature: '24/7 Support',           values: [F, P, T] },
      { feature: 'SLA Guarantee',          values: [F, P, T] },
      { feature: 'Dedicated CSM',          values: [F, F, T] },
    ],
  },
  {
    title: 'Compliance',
    rows: [
      { feature: 'GDPR Compliant',         values: [P, T, T] },
      { feature: 'SOC 2 Certified',        values: [F, P, T] },
      { feature: 'HIPAA Ready',            values: [F, F, T] },
      { feature: 'Data Residency',         values: [F, P, T] },
    ],
  },
];

const COLS = [
  { label: 'Milestone XProtect',      idx: 0 },
  { label: 'Genetec Security Center', idx: 1 },
  { label: 'VMukti',                  idx: 2, highlight: true },
];

function Cell({ value }) {
  if (value === T) return <CheckIcon />;
  if (value === F) return <CrossIcon />;
  return <DashIcon />;
}

// ─── Component ────────────────────────────────────────────────────────────────

const CompareFeatures = () => {
  const [openSection, setOpenSection] = useState('Core VMS');

  const toggle = (title) =>
    setOpenSection((prev) => (prev === title ? null : title));

  return (
    <Box
      px={{ base: "16px", md: "24px", lg: "32px" }}
      pb={{ base: "56px", md: "80px" }}
      bg="white"
      maxW="1406px" mx="auto"
      borderTopRadius="0"
      borderBottomRadius="20px"
    >
      <Box>

        {/* Heading */}
        <Text
          fontFamily="'Wix Madefor Display', sans-serif"
          fontSize={{ base: "1.75rem", md: "2.25rem", lg: "2.5rem" }}
          fontWeight="600"
          color="#1A1A2E"
          textAlign="center"
          bg="#ffffff"
          mb={{ base: "32px", md: "48px" }}
        >
          Compare Features
        </Text>

        {/* Accordion — border-radius 20px wrapper with #3F77A5 border */}
        <Box
          borderRadius="20px"
          overflow="hidden"
          p="8px"
          display="flex"
          flexDirection="column"
          gap="8px"
        >
          {SECTIONS.map((section) => {
            const isOpen = openSection === section.title;

            return (
              <Box
                key={section.title}
                borderRadius="20px"
                overflow="hidden"
                border="1px solid #BECEDC"
              >
                {/* Accordion header — closed: angle -90deg on chevron */}
                <Flex
                  as="button"
                  w="100%"
                  h="64px"
                  align="center"
                  justify="space-between"
                  px={{ base: "20px", md: "28px" }}
                  bg="#BECEDC"
                  cursor="pointer"
                  onClick={() => toggle(section.title)}
                >
                  <Box textAlign="left">
                    <Text
                      fontFamily="'Wix Madefor Display', sans-serif"
                      fontSize={{ base: "0.9375rem", md: "1rem" }}
                      fontWeight="700"
                      color="#000000"
                      mb="4px"
                    >
                      {section.title}
                    </Text>
                    <Box w="28px" h="2px" bg="#3F77A5" borderRadius="1px" />
                  </Box>
                  <ChevronIcon isOpen={isOpen} />
                </Flex>

                {/* Expanded table — width 1372 */}
                {isOpen && (
                  <Box overflowX="auto" sx={{ WebkitOverflowScrolling: 'touch' }}>
                    <table
                      style={{
                        width: '100%',
                        minWidth: '700px',
                        borderCollapse: 'collapse',
                        tableLayout: 'fixed',
                      }}
                    >
                      <colgroup>
                        <col style={{ width: '35%' }} />
                        <col style={{ width: '21.67%' }} />
                        <col style={{ width: '21.67%' }} />
                        <col style={{ width: '21.67%' }} />
                      </colgroup>

                      {/* Table header */}
                      <thead>
                        <tr style={{ backgroundColor: '#F8F9FA', borderBottom: '1px solid #E2E8F0' }}>
                          <th style={{
                            padding: '14px 20px',
                            textAlign: 'left',
                            fontFamily: "'Wix Madefor Display', sans-serif",
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#555',
                            borderBottom: '1px solid #E2E8F0',
                          }}>
                            Feature
                          </th>
                          {COLS.map((col) => (
                            <th key={col.label} style={{
                              padding: '14px 12px',
                              textAlign: 'center',
                              fontFamily: "'Wix Madefor Display', sans-serif",
                              fontSize: '13px',
                              fontWeight: '600',
                              color: col.highlight ? '#3F77A5' : '#555',
                              borderBottom: '1px solid #E2E8F0',
                              borderLeft: col.highlight ? '2px solid #DB7B3A' : '1px solid #E2E8F0',
                              backgroundColor: col.highlight ? 'rgba(219,123,58,0.04)' : 'transparent',
                            }}>
                              {col.label}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      {/* Table rows */}
                      <tbody>
                        {section.rows.map((row, rowIdx) => (
                          <tr
                            key={row.feature}
                            style={{ backgroundColor: rowIdx % 2 === 0 ? 'white' : '#FAFAFA' }}
                          >
                            <td style={{
                              padding: '16px 20px',
                              fontFamily: "'Wix Madefor Display', sans-serif",
                              fontSize: '14px',
                              color: '#444',
                              borderBottom: '1px solid #F0F0F0',
                              borderRight: '1px solid #F0F0F0',
                            }}>
                              {row.feature}
                            </td>
                            {COLS.map((col) => (
                              <td key={col.label} style={{
                                padding: '14px 12px',
                                textAlign: 'center',
                                verticalAlign: 'middle',
                                borderBottom: '1px solid #F0F0F0',
                                borderLeft: col.highlight ? '2px solid #DB7B3A' : '1px solid #F0F0F0',
                                backgroundColor: col.highlight
                                  ? (rowIdx % 2 === 0 ? 'rgba(219,123,58,0.04)' : 'rgba(219,123,58,0.07)')
                                  : 'inherit',
                              }}>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                  <Cell value={row.values[col.idx]} />
                                </div>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                )}
              </Box>
            );
          })}
        </Box>

      </Box>
    </Box>
  );
};

export default CompareFeatures;
