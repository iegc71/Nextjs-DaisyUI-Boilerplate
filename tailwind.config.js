/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/daisyui/dist/**/*.{js,ts,jsx,tsx}',
    'node_modules/react-daisyui/dist/**/*.{js,ts,jsx,tsx}',
  ],
  /* eslint-disable global-require */
  plugins: [require('daisyui')],
};
