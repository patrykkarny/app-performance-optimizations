import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import path from 'path';
import autoprefixer from 'autoprefixer';

const devMode = process.env.NODE_ENV !== 'production';

const config = {
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
  },
  devtool: devMode ? 'cheap-module-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'), // eslint-disable-line
                autoprefixer({
                  grid: true,
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [{
          loader: 'url-loader',
          options: { limit: 8192 },
        }, {
          loader: 'image-webpack-loader',
          options: { bypassOnDebug: true },
        }],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        }],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
  ],
};

if (!devMode) {
  config.externals = {
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components',
    },
  };
}

export default config;

