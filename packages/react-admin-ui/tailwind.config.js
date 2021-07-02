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
                primary: 'var(--primary-color)',
                secondary: 'var(--secondary-color)',
                success: 'var(--success-color)',
                info: 'var(--info-color)',
                warning: 'var(--warning-color)',
                danger: 'var(--danger-color)',
                light: 'var(--light-color)',
                dark: 'var(--dark-color)',
            },
            textColors: {
                filled_primary: 'var(--filled_primary_text_color)',
                contained_primary: 'var(--contained_primary_text_color)',
                outlined_primary: 'var(--outlined_primary_text_color)',
                filled_primary2: 'var(--filled_primary2_text_color)',
                contained_primary2: 'var(--contained_primary2_text_color)',
                outlined_primary2: 'var(--outlined_primary2_text_color)',
                filled_secondary: 'var(--filled_secondary_text_color)',
                contained_secondary: 'var(--contained_secondary_text_color)',
                outlined_secondary: 'var(--outlined_secondary_text_color)',
                filled_secondary2: 'var(--filled_secondary2_text_color)',
                contained_secondary2: 'var(--contained_secondary2_text_color)',
                outlined_secondary2: 'var(--outlined_secondary2_text_color)',
                contained_success: 'var(--contained_success_text_color)',
                contained_info: 'var(--contained_info_text_color)',
                contained_warning: 'var(--contained_warning_text_color)',
                contained_danger: 'var(--contained_danger_text_color)',
                contained_light: 'var(--contained_light_text_color)',
                contained_dark: 'var(--contained_dark_text_color)',
            },
            selectedRowTableColors: {
                primary: 'var(--primary_selected_row_table_color)',
                secondary: 'var(--secondary_selected_row_table_color)',
                success: 'var(--success_selected_row_table_color)',
                info: 'var(--info_selected_row_table_color)',
                warning: 'var(--warning_selected_row_table_color)',
                danger: 'var(--danger_selected_row_table_color)',
                light: 'var(--light_selected_row_table_color)',
                dark: 'var(--dark_selected_row_table_color)',
            },
            chartColors: {
                filled_primary: [
                    'var(--filled_primary_chart_color1)',
                    'var(--filled_primary_chart_color2)',
                    'var(--filled_primary_chart_color3)',
                ],
                contained_primary: [
                    'var(--contained_primary_chart_color1)',
                    'var(--contained_primary_chart_color2)',
                    'var(--contained_primary_chart_color3)',
                ],
                outlined_primary: [
                    'var(--outlined_primary_chart_color1)',
                    'var(--outlined_primary_chart_color2)',
                    'var(--outlined_primary_chart_color3)',
                ],
                filled_secondary: [
                    'var(--filled_secondary_chart_color1)',
                    'var(--filled_secondary_chart_color2)',
                    'var(--filled_secondary_chart_color3)',
                ],
                contained_secondary: [
                    'var(--contained_secondary_chart_color1)',
                    'var(--contained_secondary_chart_color2)',
                    'var(--contained_secondary_chart_color3)',
                ],
                outlined_secondary: [
                    'var(--outlined_secondary_chart_color1)',
                    'var(--outlined_secondary_chart_color2)',
                    'var(--outlined_secondary_chart_color3)',
                ],
            },
            chartBgColors: {
                filled_primary: ['var(--filled_primary_chart_bg_color1)', 'var(--filled_primary_chart_bg_color2)'],
                contained_primary: [
                    'var(--contained_primary_chart_bg_color1)',
                    'var(--contained_primary_chart_bg_color2)',
                ],
                outlined_primary: [
                    'var(--outlined_primary_chart_bg_color1)',
                    'var(--outlined_primary_chart_bg_color2)',
                ],
                filled_secondary: [
                    'var(--filled_secondary_chart_bg_color1)',
                    'var(--filled_secondary_chart_bg_color2)',
                ],
                contained_secondary: [
                    'var(--contained_secondary_chart_bg_color1)',
                    'var(--contained_secondary_chart_bg_color2)',
                ],
                outlined_secondary: [
                    'var(--outlined-secondary_chart_bg_color1)',
                    'var(--outlined-secondary_chart_bg_color2)',
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
