module.exports = {
    mode: 'development',
    //mode: 'production',
    devtool: 'inline-source-map',
    entry: {
      common: [ "babel-polyfill", "./src/common.js" ],
      comments: './src/comments.js',
      index: './src/index.js',
      females: './src/females.js',
      males: './src/males.js',
      kitty: './src/kitty.js'
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