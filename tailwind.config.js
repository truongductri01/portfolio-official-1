/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        color: {
            background: "fefefe",
        },
        fontSize: {
            normal: "1.5rem",
            subtitle: "2rem",
            xl: "4.5rem",

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
