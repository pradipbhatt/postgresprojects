/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2507ac',
        secondary: '#e5ecfc',
        dark: '#1e1d22',
        light: '#e5ecfc',
      },
      backgroundColor: {
        dark: '#1e1d22',
        light: '#e5ecfc',
      },
    },
  },
  plugins: [],
}
