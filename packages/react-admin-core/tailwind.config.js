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
    presets: [require('@genstackio/react-admin-ui/tailwind.config')],
};
