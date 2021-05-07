module.exports = {
    stories: [`${process.cwd()}/__stories__/**/*.stories.tsx`],
    "addons": [
        "@storybook/addon-essentials",
        '@storybook/addon-knobs/register',
        '@storybook/addon-a11y',
        {
            name: '@storybook/addon-storysource',
            options: {
                rule: {
                    test: [/\.stories\.tsx?$/],
                    include: [`${process.cwd()}/__stories__`],
                },
                loaderOptions: {
                    parser: 'typescript',
                },
            },
        },
        "@storybook/addon-links",
        '@storybook/addon-postcss',
        'storybook-mobile',
        'storybook-addon-apollo-client',
        'storybook-addon-themes',
        'storybook-tailwind-dark-mode',
        'storybook-addon-grid',
        '@whitespace/storybook-addon-html',
    ],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            loader: require.resolve('babel-loader'),
            options: {
                presets: ['@babel/preset-typescript', '@babel/preset-react'],
            },
        });

        config.module.rules.push({
            test: /\.css$/,
            loader: require.resolve('postcss-loader'),
            options: {
                sourceMap: true,
            },
        });

        config.resolve.extensions.push('.ts', '.tsx');
        config.module.rules = config.module.rules.map(rule => {
            if (
                String(rule.test) === String(/\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/)
            ) {
                return {
                    ...rule,
                    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
                }
            }

            return rule
        })
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack", "url-loader"],
        })
        config.resolve.alias = {
            ...config.resolve.alias,
            'fs': require('path').resolve(__dirname, 'fsMock.js')
        };
        return config;
    },
};