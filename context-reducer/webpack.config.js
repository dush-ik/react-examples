import { resolve, join, dirname } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: './index.tsx',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devServer: {
    static: {
      directory: join(__dirname, 'public'), // Serve static files from the public directory
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  mode: 'development',
};
