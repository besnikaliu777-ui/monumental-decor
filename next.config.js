/**
 * @type {import('next').NextConfig}
 *
 * Internationalized routes are handled by the app/[lang] segment. Image
 * optimization is turned off because this project uses manually provided
 * assets rather than relying on the built-in optimization pipeline.
 */
const nextConfig = {
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
