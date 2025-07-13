/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#fe2c55',
                'hover-primary': '#f45e7c',
                'text-color': '#333',
                'secondary-text': 'rgba(22, 24, 35, 0.5)',
                'bg-search': 'rgba(22, 24, 35, 0.06)',
                'border-search': 'rgba(22, 24, 35, 0.3)',
                'hover-bg': 'rgba(22, 24, 35, 0.03)',
                'border-light': 'rgba(22, 24, 35, 0.12)',
                'check-blue': '#20d5ec',
            },
            width: {
                'layout-width': '1150px',
                'search-width': '361px',
                'sidebar-width': '356px',
                'search-btn': '52px',
            },
            height: {
                'header-height': '60px',
                'search-height': '46px',
            },
            spacing: {
                'layout-spacer': '24px',
                'search-spacer': '9px',
            },
            borderRadius: {
                search: '92px',
            },
            fontFamily: {
                proxima: ['ProximaNova', 'sans-serif'],
            },
            fontSize: {
                xs: '1.2rem',
                sm: '1.4rem',
                base: '1.6rem',
                lg: '1.8rem',
                xl: '2rem',
                '2xl': '2.2rem',
            },
        },
    },
    plugins: [],
};
