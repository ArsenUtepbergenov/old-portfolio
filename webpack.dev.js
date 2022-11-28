const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './app.js',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body',
    }),
  ],
  devServer: {
    server: 'http',
    port: 8080,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: true,
    compress: true,
    open: true,
    client: {
      overlay: {
        errors: true,
      },
      progress: true,
      reconnect: 3,
    },
  },
}
