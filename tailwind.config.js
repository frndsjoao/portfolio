/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      'Poppins': ['Poppins', 'ui-sans-serif', 'system-ui'],
      'CGaramond': ['"Cormorant Garamond"', 'ui-serif', 'system-ui'],
      'Literata': ['Literata', 'ui-serif', 'system-ui'],
    },
    extend: {
      colors: {
        'custom-white': '#F9F8F7',
        'custom-sand-50': '#EDEAE4',
        'custom-sand-300': '#CEC6BB',
        'custom-blue-800': '#1C425E',
        'custom-gray-700': '#3F403E',
      }
    } 
  },
  plugins: [],
}
