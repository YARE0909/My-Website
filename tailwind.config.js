/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 200ms ease-in-out',
        fullrotate: 'fullrotate 1000ms ease-in-out',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        fullrotate: {
          '0%': { transform: 'rotate(-360deg)' },
          
        }
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
}
