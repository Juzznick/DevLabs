/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg) translateY(2rem) translateX(-5rem)' },
          '50%': { transform: 'rotate(3deg) translateY(-2rem) translateX(5rem)' },
        },
      },
      animation: {
        wiggle: 'wiggle 5s ease-in-out infinite'
      },
      colors: {
        'spclpurple': '#914FE5',
      },
    },
  },
  plugins: [],
}

