const { colors: defaultColors } = require('tailwindcss/defaultTheme');

const colors = {
    ...defaultColors,
    ...{
        'custom-purple': {
            100: '#3a3a4e',
            500: '#242430',
            900: '#20202A',
        },
        'custom-grey': {
            100: '#FAFAFC',
            200: '#e3e3e3',
            500: '#8C8C8E',
            900: '#656569',
        },
        'custom-yellow': {
            500: '#FFC107',
        },
        'custom-blue': {
            100: '#dbecff',
            200: '#89bcf5',
            400: '#063564',
            500: '#6ea9e3',
            600: '#22619f',
            700: '#c6daf8',
            900: '#afc8ec',
        },
    },
};

module.exports = {
    prefix: '',
    important: true,
    content: ['./src/**/*.{html,ts}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: colors,
            screen: {
                xs: { min: '320px', max: '640px' },
                sm: { min: '640px', max: '767px' },
                md: { min: '768px', max: '1023px' },
                lg: { min: '1024px', max: '1279px' },
                xl: { min: '1280px', max: '1535px' },
                '2xl': { min: '1536px' },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
};
