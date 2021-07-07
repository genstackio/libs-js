module.exports = {
    mode: 'jit',
    purge: {
        content: ['./src/**/*.tsx', './src/**/*.ts'],
        options: {
            safelist: {
                standard: [/theme-/],
            },
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
            },
            colors: {
                primary: 'rgba(var(--color-primary), var(--tw-bg-opacity, 1))',
                secondary: 'rgba(var(--color-secondary), var(--tw-bg-opacity, 1))',
                success: 'rgba(var(--color-success), var(--tw-bg-opacity, 1))',
                info: 'rgba(var(--color-info), var(--tw-bg-opacity, 1))',
                warning: 'rgba(var(--color-warning), var(--tw-bg-opacity, 1))',
                danger: 'rgba(var(--color-danger), var(--tw-bg-opacity, 1))',
                light: 'rgba(var(--color-light), var(--tw-bg-opacity, 1))',
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
                light: 'rgba(var(--color-light), var(--tw-text-opacity, 1))',
                dark: 'rgba(var(--color-dark), var(--tw-text-opacity, 1))',
                clear: 'rgba(var(--color-clear), var(--tw-text-opacity, 1))',
                pure: 'rgba(var(--color-pure), var(--tw-text-opacity, 1))',
            },
            textColors: {
                filled_primary: 'rgba(var(--color-text-primary-filled), var(--tw-text-opacity, 1))',
                contained_primary: 'rgba(var(--color-text-primary-contained), var(--tw-text-opacity, 1))',
                outlined_primary: 'rgba(var(--color-text-primary-outlined), var(--tw-text-opacity, 1))',
                filled_primary2: 'rgba(var(--color-text-primary2-filled), var(--tw-text-opacity, 1))',
                contained_primary2: 'rgba(var(--color-text-primary2-contained), var(--tw-text-opacity, 1))',
                outlined_primary2: 'rgba(var(--color-text-primary2-outlined), var(--tw-text-opacity, 1))',
                filled_secondary: 'rgba(var(--color-text-secondary-filled), var(--tw-text-opacity, 1))',
                contained_secondary: 'rgba(var(--color-text-secondary-contained), var(--tw-text-opacity, 1))',
                outlined_secondary: 'rgba(var(--color-text-secondary-outlined), var(--tw-text-opacity, 1))',
                filled_secondary2: 'rgba(var(--color-text-secondary2-filled), var(--tw-text-opacity, 1))',
                contained_secondary2: 'rgba(var(--color-text-secondary2-contained), var(--tw-text-opacity, 1))',
                outlined_secondary2: 'rgba(var(--color-text-secondary2-outlined), var(--tw-text-opacity, 1))',
                contained_success: 'rgba(var(--color-text-success-contained), var(--tw-text-opacity, 1))',
                contained_info: 'rgba(var(--color-text-info-contained), var(--tw-text-opacity, 1))',
                contained_warning: 'rgba(var(--color-text-warning-contained), var(--tw-text-opacity, 1))',
                contained_danger: 'rgba(var(--color-text-danger-contained), var(--tw-text-opacity, 1))',
                contained_light: 'rgba(var(--color-text-light-contained), var(--tw-text-opacity, 1))',
                contained_dark: 'rgba(var(--color-text-dark-contained), var(--tw-text-opacity, 1))',
            },
            selectedRowTableColors: {
                primary: 'rgba(var(--color-table-row-selected-primary), var(--tw-text-opacity, 1))',
                secondary: 'rgba(var(--color-table-row-selected-secondary), var(--tw-text-opacity, 1))',
                success: 'rgba(var(--color-table-row-selected-success), var(--tw-text-opacity, 1))',
                info: 'rgba(var(--color-table-row-selected-info), var(--tw-text-opacity, 1))',
                warning: 'rgba(var(--color-table-row-selected-warning), var(--tw-text-opacity, 1))',
                danger: 'rgba(var(--color-table-row-selected-danger), var(--tw-text-opacity, 1))',
                light: 'rgba(var(--color-table-row-selected-light), var(--tw-text-opacity, 1))',
                dark: 'rgba(var(--color-table-row-selected-dark), var(--tw-text-opacity, 1))',
            },
            chartColors: {
                filled_primary: [
                    'rgba(var(--color-chart-primary-filled-1), var(--tw-text-opacity, 1))',
                    'rgba(var(--color-chart-primary-filled-2), var(--tw-text-opacity, 1))',
                    'rgba(var(--color-chart-primary-filled-3), var(--tw-text-opacity, 1))',
                ],
                contained_primary: [
                    'rgba(var(--color-chart-primary-contained-1), var(--tw-text-opacity, 1))',
                    'rgba(var(--color-chart-primary-contained-2), var(--tw-text-opacity, 1))',
                    'rgba(var(--color-chart-primary-contained-3), var(--tw-text-opacity, 1))',
                ],
                outlined_primary: [
                    'rgba(var(--color-chart-primary-outlined-1), var(--tw-text-opacity, 1))',
                    'rgba(var(--color-chart-primary-outlined-2), var(--tw-text-opacity, 1))',
                    'rgba(var(--color-chart-primary-outlined-3), var(--tw-text-opacity, 1))',
                ],
                filled_secondary: [
                    'rgba(var(--color-chart-secondary-filled-1), var(--tw-text-opacity, 1))',
                    'rgba(var(--color-chart-secondary-filled-2), var(--tw-text-opacity, 1))',
                    'rgba(var(--color-chart-secondary-filled-3), var(--tw-text-opacity, 1))',
                ],
                contained_secondary: [
                    'rgba(var(--color-chart-secondary-contained-1), var(--tw-text-opacity, 1))',
                    'rgba(var(--color-chart-secondary-contained-2), var(--tw-text-opacity, 1))',
                    'rgba(var(--color-chart-secondary-contained-3), var(--tw-text-opacity, 1))',
                ],
                outlined_secondary: [
                    'rgba(var(--color-chart-secondary-outlined-1), var(--tw-text-opacity, 1))',
                    'rgba(var(--color-chart-secondary-outlined-2), var(--tw-text-opacity, 1))',
                    'rgba(var(--color-chart-secondary-outlined-3), var(--tw-text-opacity, 1))',
                ],
            },
            chartBgColors: {
                filled_primary: [
                    'rgba(var(--filled_primary_chart_bg_color1), var(--tw-bg-opacity, 1))',
                    'rgba(var(--filled_primary_chart_bg_color2), var(--tw-bg-opacity, 1))',
                ],
                contained_primary: [
                    'rgba(var(--contained_primary_chart_bg_color1), var(--tw-bg-opacity, 1))',
                    'rgba(var(--contained_primary_chart_bg_color2), var(--tw-bg-opacity, 1))',
                ],
                outlined_primary: [
                    'rgba(var(--outlined_primary_chart_bg_color1), var(--tw-bg-opacity, 1))',
                    'rgba(var(--outlined_primary_chart_bg_color2), var(--tw-bg-opacity, 1))',
                ],
                filled_secondary: [
                    'rgba(var(--filled_secondary_chart_bg_color1), var(--tw-bg-opacity, 1))',
                    'rgba(var(--filled_secondary_chart_bg_color2), var(--tw-bg-opacity, 1))',
                ],
                contained_secondary: [
                    'rgba(var(--contained_secondary_chart_bg_color1), var(--tw-bg-opacity, 1))',
                    'rgba(var(--contained_secondary_chart_bg_color2), var(--tw-bg-opacity, 1))',
                ],
                outlined_secondary: [
                    'rgba(var(--outlined-secondary_chart_bg_color1), var(--tw-bg-opacity, 1))',
                    'rgba(var(--outlined-secondary_chart_bg_color2), var(--tw-bg-opacity, 1))',
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
