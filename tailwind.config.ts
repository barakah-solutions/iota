import type { Config } from "tailwindcss";

export default {
    content: ["index.html", "src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    white: "#FFFFFF",
                    "jet-black": "#232323",
                    "sea-blue": "#2F506C",
                    "apple-green": "#8BBA59",
                    "olive-green": "#BCBF4C",
                    "charcoal-purple": "#673C5C",
                },
            },
            fontFamily: {
                figtree: ["Figtree"],
                "red-hat-display": ["Red Hat Display"],
            },
        },
    },
    plugins: [],
} satisfies Config;
