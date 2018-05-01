const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/client/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/dist')
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      { test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      { test: /\.scss/, loader: 'style-loader!css-loader!sass-loader' },
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: '!pug-loader!src/client/index.pug'
    })
  ]
}
