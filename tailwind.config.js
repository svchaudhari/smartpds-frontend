/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    extend: {
      spacing: {
        xs: 'calc(1rem * 0.25)', // 0.25 * --space
        sm: 'calc(1rem * 0.5)', // 0.5 * --space
        md: 'calc(1rem * 1.5)', // 1.5 * --space
        lg: 'calc(1rem * 2)', // 2 * --space
      },
      fontSize: {
        xxs: '4px',
        xs: '8px',
        thin: '10px',
        small: '12px',
        light: '14px',
        normal: 'var(--text-normal)',
        medium: '24px',
        large: '32px',
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        ultraBold: 800,
      },
      colors: {
        blue: {
          5: '#f5f9ff',
          10: '#f4f7fe',
          110: '#cbd5e1',
          160: '#496ddb',
          200: '#94a3b8',
          300: '#011a5a',
          350: '#1d3670',
          700: '#030229',
          890: '#000d2a',
        },
        black: {
          5: '#f7f7f7',
          100: '#666666',
          200: '#a1a1a1',
          210: '#ddd',
          220: '#dedede',
          300: '#4d4c4c',
          400: '#343434',
          500: '#9c9c9c',
          510: '#757575',
          600: '#202020',
          710: '#414141',
          810: '#3b3939',
          910: '#272727',
        },
        green: {
          10: '#f2fcfa',
          40: '#c2f0e8',
          190: '#14e544',
          240: '#4caf50',
          250: '#4fa394',
          260: '#31b079',
          270: '#31b07966',
          390: '#006c51',
        },
        red: {
          170: '#ff495c',
          175: '#ed5c41',
          180: '#da2f2f',
        },
        pink: {
          170: '#f44336',
        },
        white: {
          400: '#ffffff',
        },
      },
      boxShadow: {
        100: '0 4px 16px 0 rgba(40, 40, 40, 0.08)',
        150: '0 18px 40px 0 rgba(112, 144, 176, 0.12)',
        200: '18px 0 40px 0 rgba(112, 144, 176, 0.12)',
        120: '0 1px 12px 0 rgba(40, 40, 40, 0.08)',
      },
      borderRadius: {
        0: '0px',
        2: '2px',
        4: '4px',
        6: '6px',
        8: '8px',
        10: '10px',
        16: '16px',
        rounded: '50%',
      },
      maxWidth: {
        default: '1280px',
        custom: 'calc(100% - 4rem)', // For smaller screens
      },
    },
    fontFamily: {
      'plus-jakarta': ['Plus Jakarta Sans', 'serif'],
    },
  },
  plugins: [
    plugin(function addBaseFunction({ addBase, theme }) {
      addBase({
        ':root': {
          '--space': '1rem',
          '--primary': theme('colors.blue.5'),
          '--dark-blue': theme('colors.blue.700'),
          '--dark-secondary': theme('colors.green.390'),
          '--dark-text-1': theme('colors.black.100'),
          '--font-normal': theme('fontSize.normal'),
          '--font-large': theme('fontSize.large'),
          '--font-medium': theme('fontWeight.medium'),
          '--font-semi-bold': theme('fontWeight.semiBold'),
          '--font-bold': theme('fontWeight.bold'),
          '--font-ultra-bold': theme('fontWeight.ultraBold'),
        },
      });
    }),
  ],
};
