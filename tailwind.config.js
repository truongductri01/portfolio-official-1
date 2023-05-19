/** @type {import('tailwindcss').Config} */
export default {
    future: {
        hoverOnlyWhenSupported: true,
    },
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        color: {
            background: "fefefe",
        },
        fontSize: {
            normal: "1.25rem",
            subtitle: "1.5rem",
            xl: "3rem",

            // resume
            resumeTitle: "1.5rem",
            resumeSubtitle: "1.25rem",
            resumeDesc: "1rem",
            // title: ""
        },
        extend: {},
    },
    plugins: [],
};
