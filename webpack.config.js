import { join } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const entry = join(__dirname, '/src');
export const mode = process.env.NODE_ENV;
export const resolve = {
  extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
};
export const output = {
  path: join(__dirname, '/dist'),
  filename: 'bundle.js',
};
export const module = {
  rules: [
    {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [{ loader: 'file-loader' }],
    },
    {
      test: /\.svg$/,
      loader: 'file-loader',
    },
  ],
};
export const plugins = [
  new HtmlWebpackPlugin({
    inject: 'true',
    template: join(__dirname, '/public'),
    filename: join(__dirname, '/dist'),
  }),
];
