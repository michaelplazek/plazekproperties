'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: true,
  entry: _path2.default.resolve(__dirname, 'src/index'),
  target: 'web',
  output: {
    path: _path2.default.resolve(__dirname, '/dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  node: {
    fs: 'empty'
  },
  devServer: {
    contentBase: _path2.default.resolve(__dirname, 'src')
    // stats: 'errors-only'
  },
  plugins: [new _webpack2.default.EnvironmentPlugin(['AWS_ACCESS_KEY_ID', 'AWS_SECRET_ACCESS_KEY'])],
  module: {
    loaders: [{ test: /\.js$/, include: [_path2.default.join(__dirname, 'src')], loaders: ['babel'] }, { test: /\.json$/, loader: 'json-loader' }, { test: /(\.css)$/, loaders: ['style', 'css'] }, { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' }, { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' }, { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' }, { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }]
  }
};