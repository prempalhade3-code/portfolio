/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Chivo Mono', 'monospace'],
        mono: ['Chivo Mono', 'monospace'],
      },
      colors: {
        primary: '#0A0A0A',
        secondary: '#0D8746',
        tertiary: '#FDFDFD',
      },
    },
  },
  plugins: [],
};
