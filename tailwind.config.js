module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: ['.75rem', '1rem'], //font size, line height
      sm: ['.875rem', '1rem'],
      base: ['1rem', '1.25rem'],
      lg: ['1.25rem', '1.5rem'],
      xl: ['1.5rem', '1.75rem'],
      "2xl": ['2rem', '2rem'],
      "3xl": ['3rem', '3.25rem'],
      "4xl": ['4rem', '4.25rem'],
      "5xl": ['5rem', '5.25rem'],
      "6xl": ['6rem', '6.25rem'],
      "7xl": ['7rem', '7.25rem'],
      "8xl": ['8rem', '8.25rem'],
    },

    extend: {
      minHeight:{
        screenNavFoot: "calc(100vh - 10rem)", // (nav 4rm) + (footer 4rem) + (main margin top/bottom 2rem)
      },
      height:{
        screenNav: "calc(100vh - 4rem)", // (nav 4rm) + (footer 4rem) + (main margin top/bottom 2rem)
      },
      colors: {
        "primary-text": "var(--color-primary-text)",
        "secondary-text": "var(--color-secondary-text)",
        "primary-hover": "var(--color-primary-hover)",
        "secondary-hover": "var(--color-secondary-hover)",
        "primary-background": "var(--color-primary-background)",
        "secondary-background": "var(--color-secondary-background)",
        "primary-link": "var(--color-primary-link)",
        "primary-action": "var(--color-primary-action)",
        "primary-danger": "var(--color-primary-danger)"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}