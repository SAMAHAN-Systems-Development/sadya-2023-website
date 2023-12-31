import type { Config } from 'tailwindcss';
const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

    // For Storybook
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        inter: 'var(--font-inter)',
        londrina: 'var(--font-londrina)',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-out',
      },
    },

    colors: {
      blue: 'rgb(var(--color-blue) / <alpha-value>)',
      orange: 'rgb(var(--color-orange) / <alpha-value>)',
      black: 'rgb(var(--color-black) / <alpha-value>)',
      white: 'rgb(var(--color-white) / <alpha-value>)',
      grey: 'rgb(var(--color-grey) / <alpha-value>)',
      hovergrey: 'rgb(var(--color-hover-grey) / <alpha-value>)',
      lightgrey: 'rgb(var(--color-light-grey) / <alpha-value>)',
      lightgold: 'rgb(var(--color-light-gold) / <alpha-value>)',
      lavander: 'rgb(var(--color-lavander) / <alpha-value>)',
      lightlavander: 'rgb(var(--color-light-lavander) / <alpha-value>)',
      crimson: 'rgb(var(--color-crimson) / <alpha-value>)',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
      },
    },
    screens: {
      xsm: '384px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
  },
  plugins: [
    plugin(function ({
      matchUtilities,
      theme,
      addUtilities,
    }: {
      addUtilities: Function;
      matchUtilities: Function;
      theme: Function;
    }) {
      matchUtilities(
        {
          'text-shadow': (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
      addUtilities({
        '.container-xs': {
          '@apply container max-w-[22] mx-auto xsm:px-0': {},
        },
        '.container-sm': {
          '@apply container max-w-[33rem] mx-auto sm:px-0': {},
        },
        '.container-md': {
          '@apply container max-w-[45rem] mx-auto md:px-0': {},
        },
        '.container-lg': {
          '@apply container max-w-[58rem] mx-auto lg:px-0': {},
        },
        '.container-xl': {
          '@apply container max-w-[71rem] mx-auto xl:px-0': {},
        },
        '.container-2xl': {
          '@apply container max-w-[81.5rem] mx-auto 2xl:px-0': {},
        },
      });
    }),
  ],
} satisfies Config;

export default config;
