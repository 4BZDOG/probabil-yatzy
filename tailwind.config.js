/** @type {import('tailwindcss').Config} */
// Ported from the Play CDN defaults: index.html had no inline tailwind.config.
// No dynamically assembled class names were found, so the safelist is empty.
// If one is added later (e.g. `bg-${color}-500`), list the full class names here.
module.exports = {
  content: ['./index.html'],
  safelist: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
