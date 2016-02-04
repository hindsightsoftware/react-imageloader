import path from 'path';
import webpack from 'webpack';

export default {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'standalone'),
    filename: 'react-imageloader.js',
    library: 'ReactImageLoader',
    libraryTarget: 'umd',
    target: 'web',
  },
  externals: ['react', {
    react: 'react'
  }],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react', 'stage-0']
      }
    }, ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
