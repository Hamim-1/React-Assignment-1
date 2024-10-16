/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F26922',
        background: "#F4F4F5",
        secondary: '#71717A',
      },
      screens: {
        'xs': '540px',
        'sm': '640px',
        'md': '768px',
        'lg': '992px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}