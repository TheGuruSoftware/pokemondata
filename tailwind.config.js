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
      gradientColorStops: (theme) => ({
        'primary': 'rgba(var(--color-primary), <alpha-value>)',
        'secondary': 'rgba(var(--color-secondary), <alpha-value>)',
        'hard': 'rgba(var(--color-hard), <alpha-value>)',
        'light': 'rgba(var(--color-light), <alpha-value>)',
      }),
      backgroundColor: (theme) => ({
        'primary': 'rgba(var(--color-primary), <alpha-value>)',
        'secondary': 'rgba(var(--color-secondary), <alpha-value>)',
        'hard': 'rgba(var(--color-hard), <alpha-value>)',
        'light': 'rgba(var(--color-light), <alpha-value>)',
      }),
      textColor: (theme) => ({
        'primary': 'rgba(var(--color-text-primary), <alpha-value>)',
        'secondary': 'rgba(var(--color-text-secondary), <alpha-value>)',
        'light': 'rgba(var(--color-text-light), <alpha-value>)',
        'hover': 'rgba(var(--color-text-hover), <alpha-value>)',
        'muted': 'rgba(var(--color-text-muted), <alpha-value>)',
      }),
      borderColor: (theme) => ({
        'primary': 'rgba(var(--color-border-primary), <alpha-value>)',
        'secondary': 'rgba(var(--color-border-secondary), <alpha-value>)',
        'hard': 'rgba(var(--color-border-hard), <alpha-value>)',
        'hover': 'rgba(var(--color-border-hover), <alpha-value>)',
        'light': 'rgba(var(--color-border-light), <alpha-value>)',
      }),
      outlineColor: (theme) => ({
        'primary': 'rgba(var(--color-outline-primary), <alpha-value>)',
        'secondary': 'rgba(var(--color-outline-secondary), <alpha-value>)',
        'hard': 'rgba(var(--color-outline-hard), <alpha-value>)',
        'light': 'rgba(var(--color-outline-light), <alpha-value>)',
        'hover': 'rgba(var(--color-outline-hover), <alpha-value>)',
      }),

    },
  },
  plugins: [],
}