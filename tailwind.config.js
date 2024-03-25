/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        borderColor: '#323232',
        lightOnDark: '#616161',
        blue: '#3897f0'
      }
    }
  },
  plugins: []
};
