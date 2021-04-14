const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'top-down': 'top-down 1s ease-in-out',
        'bottom-up': 'bottom-up 1s ease-in-out'
      },
      keyframes: {
        'top-down': {
          '0%': { transform: 'translatey(-100%)' },
          '100%': { transform: 'translatey(0)' },
        },
        'bottom-up': {
          '0%': { transform: 'translatey(0)' },
          '100%': { transform: 'translatey(-100%)'},
        }
      },
      colors: {
        'background': '#f6f4f2',
        'background-dark': '#121212',
        'material-dark': '#171717',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
      },
      gridTemplateColumns: {
        '1/3': '1fr 2fr',
        '2/3': '2fr 1fr',
        'grid-shift': '48px 1fr',
        'layout-md': '80px 80px 40px 1fr',
        'layout-lg': '80px 80px 120px 1fr 120px',
      },
      minHeight: {
        '1/4': '25vh',
        '1/2': '50vh',
        '3/4': '75vh',
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
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
        '2xl': '1152px',
        // => @media (min-width: 1152px) { ... }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.900"),
            a: {
              color: theme("colors.blue.700"),
              "&:hover": {
                color: theme("colors.blue.700"),
                textDecoration: "none",
              },
            },
            'font-weight': 300,
          },
        },

        dark: {
          css: {
            color: theme("colors.gray.400"),
            strong: {
              color: theme("colors.white")
            },
            blockquote: {
              color: theme('colors.gray.100')
            },
            a: {
              color: theme("colors.blue.200"),
              "&:hover": {
                color: theme("colors.blue.300"),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
