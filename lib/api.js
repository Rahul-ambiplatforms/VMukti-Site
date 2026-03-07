/**
 * Server-side API helpers for VMukti Next.js
 * These run on the server during SSR/SSG — no client-side fetching
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://vmukti.com/backend/api';

/**
 * Fetch paginated blog list
 */
export async function getBlogs(page = 1, limit = 6, search = '', sort = 'latest', status = 'published') {
  try {
    const params = new URLSearchParams({
      page: String(page),
      limit: String(limit),
      status,
      sort,
    });
    if (search) params.set('search', search);

    const res = await fetch(`${API_URL}/blogs?${params}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) throw new Error(`Blog API error: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error('getBlogs error:', error);
    return { blogs: [], total: 0, page: 1, totalPages: 0 };
  }
}

/**
 * Fetch a single blog by URL slug
 */
export async function getBlogByUrlWords(urlWords) {
  try {
    const res = await fetch(`${API_URL}/blogs/urlWords/${urlWords}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error(`Blog not found: ${urlWords}`);
    const data = await res.json();
    return data.data || data;
  } catch (error) {
    console.error('getBlogByUrlWords error:', error);
    return null;
  }
}

/**
 * Fetch all blog slugs for sitemap generation
 */
export async function getAllBlogSlugs() {
  try {
    const slugs = [];
    let page = 1;
    let totalPages = 1;

    while (page <= totalPages) {
      const res = await fetch(`${API_URL}/blogs?page=${page}&limit=50&status=published`, {
        next: { revalidate: 86400 }, // Cache for 24 hours
      });

      if (!res.ok) break;
      const data = await res.json();

      if (data.blogs) {
        data.blogs.forEach(blog => {
          const slug = blog.metadata?.urlWords || blog.urlWords;
          if (slug) slugs.push(slug);
        });
      }

      totalPages = data.totalPages || 1;
      page++;
    }

    return slugs;
  } catch (error) {
    console.error('getAllBlogSlugs error:', error);
    return [];
  }
}

/**
 * Fetch job listings
 */
export async function getJobs(page = 1, limit = 10, status = 'active') {
  try {
    const res = await fetch(`${API_URL}/jobs?page=${page}&limit=${limit}&status=${status}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error(`Jobs API error: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error('getJobs error:', error);
    return { jobs: [], total: 0 };
  }
}
