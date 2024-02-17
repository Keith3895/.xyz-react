import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./cosmic/**/*.{ts,tsx,js,jsx}",
  "./components/**/*.{ts,tsx,js,jsx}" ],
  theme: {
    extend: {
      spacing: {
        '1/3': '33.333333%',
      },
      width: {
        112: '28rem',
        60: '60%',
      },
      height: {
        600: '31.5rem',
      },
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
        tertiary: {
          600: '#666370'
        },
        'custom-orange': {
          100: '#F9D4B3',
          200: '#F8C19E',
          300: '#F7AE89',
          400: '#F69B74',
          500: '#F5885F',
          600: '#EF8354',
          700: '#E76F51',
        }
      },
      animation: {
        marquee: 'marquee 150s linear infinite',
        marquee2: 'marquee2 150s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
