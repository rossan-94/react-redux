const webpack = require('webpack');
//const envConfig = require()

module.exports = {
    // 1
    entry: './src/index.js',
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    // 2
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    // 3
    plugins: [
        new webpack.HotModuleReplacementPlugin()
      ],
      devServer: {
        contentBase: './dist',
        hot: true
      }
  };