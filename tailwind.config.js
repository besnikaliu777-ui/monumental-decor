/**
 * Tailwind CSS configuration for Monumental Decor.
 *
 * The colour palette is inspired by luxury brands – deep blacks,
 * anthracite greys and warm gold accents. Dark mode is enabled via
 * the `class` strategy, which lets you toggle between light and dark
 * themes by adding or removing the `dark` class on the `<html>` element.
 */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#d4af37', // gold accent
        background: '#0b0b0b', // deep black for backgrounds
        anthracite: '#1f1f1f', // anthracite grey for surfaces
        surface: '#2a2a2a', // slightly lighter surfaces
        light: '#f5f5f5' // off‑white for light mode backgrounds
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif']
      }
    }
  },
  plugins: []
};