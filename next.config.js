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
};

module.exports = nextConfig;
