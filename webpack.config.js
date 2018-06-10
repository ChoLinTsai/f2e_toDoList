const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const isProd = process.env.NODE_ENV === 'production';

const cssDev = require('./webpack.dev.js');
const cssProd = require('./webpack.prod.js');

const cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  output: {
    path: path.resolve(__dirname, 'docs/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: cssConfig
      },
      {
        test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/'
            }
          },
          // {
          //   loader: "image-webpack-loader"
          // }
        ]
      },
    ]
  },
  devServer: {
    stats: "errors-only",
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new ExtractTextPlugin({
      filename: './css/[name].css',
      disable: !isProd,
      allChunks: true
    })
  ]
}


console.log(isProd ? 'It is Production' : 'It is Devolopment');
