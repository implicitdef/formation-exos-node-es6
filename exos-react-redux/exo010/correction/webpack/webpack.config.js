var path = require('path');
var webpack = require("webpack");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public/dist')
  },
  module : {
    rules : [
      {
        test : /\.js$/,
        exclude: /node_modules/,
        use : [
          {
            loader: "babel-loader",
            // "options" est parfois nommé "query" dans la doc (ancienne syntaxe)
            options: {
              presets: ['latest']
            }
          }
        ]
      }
    ]
  }
};
