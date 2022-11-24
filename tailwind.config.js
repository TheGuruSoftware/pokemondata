/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'w-1': "url('/w1.jpg')",
        'w-2': "url('/w2.jpg')",
        'w-3': "url('/w3.jpg')",
        'w-4': "url('/w4.jpg')",
      }),
    },
  },
  plugins: [],
}