const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const ExtractCSS = new ExtractTextPlugin('assets/styles/[name].css');
const ExtractHTML = new ExtractTextPlugin('[name].html');

module.exports = (env) => {
  const e = env;
  return {
    context: path.resolve(__dirname, 'source'),
    entry: {
      index: './scripts/index.js',
    },
    output: {
      filename: 'assets/scripts/[name].js',
      path: path.resolve(__dirname, 'distribution'),
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
      },
      {
        test: /\.(html|pug)$/,
        exclude: '/source/vue-app/',
        use: ExtractHTML.extract({
          use: [
            {
              loader: 'html-loader'
            }, {
              loader: 'pug-html-loader'
            },
          ],
        }),
      }, {
        test: /\.(sass|scss|css)$/,
        use: ExtractCSS.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
              },
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'group-css-media-queries-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        }),
      }, {
        test: /\.(png|jpg|webp|svg?)(\?.+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: '../../assets/images/',
          outputPath: 'assets/images/',
        },
      }, {
        test: /\.(woff|woff2?)(\?.+)?$/,
        loader: 'file-loader',
        options: {
          name(file) {
            const stt = file.replace(/\\/g, '/').split('/');
            const name = `${stt[stt.length - 2]}/${stt[stt.length - 1]}`;
            return name;
          },
          outputPath: '../fonts/',
          emitFile: false,
        },
      },
      ],
    },
    devServer: {
      contentBase: [path.resolve(__dirname, 'static/')],
      compress: true,
      historyApiFallback: true,
      host: '0.0.0.0',
      port: 3030,
      https: false,
      open: true,
      overlay: true,
      useLocalIp: false,
    },
    plugins: [
      ExtractCSS,
      ExtractHTML,
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        minChunks: 2,
      }),
      new StyleLintPlugin(),
    ],
  };
};
