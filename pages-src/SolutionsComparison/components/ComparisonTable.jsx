'use client';
import { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';

// ─── Icons ───────────────────────────────────────────────────────────────────

const CheckIcon = () => (
  <svg width="31" height="30" viewBox="0 0 31 30" fill="none">
    <rect width="31" height="30" rx="15" fill="#3F77A5" />
    <path
      d="M9.5 15.5L13.5 19.5L21.5 11"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CrossIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <rect width="30" height="30" rx="15" fill="#D1D5DC" />
    <path
      d="M10 10L20 20M20 10L10 20"
      stroke="#6A7282"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const DashIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <rect width="30" height="30" rx="15" fill="#DB7B3A" />
    <rect x="9" y="14" width="12" height="2" rx="1" fill="white" />
  </svg>
);

// ─── Data ────────────────────────────────────────────────────────────────────

const T = 'T', F = 'F', P = 'P';

const TABS = [
  { id: 'all',       label: 'All Features' },
  { id: 'milestone', label: 'VMukti vs Milestone' },
  { id: 'genetec',   label: 'VMukti vs Genetec' },
  { id: 'eagleeye',  label: 'VMukti vs Eagle Eye' },
  { id: 'verkada',   label: 'VMukti vs Verkada' },
];

const ALL_COLS = [
  { key: 'vmukti',    label: 'VMukti',                  idx: 0 },
  { key: 'milestone', label: 'Milestone XProtect',      idx: 1 },
  { key: 'genetec',   label: 'Genetec Security Center', idx: 2 },
  { key: 'eagleeye',  label: 'Eagle Eye Networks',      idx: 3 },
  { key: 'verkada',   label: 'Verkada',                 idx: 4 },
];

const TAB_COLS = {
  all:       ['vmukti', 'milestone', 'genetec', 'eagleeye', 'verkada'],
  milestone: ['vmukti', 'milestone'],
  genetec:   ['vmukti', 'genetec'],
  eagleeye:  ['vmukti', 'eagleeye'],
  verkada:   ['vmukti', 'verkada'],
};

const SECTIONS = [
  {
    title: 'ARCHITECTURE',
    rows: [
      { feature: 'Cloud Native',           values: [T, F, P, T, T] },
      { feature: 'Hybrid Deployment',      values: [T, F, P, T, T] },
      { feature: 'On-Premise Option',      values: [T, F, P, T, T] },
    ],
  },
  {
    title: 'AI ANALYTICS',
    rows: [
      { feature: 'Object Detection',       values: [T, F, P, T, T] },
      { feature: 'Face Recognition',       values: [T, F, P, T, T] },
      { feature: 'Behavior Analytics',     values: [T, F, P, T, T] },
      { feature: 'LPR / ANPR',             values: [T, F, P, T, T] },
    ],
  },
  {
    title: 'SCALABILITY',
    rows: [
      { feature: 'Max Cameras (100K+)',    values: [T, F, P, T, T] },
      { feature: 'Multi-Site Support',     values: [T, F, P, T, T] },
      { feature: 'Multi-Tenant',           values: [T, F, P, T, T] },
    ],
  },
  {
    title: 'EDGE COMPUTING',
    rows: [
      { feature: 'Edge AI Processing',     values: [T, F, P, T, T] },
      { feature: 'Local Processing',       values: [T, F, P, T, T] },
      { feature: 'Bandwidth Optimization', values: [T, F, P, T, T] },
    ],
  },
  {
    title: 'INTEGRATION',
    rows: [
      { feature: 'ONVIF Compatible',       values: [T, F, P, T, T] },
      { feature: 'REST API',               values: [T, F, P, T, T] },
      { feature: 'SIEM Integration',       values: [T, F, P, T, T] },
      { feature: 'Access Control',         values: [T, F, P, T, T] },
    ],
  },
  {
    title: 'COMPLIANCE',
    rows: [
      { feature: 'GDPR Compliant',         values: [T, F, P, T, T] },
      { feature: 'SOC 2 Certified',        values: [T, F, P, T, T] },
      { feature: 'HIPAA Ready',            values: [T, F, P, T, T] },
      { feature: 'Data Residency',         values: [T, F, P, T, T] },
    ],
  },
  {
    title: 'PRICING MODEL',
    rows: [
      { feature: 'Per-Camera Pricing',     values: [T, F, P, T, T] },
      { feature: 'Per-Site Pricing',       values: [T, F, P, T, T] },
      { feature: 'Enterprise License',     values: [T, F, P, T, T] },
    ],
  },
  {
    title: 'SUPPORT',
    rows: [
      { feature: '24/7 Support',           values: [T, F, P, T, T] },
      { feature: 'SLA Guarantee',          values: [T, F, P, T, T] },
      { feature: 'Dedicated CSM',          values: [T, F, P, T, T] },
    ],
  },
];

function Cell({ value }) {
  if (value === T) return <CheckIcon />;
  if (value === F) return <CrossIcon />;
  return <DashIcon />;
}

// ─── Styles (inline for table elements Chakra can't style directly) ───────────

const tdBase = {
  padding: '13px 12px',
  textAlign: 'center',
  verticalAlign: 'middle',
  borderBottom: '1px solid #E4E4E4',
};

const featureTd = {
  padding: '13px 20px',
  textAlign: 'left',
  verticalAlign: 'middle',
  borderBottom: '1px solid #E4E4E4',
  backgroundColor: '#F7F7F7',
  fontSize: '16px',
  fontWeight: '400',
  fontFamily: "'WixMadeforDisplay', sans-serif",
  lineHeight: '24px',
  letterSpacing: '0px',
  color: '#333333',
  whiteSpace: 'normal',
  wordBreak: 'break-word',
  overflowWrap: 'break-word',
};

const sectionTd = {
  padding: '9px 20px',
  textAlign: 'left',
  verticalAlign: 'middle',
  backgroundColor: '#EBEBEB',
  fontSize: '16px',
  fontWeight: '600',
  fontFamily: "'WixMadeforDisplay', sans-serif",
  lineHeight: '27px',
  letterSpacing: '0px',
  color: '#777777',
  borderBottom: '1px solid #DCDCDC',
  borderTop: '1px solid #DCDCDC',
  whiteSpace: 'normal',
  wordBreak: 'break-word',
};

const sectionEmptyTd = {
  backgroundColor: '#EBEBEB',
  borderBottom: '1px solid #DCDCDC',
  borderTop: '1px solid #DCDCDC',
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function ComparisonTable() {
  const [activeTab, setActiveTab] = useState('all');

  const visibleColKeys = TAB_COLS[activeTab];
  const visibleCols = ALL_COLS.filter((c) => visibleColKeys.includes(c.key));

  return (
    /* ── Outer page padding matching left:24px from spec ── */
    <Box px={{ base: '16px', md: '24px' }} pb={{ base: '40px', md: '64px' }} mt="32px">

      {/* ── Single white container — 1448×2520, radius:24, bg:#FFFFFF ── */}
      <Box
        maxW="1448px"
        mx="auto"
        borderRadius="24px"
        bg="#FFFFFF"
        boxShadow="0 2px 20px rgba(0,0,0,0.08)"
        border="1px solid #E0E0E0"
        px={{ base: '12px', md: '32px' }}
        pt={{ base: '20px', md: '32px' }}
        pb={{ base: '20px', md: '32px' }}
        overflow="hidden"
      >

        {/* ── Tab Nav — scrollable on mobile ── */}
        <Box overflowX="auto" pb="4px" mb="28px">
          <Flex gap="12px" justify={{ base: 'flex-start', md: 'center' }} minW="max-content" mx="auto">
            {TABS.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <Box
                  key={tab.id}
                  as="button"
                  onClick={() => setActiveTab(tab.id)}
                  h="48px"
                  px="22px"
                  borderRadius="full"
                  bg={active ? '#3F77A5' : 'white'}
                  color={active ? 'white' : '#555'}
                  fontFamily="'WixMadeforDisplay', sans-serif"
                  fontWeight={active ? '600' : '500'}
                  fontSize="14px"
                  border="1px solid"
                  borderColor={active ? '#3F77A5' : '#D0D0D0'}
                  cursor="pointer"
                  whiteSpace="nowrap"
                  transition="all 0.18s"
                  _hover={{ bg: active ? '#2d5f8a' : '#F2F2F2' }}
                >
                  {tab.label}
                </Box>
              );
            })}
          </Flex>
        </Box>

        {/* ── Table — horizontal scroll on mobile ── */}
        <Box
          overflowX="auto"
          borderRadius="12px"
          border="1px solid #E0E0E0"
          sx={{ WebkitOverflowScrolling: 'touch' }}
        >
          <table
            style={{
              width: '100%',
              minWidth: '900px',
              borderCollapse: 'collapse',
              tableLayout: 'fixed',
            }}
          >
            {/* colgroup — fixed px widths, table scrolls on small screens */}
            <colgroup>
              <col style={{ width: '220px' }} />
              {visibleCols.map((col) => (
                <col key={col.key} style={{ width: '180px' }} />
              ))}
            </colgroup>

            {/* ── thead: column headers ── */}
            <thead>
              <tr>
                {/* Feature column header */}
                <th
                  style={{
                    padding: '14px 20px',
                    textAlign: 'left',
                    backgroundColor: '#3F77A5',
                    fontSize: '16px',
                    fontWeight: '600',
                    fontFamily: "'WixMadeforDisplay', sans-serif",
                    lineHeight: '27px',
                    letterSpacing: '0px',
                    color: '#FFFFFF',
                    borderBottom: '2px solid #3F77A5',
                  }}
                >
                  Feature
                </th>

                {visibleCols.map((col) => {
                  return (
                    <th
                      key={col.key}
                      style={{
                        width: '234px',
                        height: '57px',
                        padding: '14px 12px',
                        textAlign: 'center',
                        backgroundColor: '#3F77A5',
                        fontSize: '16px',
                        fontWeight: '600',
                        fontFamily: "'WixMadeforDisplay', sans-serif",
                        lineHeight: '27px',
                        letterSpacing: '0px',
                        color: '#FFFFFF',
                        borderBottom: '2px solid #3F77A5',
                        borderRight: '1.83px solid rgba(255,255,255,0.2)',
                      }}
                    >
                      {col.label}
                    </th>
                  );
                })}
              </tr>
            </thead>

            {/* ── tbody: sections + rows ── */}
            <tbody>
              {SECTIONS.map((section) => (
                <>
                  {/* Section label row */}
                  <tr key={`section-${section.title}`}>
                    <td style={sectionTd}>{section.title}</td>
                    {visibleCols.map((col) => (
                      <td
                        key={col.key}
                        style={{
                          ...sectionEmptyTd,
                          borderLeft: '1px solid #DCDCDC',
                        }}
                      />
                    ))}
                  </tr>

                  {/* Feature rows */}
                  {section.rows.map((row) => (
                    <tr key={row.feature}>
                      <td style={featureTd}>{row.feature}</td>
                      {visibleCols.map((col) => (
                          <td
                            key={col.key}
                            style={{
                              ...tdBase,
                              backgroundColor: '#F9F9F9',
                              borderLeft: '1px solid #E4E4E4',
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                              <Cell value={row.values[col.idx]} />
                            </div>
                          </td>
                      ))}
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </Box>
      </Box>
    </Box>
  );
}
