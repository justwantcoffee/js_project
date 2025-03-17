const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const { name } = require('./package.json');

const webpackConfig = (env, argv) => {
  const mode = argv.mode;
  const isDevelopment = mode === 'development';

  return {
    mode: isDevelopment ? 'development' : 'production',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: `${name}.js`,
      publicPath: '/',
    },
    resolve: {
      extensions: ['...', '.jsx'],
    },
    devServer: {
      historyApiFallback: true,
      static: './static',
      hot: true,
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html',
      }),
      isDevelopment && new ReactRefreshWebpackPlugin(),
      !isDevelopment && new MiniCssExtractPlugin({}),
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { useBuiltIns: 'usage', corejs: '3.38' }],
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
            plugins: [
              '@babel/plugin-transform-runtime',
              isDevelopment && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                modules: {
                  auto: true,
                  namedExport: false,
                  localIdentName: isDevelopment
                    ? '[path][name]__[local]'
                    : '[name]__[local]--[hash:base64:5]',
                },
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['autoprefixer'],
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          type: 'asset/resource',
          generator: {
            filename: 'static/img/[name].[hash:8][ext]',
          },
        },
      ],
    },
  };
};

module.exports = webpackConfig;
