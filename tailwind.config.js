// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        italianno: ["Italianno", "cursive"], // Define a fonte Italianno
        itim: ["Itim", "cursive"], // Define a fonte Itim
        inria: ["Inria Sans", "sans-serif"], // Define a fonte Inria Sans
      },
      colors: {
        purple: {
          light: 'rgba(156, 0, 154, 0.19)', // Roxo Claro
          default_light:'#D580D8',
          default: '#9C009A', // Roxo
          dark: '#830281', // Roxo Escuro
        },
        yellow: {
          light: 'rgba(238, 230, 5, 0.25)', // Amarelo Claro
          default: '#EEE605', // Amarelo
          dark: '#C2BD24', // Amarelo Curcuma
        },
        green: {
          light: 'rgba(47, 189, 18, 0.30)', // Verde Bem Claro
          default: 'rgba(47, 189, 18, 0.75)', // Verde Claro
          dark: '#2FBD12', // Verde
        },
        payment:{
          background: '#AB8BAB',
          background_btn_footer:'#8403AB',
          background_btn_footer_dark:'#830281',
          background_box:'#754F74',
          txt_line_border: '#2C032B',
          text_btn_footer:'#D2D613',
        },
        textShadow: {
          'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',
          'md': '4px 4px 6px rgba(0, 0, 0, 0.5)',
          'lg': '6px 6px 8px rgba(0, 0, 0, 0.5)',
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          textShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '6px 6px 8px rgba(0, 0, 0, 0.5)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
