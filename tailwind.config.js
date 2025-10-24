/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#130F1D',
          //light: '#6366F1',
          //dark: '#4338CA',
        },
        secondary: {
          DEFAULT: '#FFBD0A', // 255 189 10
          //light: '#34D399',
          //dark: '#059669',
        },
      },
    },
  },
  plugins: [],
}