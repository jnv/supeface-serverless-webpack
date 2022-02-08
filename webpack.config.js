const path = require('path');
const slsw = require('serverless-webpack');
// npm i --save-dev copy-webpack-plugin
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  entry: slsw.lib.entries,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    fallback: {
      'coffee-script': false,
    },
  },
  target: 'node',
  externals: {
    vm2: 'commonjs2 vm2',
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: 'superface', to: 'superface', toType: 'dir' }],
    }),
  ],
};
