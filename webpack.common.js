const 
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx', ".cshtml"]
      },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },      
    plugins: [
        new HtmlWebpackPlugin({
            inject: "body",
            template: "./src/views/shared/_LayoutTemplate.cshtml",
            filename: path.resolve("./src/views/shared/_Layout.cshtml")
        })
    ],
    // devServer: {
    //   contentBase: './dist'
    // }
  };