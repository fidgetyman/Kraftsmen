module.exports = {
  parser: 'postcss-scss',
  plugins: {
    'stylelint': {
      syntax: 'scss'
    },
    'postcss-import': {},
    'precss': {},
    'postcss-browser-reporter': {},
    'autoprefixer': {},
    'cssnano': {},
    'postcss-base64': {
      extensions: ['.svg']
    },
  },
  sourceMap: 'inline'
}
