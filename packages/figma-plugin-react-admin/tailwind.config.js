module.exports = {
    mode: 'jit',
    purge: {
        content: [
            './lib/*.html',
        ],
        options: {
            safelist: {
                standard: [/^theme-/],
            },
        },
    },
    darkMode: false, // or 'media' or 'class'
};
