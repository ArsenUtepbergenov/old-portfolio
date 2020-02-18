const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './app.js',
  output: {
    publicPath: './',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'img',
              limit: 8192,
            },
          }
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './index.html',
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      filename: './projects/vue-ts-simple-games/index.html',
      template: './projects/vue-ts-simple-games/index.html',
      chunks: ['games']
    }),
    new HtmlWebpackPlugin({
      filename: './projects/sample-smacss/index.html',
      template: './projects/sample-smacss/index.html',
      chunks: ['smacss']
    }),
    new HtmlWebpackPlugin({
      filename: './projects/bem/index.html',
      template: './projects/bem/index.html',
      chunks: ['bem']
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 6,
          compress: true,
          output: {
            comments: false,
            beautify: false
          }
        }
      }),
      new OptimizeCSSPlugin({
        cssProcessorOptions: { safe: true, map: { inline: false } }
      })
    ]
  },
}