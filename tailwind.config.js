/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
       './components/**/*.{js,ts,jsx,tsx,mdx}',
       './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'romantic-pink': '#FFB6C1',
        'romantic-red': '#FF69B4',
      },
      fontFamily: {
        'romantic': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

