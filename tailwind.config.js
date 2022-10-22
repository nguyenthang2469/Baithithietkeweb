/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./public/**/*.{html,js}",
        "./src/**/*.{html,js}"
    ],
    theme: {
        extend: {},
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1400px',
            '2xl': '1536px',
        },
    },
    plugins: [],
}