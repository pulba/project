/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      josefin: ["Josefin Sans Variable", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      cinzel: ["Cinzel Decorative", "system-ui"],
      cormorant: ["Cormorant Variable", "serif"],
      alex: ["Alex Brush", "cursive"],
      dyna: ["Dynalight", "cursive"],
      great: ["Great Vibes", "cursive"],
      haviland: ["Mr De Haviland", "cursive"],
      kaushan: ["Kaushan Script", "cursive"],
      montecarlo: ["MonteCarlo", "cursive"],
      nautigal: ["The Nautigal", "cursive"],
      pacifico: ["Pacifico", "cursive"],
      dafoe: ["Mr Dafoe", "cursive"],
      birth: ["Birthstone", "cursive"],
      smooch: ["Smooch", "cursive"],
      amiri: ["Amiri", "serif"],
    },
    extend: {
    },
  },
  
  plugins: [
    plugin(function ({ addVariant }) {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant('current', '&.active')
    })
  ]
};
