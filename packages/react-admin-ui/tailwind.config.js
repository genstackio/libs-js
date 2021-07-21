module.exports = {
    mode: 'jit',
    purge: {
        enabled: false,
        content: ['./src/**/*.tsx', './src/**/*.ts', './__stories__/configs/themes.ts'],
        options: {
            safelist: [/theme-/],
        },
    },
    darkMode: 'class', // or 'media' or 'class'
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
                '3/10': '30%',
                '7/10': '70%',
            },
            colors: {
                primary: 'rgba(var(--color-primary), var(--tw-bg-opacity, 1))',
                secondary: 'rgba(var(--color-secondary), var(--tw-bg-opacity, 1))',
                success: 'rgba(var(--color-success), var(--tw-bg-opacity, 1))',
                info: 'rgba(var(--color-info), var(--tw-bg-opacity, 1))',
                warning: 'rgba(var(--color-warning), var(--tw-bg-opacity, 1))',
                danger: 'rgba(var(--color-danger), var(--tw-bg-opacity, 1))',
                light: 'rgba(var(--color-light), var(--tw-bg-opacity, 1))',
                disabled: 'rgba(var(--color-disabled), var(--tw-bg-opacity, 1))',
                dark: 'rgba(var(--color-dark), var(--tw-bg-opacity, 1))',
                clear: 'rgba(var(--color-clear), var(--tw-bg-opacity, 1))',
                pure: 'rgba(var(--color-pure), var(--tw-bg-opacity, 1))',
            },
            textColor: {
                primary: 'rgba(var(--color-primary), var(--tw-text-opacity, 1))',
                secondary: 'rgba(var(--color-secondary), var(--tw-text-opacity, 1))',
                success: 'rgba(var(--color-success), var(--tw-text-opacity, 1))',
                info: 'rgba(var(--color-info), var(--tw-text-opacity, 1))',
                warning: 'rgba(var(--color-warning), var(--tw-text-opacity, 1))',
                danger: 'rgba(var(--color-danger), var(--tw-text-opacity, 1))',
                disabled: 'rgba(var(--color-disabled), var(--tw-text-opacity, 1))',
                light: 'rgba(var(--color-light), var(--tw-text-opacity, 1))',
                dark: 'rgba(var(--color-dark), var(--tw-text-opacity, 1))',
                clear: 'rgba(var(--color-clear), var(--tw-text-opacity, 1))',
                pure: 'rgba(var(--color-pure), var(--tw-text-opacity, 1))',
            },
            textColors: {
                filled_primary: 'rgba(var(--color-primary), var(--tw-text-opacity, 1))',
                contained_primary: 'rgba(var(--color-clear), var(--tw-text-opacity, 1))',
                outlined_primary: 'rgba(var(--color-primary), var(--tw-text-opacity, 1))',
                filled_secondary: 'rgba(var(--color-secondary), var(--tw-text-opacity, 1))',
                contained_secondary: 'rgba(var(--color-clear), var(--tw-text-opacity, 1))',
                outlined_secondary: 'rgba(var(--color-secondary), var(--tw-text-opacity, 1))',
                contained_success: 'rgba(var(--color-clear), var(--tw-text-opacity, 1))',
                contained_info: 'rgba(var(--color-clear), var(--tw-text-opacity, 1))',
                contained_warning: 'rgba(var(--color-clear), var(--tw-text-opacity, 1))',
                contained_danger: 'rgba(var(--color-clear), var(--tw-text-opacity, 1))',
                contained_disabled: 'rgba(var(--color-clear), var(--tw-text-opacity, 1))',
                contained_light: 'rgba(var(--color-clear), var(--tw-text-opacity, 1))',
                contained_dark: 'rgba(var(--color-clear), var(--tw-text-opacity, 1))',
            },
            chartColors: {
                filled_primary: [
                    'var(--color-chart-primary-standard-1)',
                    'var(--color-chart-primary-standard-2)',
                    'var(--color-chart-primary-standard-3)',
                ],
                contained_primary: [
                    'var(--color-chart-primary-inverted-1)',
                    'var(--color-chart-primary-inverted-2)',
                    'var(--color-chart-primary-inverted-3)',
                ],
                outlined_primary: [
                    'var(--color-chart-primary-standard-1)',
                    'var(--color-chart-primary-standard-2)',
                    'var(--color-chart-primary-standard-3)',
                ],
                filled_secondary: [
                    'var(--color-chart-secondary-standard-1)',
                    'var(--color-chart-secondary-standard-2)',
                    'var(--color-chart-secondary-standard-3)',
                ],
                contained_secondary: [
                    'var(--color-chart-secondary-inversed-1)',
                    'var(--color-chart-secondary-inversed-2)',
                    'var(--color-chart-secondary-inversed-3)',
                ],
                outlined_secondary: [
                    'var(--color-chart-secondary-standard-1)',
                    'var(--color-chart-secondary-standard-2)',
                    'var(--color-chart-secondary-standard-3)',
                ],
            },
            chartBgColors: {
                filled_primary: [
                    'var(--color-chart-primary-standard-bg-1)',
                    'var(--color-chart-primary-standard-bg-2)',
                ],
                contained_primary: [
                    'var(--color-chart-primary-inversed-bg-1)',
                    'var(--color-chart-primary-inversed-bg-2)',
                ],
                outlined_primary: [
                    'var(--color-chart-primary-standard-bg-1)',
                    'var(--color-chart-primary-standard-bg-2)',
                ],
                filled_secondary: [
                    'var(--color-chart-secondary-standard-bg-1)',
                    'var(--color-chart-secondary-standard-bg-2)',
                ],
                contained_secondary: [
                    'var(--color-chart-secondary-inversed-bg-1)',
                    'var(--color-chart-secondary-inversed-bg-2)',
                ],
                outlined_secondary: [
                    'var(--color-chart-secondary-standard-bg-1)',
                    'var(--color-chart-secondary-standard-bg-2)',
                ],
            },
            borderWidth: {
                1: '1px',
                3: '3px',
            },
            boxShadow: {
                container: '0px 8px 24px rgb(66 63 55 / 10%), 0px -2px 24px rgb(66 63 55 / 2%)',
                block: '0 0 20px rgb(8 21 66 / 5%)',
                'upper-block': '0 0 40px rgb(8 21 66 / 20%)',
                toolbar: '5px 5px 10px rgb(8 21 66 / 5%)',
                inside: 'inset 10px 10px 15px rgb(8 21 66 / 5%)',
                field: '0 3px 5px 1px rgb(115 102 255 / 10%)',
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
