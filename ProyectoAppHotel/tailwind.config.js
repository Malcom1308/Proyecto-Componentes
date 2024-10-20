/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryBg: '#F5F5F5',
        detailGreen: '#314E04',
        textGreen: '#72B85B'
      }
    },
  },
  plugins: [],
}

