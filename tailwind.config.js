/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: '#23272a',
        darkpanel: '#2f3136',
      },
      backgroundImage: {
        'gradient-orange-yellow': 'linear-gradient(90deg, #ff8800 0%, #ffd600 100%)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
