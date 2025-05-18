/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#22330D',
          light: '#3A5417',
          dark: '#1A2608',
        },
      },
      keyframes:{
        scroll:{
          '0%':{transform:'translateY(0)'},
          '100%':{transform:'translateY(-100%)'},
        },
      },
      animation:{
        scroll:'scroll 30s linear infinite',
      },
    },
  },
  plugins: [],
}
