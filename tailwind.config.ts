import type { Config } from "tailwindcss";

export default {
    content: ["index.html", "src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    white: "#ffffff",
                    "midnight-blue": "#2f505c",
                    "jet-black": "#232323",
                    "apple-green": "#8bba59",
                    "olive-green": "#bcbf4c",
                    "charcoal-purple": "#544851",
                },
            },
            fontFamily: {
                figtree: ["Figtree"],
                quicksand: ["Quicksand"],
            },
        },
    },
    plugins: [],
} satisfies Config;
