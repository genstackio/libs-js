module.exports = {
    mode: 'jit',
    purge: {
        content: ['./src/**/*.tsx', './src/**/*.ts'],
        options: {
            safelist: {
                standard: [/^theme-/],
            },
        },
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            xl: '1921px',
            // => @media (min-width: 1921px) { ... }

            lg: { max: '1920px' },
            // => @media (max-width: 1920px) { ... }

            md: { max: '1280px' },
            // => @media (max-width: 1280px) { ... }

            sm: { max: '920px' },
            // => @media (max-width: 920px) { ... }

            xs: { max: '600px' },
            // => @media (max-width: 600px) { ... }
        },
        fontFamily: {
            title1: ['Rubik'],
            title2: ['Rubik'],
            title3: ['Rubik'],
            title4: ['Rubik'],
            title5: ['Rubik'],
            title6: ['Rubik'],
            title7: ['Rubik'],
            subtitle: ['Rubik'],
            underline: ['Rubik'],
            body: ['Rubik'],
            description: ['Rubik'],
            subsection: ['Roboto'],
            small: ['Rubik'],
        },
        extend: {
            width: {
                drawer: '280px',
            },
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
            textColors: {
                filled_primary: '#7366FF',
                contained_primary: 'white',
                outlined_primary: '#7366FF',
                filled_primary2: 'black',
                contained_primary2: 'white',
                outlined_primary2: 'black',
                filled_secondary: '#F73164',
                contained_secondary: 'white',
                outlined_secondary: '#F73164',
                filled_secondary2: 'black',
                contained_secondary2: 'black',
                outlined_secondary2: 'black',
                contained_success: 'white',
                contained_info: 'white',
                contained_warning: 'black',
                contained_danger: 'white',
                contained_light: 'black',
                contained_dark: 'white',
            },
            selectedRowTableColors: {
                primary: '#A9B7FC',
                secondary: '#A9B7FC',
                success: '#A9B7FC',
                info: '#A9B7FC',
                warning: '#A9B7FC',
                danger: '#A9B7FC',
                light: '#A9B7FC',
                dark: '#A9B7FC',
            },
            chartColors: {
                filled_primary: ['#29B6F6', '#F73164', '#FC740D'],
                contained_primary: ['#29B6F6', '#F73164', '#FC740D'],
                outlined_primary: ['#29B6F6', '#F73164', '#FC740D'],
                filled_secondary: ['#000', '#FC740D', '#29B6F6'],
                contained_secondary: ['#000', '#FC740D', '#29B6F6'],
                outlined_secondary: ['#000', '#FC740D', '#29B6F6'],
            },
            chartBgColors: {
                filled_primary: ['#FCF8FE', '#F7EEFF'],
                contained_primary: ['#FCF8FE', '#F7EEFF'],
                outlined_primary: ['#FCF8FE', '#F7EEFF'],
                filled_secondary: ['#FAFAFA', '#ECEFF1'],
                contained_secondary: ['#FAFAFA', '#ECEFF1'],
                outlined_secondary: ['#FAFAFA', '#ECEFF1'],
            },
            borderWidth: {
                1: '1px',
                3: '3px',
            },
            boxShadow: {
                container: '0px 8px 24px rgb(66 63 55 / 10%), 0px -2px 24px rgb(66 63 55 / 2%)',
                block: '0 0 20px rgb(8 21 66 / 5%)',
                'upper-block': '0 0 40px rgb(8 21 66 / 20%)',
                top: '20px 20px 20px rgb(8 21 66 / 5%)',
            },
            animation: {
                bounce200: 'bounce 1s infinite 200ms',
                bounce400: 'bounce 1s infinite 400ms',
            },
            minHeight: {
                250: '250px',
            },
            height: {
                sm: '8px',
                md: '16px',
                lg: '24px',
                xl: '48px',
                xxl: '82px',
            },
            fontSize: {
                xxl: '16rem',
                xxs: '0.6875rem',
            },
            maxWidth: {
                xxs: '12rem',
            },
        },
    },
    variants: {
        animation: ['responsive', 'hover', 'focus'],
        extend: {},
    },
    plugins: [],
};
