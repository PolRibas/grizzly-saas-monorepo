const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          white: '#ffffff',
          black: '#000000',
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'], // Definir Montserrat como fuente predeterminada
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontSize: '2.25rem', // 36px
              fontWeight: '700',
              color: 'var(--foreground)',
              lineHeight: '1.2',
            },
            h2: {
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontSize: '1.875rem', // 30px
              fontWeight: '700',
              color: 'var(--foreground)',
              lineHeight: '1.3',
            },
            h3: {
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontSize: '1.5rem', // 24px
              fontWeight: '600',
              color: 'var(--foreground)',
              lineHeight: '1.4',
            },
            p: {
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontSize: '1rem', // 16px
              lineHeight: '1.6',
              color: 'var(--foreground)',
            },
            a: {
              fontWeight: '600',
              color: 'var(--foreground)',
              '&:hover': {
                color: '#ec6b38',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
};
