'use client';

import React from 'react';
import NextLink from 'next/link';
import { useRouter, usePathname, useParams as useNextParams } from 'next/navigation';

export const Link = React.forwardRef(({ to, href, children, ...props }, ref) => {
  return (
    <NextLink href={to || href || '#'} passHref legacyBehavior>
      <a ref={ref} {...props}>{children}</a>
    </NextLink>
  );
});

export function useNavigate() {
  const router = useRouter();
  return (path, options) => {
    if (options?.replace) {
      router.replace(path);
    } else {
      router.push(path);
    }
  };
}

export function useLocation() {
  const pathname = usePathname();
  return { pathname, search: '', hash: '', state: null };
}

export function useParams() {
  return useNextParams() || {};
}

// Ignore BrowserRouter, MemoryRouter as they were removed from providers
export const BrowserRouter = ({ children }) => <>{children}</>;
export const MemoryRouter = ({ children }) => <>{children}</>;
