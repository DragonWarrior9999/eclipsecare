/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: 'var(--primary)',
        navy: 'var(--navy)',
        babyblue: 'var(--babyblue)',
        offwhite: 'var(--offwhite)',
        primarydark: 'var(--primarydark)'
      },
      screens:{
        'xs': '500px',
        'xxs': '460px'
      },
      fontSize: {
        'h1-base': '4.5rem',
        'h1-sm': '3rem',
        'h2-base': '3.2rem',
        'h2-sm': '2.6rem',
        'h3-base': '2.4rem',
        'h3-sm': '2rem'
      }

    },
  },
  plugins: [],
}

