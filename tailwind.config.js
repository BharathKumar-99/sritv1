/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#3b82f6",
      'primary-button': '#0ea5e9',
      'gray': '#e5e7eb',
      'text_grey': '#808080'
    }
  },
  plugins: [],
}
