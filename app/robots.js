export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/backend/', '/*.map'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 5,
      },
      {
        userAgent: 'Yandex',
        allow: '/',
        crawlDelay: 10,
      },
      // Allow AI crawlers
      {
        userAgent: ['GPTBot', 'Claude-Web', 'PerplexityBot', 'Cohere-ai'],
        allow: '/',
      },
    ],
    sitemap: 'https://www.vmukti.com/sitemap.xml',
  };
}
