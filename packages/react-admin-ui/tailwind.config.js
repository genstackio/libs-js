module.exports = {
  purge: {
    content: ['./src/**/*.tsx', './src/**/*.ts'],
    options: {
      safelist: {
        standard: [/^theme-/],
      }
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xl': '1921px',
      // => @media (min-width: 1921px) { ... }

      'lg': {'max': '1920px'},
      // => @media (max-width: 1920px) { ... }

      'md': {'max': '1280px'},
      // => @media (max-width: 1280px) { ... }

      'sm': {'max': '920px'},
      // => @media (max-width: 920px) { ... }

      'xs': {'max': '600px'},
      // => @media (max-width: 600px) { ... }
    },
    extend: {
      colors: {
        primary: '#7366FF',
        secondary: '#F73164',
        success: '#51BB25',
        info: '#A927F9',
        warning: '#F8D62C',
        danger: '#DC3544',
        light: '#F4F4F4',
        dark: '#2C323E',
      },
      borderWidth: {
        '1': '1px',
        '3': '3px',
      },
      boxShadow: {
        'container': '0px 8px 24px rgb(66 63 55 / 10%), 0px -2px 24px rgb(66 63 55 / 2%)',
        'block': '0 0 20px rgb(8 21 66 / 5%)',
      },
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
      },
      minHeight: {
        '250': '250px',
      }
    },
  },
  variants: {
    animation: ['responsive', 'hover', 'focus'],
    extend: {
    },
  },
  plugins: [],
}