const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      serif: ['merriweather', ...defaultTheme.fontFamily.serif]
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
