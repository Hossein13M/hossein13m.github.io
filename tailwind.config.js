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
            900: '#656569',
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
        screen: {
            xs: { min: '320px', max: '640px' },
            sm: { min: '640px', max: '767px' },
            md: { min: '768px', max: '1023px' },
            lg: { min: '1024px', max: '1279px' },
            xl: { min: '1280px', max: '1535px' },
            '2xl': { min: '1536px' },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
};
