/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Londrina Solid'],

      },
      backdropBlur: {
        sm: '4px', // Adjust the blur intensity as needed
      },
      colors: {
        'lyllw': '#0244a5',
        'yllw': '#6DCBD5 ',
        'blk': '#1E1E1E',
        'gry': '#454545'
      }
    },
  },
  plugins: [],
}