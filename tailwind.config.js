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
        'xs': '500px'
      }
    },
  },
  plugins: [],
}

