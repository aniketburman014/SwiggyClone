/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#FF5200', 
        'custom-footer':'#F0F0F5',
      },
    },
  },
  plugins: [],
}

