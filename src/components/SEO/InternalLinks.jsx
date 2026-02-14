import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Internal Links Component for VMukti
 * - Improves crawlability by adding contextual internal links
 * - Boosts page authority through strategic link distribution
 * - Helps Google understand site structure and content relationships
 *
 * Usage:
 *   <InternalLinks currentPath="/solution/video-management-system" />
 *   <InternalLinks category="solutions" exclude={['/solution/vms']} />
 */

const LINK_GROUPS = {
  solutions: [
    { path: '/solution/video-management-system', label: 'Video Management System (VMS)', description: 'Manage 10,000+ cameras with AI analytics' },
    { path: '/solution/enterprise-management-system', label: 'Enterprise Management System', description: 'Unified security management platform' },
    { path: '/solution/integrated-command-control-center', label: 'Command & Control Center', description: 'Centralized monitoring for smart cities' },
    { path: '/solution/ai-video-analytics', label: 'AI Video Analytics', description: 'Deep learning powered video intelligence' },
    { path: '/solution/face-recognition', label: 'Face Recognition', description: 'Real-time facial identification system' },
    { path: '/solution/anpr-lpr', label: 'ANPR / LPR', description: 'Automatic number plate recognition' },
    { path: '/solution/cloud-surveillance', label: 'Cloud Surveillance', description: 'Cloud-based video management' },
    { path: '/solution/edge-ai', label: 'Edge AI', description: 'On-device AI processing at the edge' },
  ],
  industries: [
    { path: '/industry/banking', label: 'Banking & Finance' },
    { path: '/industry/healthcare', label: 'Healthcare' },
    { path: '/industry/smart-city', label: 'Smart City' },
    { path: '/industry/retail', label: 'Retail' },
    { path: '/industry/manufacturing', label: 'Manufacturing' },
    { path: '/industry/education', label: 'Education' },
    { path: '/industry/government', label: 'Government' },
    { path: '/industry/oil-gas', label: 'Oil & Gas' },
    { path: '/industry/transportation', label: 'Transportation' },
    { path: '/industry/hospitality', label: 'Hospitality' },
    { path: '/industry/warehouse', label: 'Warehouse & Logistics' },
    { path: '/industry/critical-infrastructure', label: 'Critical Infrastructure' },
    { path: '/industry/construction', label: 'Construction' },
    { path: '/industry/agriculture', label: 'Agriculture' },
    { path: '/industry/ports-maritime', label: 'Ports & Maritime' },
    { path: '/industry/mining', label: 'Mining' },
  ],
  core: [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'About VMukti' },
    { path: '/contact-us', label: 'Contact Us' },
    { path: '/book-a-demo', label: 'Book a Demo' },
    { path: '/blog', label: 'Blog' },
    { path: '/careers', label: 'Careers' },
  ],
  regional: [
    { path: '/usa/video-surveillance-solutions', label: 'USA Solutions' },
    { path: '/uk/video-surveillance-solutions', label: 'UK Solutions' },
  ],
};

const InternalLinks = ({
  category = 'solutions',
  currentPath = '',
  exclude = [],
  maxLinks = 6,
  title = 'Explore More',
  variant = 'grid', // 'grid' | 'inline' | 'footer'
  className = '',
}) => {
  const links = (LINK_GROUPS[category] || [])
    .filter((link) => link.path !== currentPath && !exclude.includes(link.path))
    .slice(0, maxLinks);

  if (links.length === 0) return null;

  if (variant === 'inline') {
    return (
      <nav className={`seo-internal-links-inline ${className}`} aria-label="Related pages">
        <span style={{ color: '#6b7280', fontSize: '14px', marginRight: '8px' }}>
          Related:
        </span>
        {links.map((link, i) => (
          <React.Fragment key={link.path}>
            {i > 0 && <span style={{ color: '#4b5563', margin: '0 6px' }}>|</span>}
            <Link
              to={link.path}
              style={{ color: '#2563eb', textDecoration: 'none', fontSize: '14px' }}
            >
              {link.label}
            </Link>
          </React.Fragment>
        ))}
      </nav>
    );
  }

  return (
    <nav
      className={`seo-internal-links ${className}`}
      aria-label={title}
      style={{ margin: '32px 0' }}
    >
      {title && (
        <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#111827' }}>
          {title}
        </h3>
      )}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: variant === 'footer' ? 'repeat(auto-fill, minmax(180px, 1fr))' : 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '12px',
        }}
      >
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              display: 'block',
              padding: variant === 'footer' ? '8px 0' : '16px',
              borderRadius: variant === 'footer' ? '0' : '8px',
              backgroundColor: variant === 'footer' ? 'transparent' : '#f9fafb',
              border: variant === 'footer' ? 'none' : '1px solid #e5e7eb',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
          >
            <span style={{ color: '#2563eb', fontWeight: 500, fontSize: '15px' }}>
              {link.label}
            </span>
            {link.description && variant !== 'footer' && (
              <span
                style={{
                  display: 'block',
                  color: '#6b7280',
                  fontSize: '13px',
                  marginTop: '4px',
                }}
              >
                {link.description}
              </span>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export { LINK_GROUPS };
export default InternalLinks;
