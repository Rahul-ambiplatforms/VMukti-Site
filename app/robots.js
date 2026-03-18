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
        userAgent: ['GPTBot', 'Claude-Web', 'PerplexityBot', 'Cohere-ai', 'ChatGPT-User', 'Google-Extended', 'Anthropic-ai', 'ClaudeBot', 'CCBot', 'Bytespider', 'YouBot', 'Meta-ExternalAgent', 'Baiduspider', 'DuckDuckBot'],
        allow: '/',
      },
    ],
    sitemap: 'https://vmukti.com/sitemap.xml',
  };
}
