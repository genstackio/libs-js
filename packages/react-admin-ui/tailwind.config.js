module.exports = {
  purge: {
    content: ['./src/**/*.tsx'],
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
      fontFamily: {
        custom1: ['Montserrat'],
        custom2: ['Poppins'],
      },
      colors: {
        blue: {
          custom: "#12509F", // white button text
          gradient1: "#2283C5",
          gradient2: "#12509F",
          gradient3: "#00E0FF",
          gradient4: "#0047FF",
        },
        orange: {
          custom: "#FFA026", // title-underline
          gradient1: "#FFBE6A",
          gradient2: "#FFA026",
        },
        gray: {
          custom: "#333333", // Paragraph
          custom2: "#A2A2A2", // Footer text
          custom3: "#989898", // Footer copyright
          gradient1: "#B9B9B9",
          gradient2: "#979797",
        },
        black: {
          custom: "#151515", // Footer bg
        },
        purple: {
          custom: "#FD739C", // Underline MenuAppBar
          gradient1: "#281AC8",
          gradient2: "#FD749B",
        },
        green: {
          gradient1: "#99FDD9",
          gradient2: "#1E62A1",
        },
      },
      spacing: {
        '108': '27rem',
        '120': '30rem',
        '132': '33rem',
      },
      borderWidth: {
        '1': '1px',
        '3': '3px',
      },
      boxShadow: {
        'container': '0px 8px 24px rgb(66 63 55 / 10%), 0px -2px 24px rgb(66 63 55 / 2%)',
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}