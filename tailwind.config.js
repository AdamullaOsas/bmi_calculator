/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                blue: "#345FF6",
                gunmetal: "#253347",
                electricBlue: "#5E6E85",
            },
            screens: {
                lg: "1320px",
            },
        },
    },
    plugins: [],
};
