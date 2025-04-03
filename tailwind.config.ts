import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                border: {
                    DEFAULT: "hsl(var(--border))", // Ensure border is correctly defined
                },
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                primary: "#1a1147",
                cardBg: "#9b9ac7",
            },
        },
    },
    plugins: [],
}
export default config
