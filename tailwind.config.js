/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    container: {},
    h1: {
      color: "#030229",
    },
    extend: {
      colors: {
        blue: {
          200: "#94a3b8",
          300: "#011a5a",
          700: "#030229",
        },
        black: {
          100: "#666666",
          200: "#a1a1a1",
          300: "#4d4c4c",
        },
        green: {
          400: "#31b079",
          500: "#006c51",
          600: "#14e544",
        },
      },
    },
    fontFamily: {
      "plus-jakarta": ["Plus Jakarta Sans", "serif"],
    },
  },
  plugins: [
    plugin(function addBaseFunction({ addBase}) {
      addBase({
        ':root': {
            "--primary": '#f5f9ff',
            "--dark-slate-blue": '#1d3670',
            "--space": '1rem',
            "--dark-slate-blue": '#1d3670',
            "--dark-blue": '#030229',
            "--dark-secondary": '#006c51',
            "--dark-text-1": '#666',
            "--font-normal": '16px',
            "--font-large": '32px',
            "--font-medium": 500,
            "--font-semi-bold": 600,
            "--font-bold": 700,
            "--font-ultra-bold": 800,
        }
      });
    }),
  ],
};

