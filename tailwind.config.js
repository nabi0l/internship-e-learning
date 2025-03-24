/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./html/**/*.html","./components/**/*.html","./js/**/*.js",],
  theme: {
    extend: {
      colors:{
        navColor:'#A17755',
        accentColor:'#F6F4F5',
        heroText:'#5D4737',
        button:'#A7947A',
      },
      backgroundImage: {
        'home-gradient': 'linear-gradient(to right, #5D4737, #A17755)',
        'course-gradient': 'linear-gradient(to bottom, #5D4737,  #A7947A)',
      },

      containerWidths: {
        'carousel': 'calc(300px * 4 + 24px)',
      },

      spacing: {
        'card-width': '300px',
        'card-gap': '6px',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.carousel-container': {
          '@apply flex-none w-[calc(300px_*_4+24px)] p-0 overflow-hidden scroll-smooth':
          {},
        },
        '.carousel-card': {
          '@apply flex-none w-[300px] mx-6':
          {},
        },
        '.carousel-mask': {
          '@apply mask-image-[linear-gradient(to_right,black_calc(100%-1px),transparent_calc(100%-1px))] mask-mode-pad [-webkit-mask-image:linear-gradient(to_right,black_calc(100%-1px),transparent_calc(100%-1px))] [-webkit-mask-mode:pad]':
          {},
        },
      });
    },
  ],
}
