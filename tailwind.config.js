const { colors: defaultColors } = require('tailwindcss/defaultTheme');

const colors = {
    ...defaultColors,
    ...{
        'custom-purple': {
            500: '#242430',
            900: '#20202A',
        },
        'custom-grey': {
            100: '#FAFAFC',
            500: '#8C8C8E',
        },
        'custom-yellow': {
            500: '#FFC107',
        },
    },
};

module.exports = {
    prefix: '',
    important: true,
    purge: {
        enable: true,
        content: ['./src/**/*.{html,ts}'],
        preserveHtmlElements: false,
    },
    darkMode: 'class',
    theme: {
        colors: colors,
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
};
