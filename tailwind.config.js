module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'airbnb-rausch': '#FF5A5F',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
