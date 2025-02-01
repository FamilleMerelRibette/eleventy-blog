/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/**/*.{html,njk,md}",
    "./content/**/*.{html,njk,md}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'comic': ['"Comic Sans MS"', 'cursive'],
      },
    },
  },
  plugins: [],
}
