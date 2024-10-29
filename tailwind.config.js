// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        realOrange: '#FF7710',
        boldBlack: '#1C1B1A',
        accentYellow: '#FFC600',
      },
      fontFamily: {
        korean: ['Pretendard', 'sans-serif'],
        english: ['Montserrat', 'Gotham', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
