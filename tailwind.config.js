const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      serif: ['merriweather', ...defaultTheme.fontFamily.serif]
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#111827',
      primary: '#155e75',
      secondary: '#3730a3',
      tertiary: '#a5b4fc'
    },
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))'
      }
    }
  },
  plugins: [require('prettier-plugin-tailwindcss'), require('@tailwindcss/forms')]
}
