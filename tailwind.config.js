/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                val: {
                    red: '#ff4d6d',
                    pink: '#ff8fa3',
                    dark: '#590d22',
                    gold: '#ffd700',
                    bg: '#fff0f3',
                }
            },
            fontFamily: {
                cursive: [ '"Great Vibes"', 'cursive' ],
                sans: [ '"Outfit"', 'sans-serif' ],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
