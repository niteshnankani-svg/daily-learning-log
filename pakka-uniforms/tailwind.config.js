/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F2340',
          50: '#EAEEF4',
          100: '#CBD5E3',
          200: '#9AAFC9',
          400: '#3C5B84',
          600: '#16304F',
          700: '#0F2340',
          800: '#0B1A30',
          900: '#081221',
        },
        khaki: {
          DEFAULT: '#B7A369',
          100: '#F1ECDD',
          200: '#E2D6B6',
          400: '#C7B481',
          600: '#B7A369',
          700: '#93824F',
        },
        teal: {
          DEFAULT: '#1E6E68',
          600: '#1E6E68',
          700: '#175650',
        },
        chalk: {
          DEFAULT: '#F6F4EE',
          100: '#FFFFFF',
          200: '#F6F4EE',
          300: '#EAE6DA',
        },
        signal: {
          DEFAULT: '#D9622B',
          600: '#D9622B',
          700: '#B84E1F',
        },
        ink: '#181410',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};
