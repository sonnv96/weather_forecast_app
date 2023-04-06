/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      jpBlack: 'NotoSansJP-Black',
      interBlack: 'Inter-Black',
      interLight: 'Inter-Light',
      interBold: 'Inter-Bold',
      interMedium: 'Inter-Medium',
    },
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      light: '#ffffff',
      orange: {
        300: '#FFCC21',
        400: '#FF963C',
        500: '#EA6C00'
      },
      secondary: {
        300: '#8FE9D0'
      },
      dark: {
        500: '#414141',
        600: '#2E2E2E'
      },
      gray: {
        400: '#777777'
      }
    }
  },
  plugins: []
};
