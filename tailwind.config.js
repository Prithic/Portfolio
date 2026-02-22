/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#020617', // Extremely dark navy
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Or 'Outfit', 'sans-serif'
      },
    },
  },
  plugins: [],
}
