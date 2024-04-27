/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'HomeBg': "url('./src/assets/HomeBg.png')",
        'TeamsBg': "url('./src/assets/HomeBg.png')",
      },
      spacing: {
        'about-width': '1536px',
        'about-height': '1002px',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 5s ease-out 1s infinite',
      },
      keyframes: {
        'infinite-scroll': {
          "0%": {transform: "translateX(0)" },
          "100%": {transform: "translateX(-100%)"},
        },
      },
    colors: {
        'home-gradient-top': 'rgba(217, 217, 217, 0.06)',
        'home-gradient-bottom': 'rgba(255, 255, 255, 0.2)',
        'teams-bg-color': 'rgba(57, 108, 84, 1)',
      },
    fontFamily: {
        'Nokora': ["Nokora", 'sans-serif'],
      }, 
    },
  },
  plugins: [],
}