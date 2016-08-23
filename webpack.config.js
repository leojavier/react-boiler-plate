var path = require('path')

module.exports = {
  entry: './main.jsx',
  output: {
    path: path.join(__dirname, '/public/'),
    filename: 'bundle.js'
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  devServer: {
    inline: true,
    port: 3333,
    contentBase: 'public'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
