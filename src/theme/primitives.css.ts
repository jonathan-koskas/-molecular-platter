import { createGlobalTheme } from "@vanilla-extract/css";

export const primitives = createGlobalTheme(':root', {
    typography: {
        size: {
            100: '0.694rem',
            200: '0.833rem',
            300: '1rem',
            400: '1.2rem',
            500: '1.44rem',
            600: '1.728rem',
            700: '2.074rem',
            800: '2.488rem',
            900: '2.986rem'
        },
        family: '"popins", sans-serif',
        weight: {
            300: '300',
            400: '400',
            600: '600',
        }
    },
    spacing: {
        scale: {
            "100": "0.25",
            "200": "0.5",
            "300": "0.75",
            "400": "1.25",
            "500": "2",
            "600": "3.25",
            "700": "5.25",
        },
        unit: "16px"
    },
    color: {
        neutral: {
            100: '#fff',
            300: '#767676',
            600: '#3F3F3F',
            700: '#2C2C2C',
            800: '#1a1a1a',
            900: '#111111'
        },
        red: {
            500: '#bc002d',
        }
    }
})
