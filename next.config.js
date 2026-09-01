/**
 * @type {import('next').NextConfig}
 *
 * Internationalized routes are handled by the app/[lang] segment.
 *
 * Image optimization is enabled: the source artwork is stored as large PNG
 * files (around 2 MB each), which is a poor format for photographic content.
 * Next.js re-encodes them to AVIF or WebP at the size the visitor's screen
 * actually needs, which is the single biggest lever on page load time here.
 */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // The root layout now lives under app/[lang] so that <html lang> matches the
  // language being served. That leaves no page at "/", so the redirect to the
  // default language is handled here rather than by rendering a page.
  async redirects() {
    return [{ source: '/', destination: '/fr', permanent: false }];
  },
};

module.exports = nextConfig;
