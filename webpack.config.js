//const path = require('path');

module.exports = {
    mode: 'development',
    //mode: 'production',
    devtool: 'inline-source-map',
    entry: {
      common: './src/common.js',
      comments: './src/comments.js'
    },
    output: {
      filename: './[name].js'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
}