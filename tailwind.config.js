module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    typography: {
      default: {
        css: {
          color: '#fff',
          h1: {color: '#fff',},
          h2: {color: '#fff',},
          h3: {color: '#fff',},
          a: {
            color: '#3182ce',
            '&:hover': {
              color: '#2c5282',
            },
          },
        },
      },
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
