/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./public/**/*.{html,js}",
        "./src/**/*.{html,js}"
    ],
    theme: {
        extend: {},
        screens: {
            'xl': '1400px',
        },
    },
    plugins: [],
}