export default {
  type: 'js',
  entry: {
    index: './src/index.js'
  },
  config: {
    publicPath: '/',
    extraResolveModules: ['./src'],
    disableCSSModules: true
  },
  outputPath: './packages',
  libraryTarget: 'umd',
  library: 'platform',
  style: [],
  proxy: ''
}
