const path = require('path');

module.exports = {
  entry: './src/entry.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: "./build/"
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      }, {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      }, {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          },
        ],
      },
    ],
  },
};

// const webpack = require("webpack");
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const extractCSS = new ExtractTextPlugin('../build/[name].css');

// module.exports = {
//   entry: "./src/entry.js",
//   output: {
//     path: __dirname + "/build",
//     filename: "main.js"
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.css$/,
//         loader: extractCSS.extract("style-loader", "css-loader")
//       }, {
//         test: /\.scss$/i,
//         loader: extractCSS.extract(['css', 'sass'])
//       }, {
//         test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
//         loader: "url?limit=10000&minetype=application/font-woff"
//       }, {
//         test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
//         loader: "url?limit=10000&mimetype=application/octet-stream"
//       }, {
//         test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
//         loader: "file"
//       }, {
//         test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
//         loader: "url?limit=10000&mimetype=image/svg+xml"
//       }, {
//         test: /\.(jpe?g|png|gif|svg)$/i,
//         loader: 'url?limit=10000!img?progressive=true'
//       }, {
//         test: /\.coffee$/,
//         loader: "coffee-loader"
//       }, {
//         test: /\.(coffee\.md|litcoffee)$/,
//         loader: "coffee-loader?literate"
//       }
//     ]
//   },
//   amd: {
//     jQuery: true
//   },
//   plugins: [
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false
//       }
//     }), new webpack.ProvidePlugin({
//       "$": "jquery",
//       "jquery": "jQuery",
//       "windows.jQuery": "jquery"
//     }), extractCSS
//   ]
// };
