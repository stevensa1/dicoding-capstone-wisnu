/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                'red-orange': {
                    50: '#fff2f1',
                    100: '#ffe3e1',
                    200: '#ffcac7',
                    300: '#ffa5a0',
                    400: '#ff726a',
                    500: '#f8453b',
                    600: '#e6271c',
                    700: '#c11d14',
                    800: '#a01b14',
                    900: '#841e18',
                    950: '#480a07',
                },
                'system-black': '#2D2D2D',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
