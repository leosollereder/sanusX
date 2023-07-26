/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent': 'var(--accent-color)',
        'accent-soft': 'var(--accent-color-soft)',
        'background-color': 'var(--background-color)',
        'base-white': 'var(--base-white)',
        'base-beige': 'var(--base-beige)',
        'button-color': 'var(--button-color)',
        'main-grey': 'var(--main-grey)',
        'light-grey': 'var(--light-grey)',
      },
    },
  },
  plugins: [],
}
