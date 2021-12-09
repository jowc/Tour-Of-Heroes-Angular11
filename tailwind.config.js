module.exports = {
  mode: 'jit',
  purge: [
    './dist/**/*.html',
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.ts',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        'primary': '#6E00FF'       }),
      fontFamily: {
        'quest': ['Questrial', 'san-serif'],
        'lato': ['Lato', 'san-serif'],
        'mont': ['Montserrat', 'san-serif']
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
