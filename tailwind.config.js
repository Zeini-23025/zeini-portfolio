/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                kde: {
                    blue: '#3daee9',
                    dark: '#232629',
                    panel: '#2a2e32',
                    window: '#31363b',
                }
            },
            animation: {
                'boot-text': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
}
