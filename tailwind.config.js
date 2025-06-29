/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#124e66', // blue-600
        secondary: '#748d92', // slate-800
        accent: '#d3d9d4', // orange-400
        background: '#212A31', // gray-100
        surface: '#ffffff',
        muted: '#2e3944', // slate-500
      },
    },
  },
  plugins: [],
};
