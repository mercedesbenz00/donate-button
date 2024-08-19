const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js', // Entry point for your application
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'public'), // Output directory
    clean: true, // Clean the output directory before each build
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use babel-loader for transpiling
          options: {
            presets: ['@babel/preset-env'], // Use @babel/preset-env
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Use this HTML template
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
  }),
  // new webpack.ProvidePlugin({
  //     process: 'process/browser',
  // }),
  ],
  mode: 'development', // Set mode to development for easier debugging
  devServer: {
    //contentBase: path.join(__dirname, 'dist'), // Serve content from the dist directory
    static: path.resolve(__dirname, 'dist'),
    compress: true, // Enable gzip compression
    port: 9000, // Port to run the dev server on
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
    setupMiddlewares: (middlewares, devServer) => {
      devServer.app.use((req, res, next) => {
        // Handle preflight requests
        if (req.method === 'OPTIONS') {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
          res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
          res.sendStatus(204);
        } else {
          next();
        }
      });
      return middlewares;
    },
  },
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      vm: require.resolve('vm-browserify'),
      "buffer": require.resolve("buffer")
    }, 
  },
};