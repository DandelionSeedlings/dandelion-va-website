/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          900: '#0a1628',
          800: '#0f1d33',
          700: '#162544',
          600: '#1e3358',
          500: '#2a4570',
        },
        'gold': {
          DEFAULT: '#C9A227',
          light: '#E8D5A3',
          dark: '#A88420',
          pale: '#F5ECD0',
        },
        'cream': '#FAF8F3',
        'teal-accent': '#008080',
        'coral-accent': '#E85D4E',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'script': ['"Dancing Script"', 'cursive'],
        'sans': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
