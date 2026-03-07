'use client';

/**
 * Navigation hook that uses Next.js router for page transitions
 * while maintaining backward compatibility with react-router-dom API.
 *
 * This replaces react-router-dom's useNavigate() in components that
 * need to trigger Next.js page navigations (Navbar, Footer, etc.)
 */
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export function useAppNavigate() {
  const router = useRouter();

  const navigate = useCallback((path, options = {}) => {
    if (options?.replace) {
      router.replace(path);
    } else {
      router.push(path);
    }
  }, [router]);

  return navigate;
}

/**
 * Location hook that uses Next.js pathname
 */
import { usePathname } from 'next/navigation';

export function useAppLocation() {
  const pathname = usePathname();
  return { pathname };
}
