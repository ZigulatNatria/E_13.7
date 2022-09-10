const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    entry: './src/index.js',
   devServer: {},
    plugins: [
           new HtmlWebpackPlugin({
        title: 'Production',
      }),
    ],
    output: {
      filename: 'main.js',
    },
  };