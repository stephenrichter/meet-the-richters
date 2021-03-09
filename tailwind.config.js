module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        '1/3': '1fr 2fr',
        '2/3': '2fr 1fr',
      },
      minHeight: {
        '1/4': '25vh',
        '1/2': '50vh',
        '3/4': '75vh',
      },
      zIndex: {
        '-10': '-10',
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1152px',
        // => @media (min-width: 1152px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
