module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      '1/4': '304px'
    },
    maxHeight: {
      '2/4': '568px'
    },

    extend: {
      colors: {
        corapenas: '#40B25C',
        corapenas2: '#A3F9B9'
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['disabled'],
      textColor: ['disabled']
    }
  },
  plugins: []
}
