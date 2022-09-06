/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['OpenSans', 'Helvetica', 'sans-serif'],
      'serif': ['Garamond', 'serif'],
    },
    extend: {
      colors: {
        'dark': '#211a1d',
      }
    },
  },
  plugins: [],
}