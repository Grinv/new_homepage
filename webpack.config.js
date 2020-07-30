const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = (env, argv) => ({
  entry: './src/entry.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: "./build/"
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './src/img/images/', to: 'img/' },
      ],
    }),
    new ImageminPlugin({
      disable: argv.mode !== 'production',
      test: /\.(jpe?g|png|gif|svg)$/i,
    })
  ],
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
});
