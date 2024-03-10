/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#c2410c",
                    // DEFAULT: "#FC3303",
                },
                secondary: {
                    DEFAULT: "#0e7490",
                    // DEFAULT: "#03CCFC",
                },
            },
        },
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
