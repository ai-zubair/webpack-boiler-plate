const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const modeConfig = (envMode) =>
  require(`./build-utils/webpack.${envMode}`)(envMode);
const loadPresets = require('./build-utils/loadPresets');
const path = require('path');

console.log(path.resolve(__dirname, 'src'));

module.exports = (
  { mode = 'production', presets = '' } = { mode: 'production', presets: '' }
) =>
  merge(
    {
      mode,
      context: path.resolve(__dirname, 'src'),
      entry: './index.js',
      devtool: 'source-map',
      output: {
        filename: 'bundle.js',
      },
      module: {
        rules: [
          {
            test: /\.jpe?g$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 5000,
                },
              },
            ],
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin(),
        new webpack.ProgressPlugin({
          modules: true,
          entries: true,
          activeModules: true,
        }),
      ],
    },
    modeConfig(mode),
    loadPresets(presets)
  );
