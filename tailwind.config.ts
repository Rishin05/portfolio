
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                md: "2rem",
                lg: "4rem",
            },
        },
        extend: {
            fontFamily: {
                sans: ["Archivo-Regular", "sans-serif"], 
                serif: ["ClashDisplay-Semibold", "serif"],
            },
            animation: {
                'move-left' : 'move-left 1s linear infinite',
                'move-right' : 'move-right 1s linear infinite'
            },
            keyframes: {
                'move-left': {
                    '0%' : {
                        transform: 'translateX(0%)'
                    },
                    '100%': {
                        transform: 'translateX(-50%)'
                    }
                },
                'move-right': {
                    '0%' : {
                        transform: 'translateX(-50%)'
                    },
                    '100%': {
                        transform: 'translateX(0%)'
                    }
                }
            },
            maskImage: {
                linearGradient: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            },
            colors: {
                'custom-dark': '#101720', 
                'gradient-s': "#F9B16E",
                'gradient-e': '#F68080'
              },
            

        },
        screens: {
            sm: "375px",
            md: "768px",
            lg: "1200px",
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
export default config;
