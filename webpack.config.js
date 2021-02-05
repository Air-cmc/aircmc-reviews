const { DefinePlugin } = require('webpack');
const path = require('path');

const dotenv = require('dotenv').config({
  path: path.join(__dirname, '.env')
}).parsed;


const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = (env) => {
  const envConfig = {};

  if (env.dev) {
    envConfig.HOST = 'localhost';
    envConfig.PORT = dotenv.PORT;
  } else if (env.prod) {
    envConfig.HOST = dotenv.HOST;
    envConfig.PORT = dotenv.PORT;
  }

  return {
    entry: `${SRC_DIR}/index.jsx`, //has reactDOM.render
    output: {
      filename: 'review-bundle.js',
      path: DIST_DIR//folder where index.html is
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)?/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          use: {
            loader: 'url-loader?limit=100000' }
        }
      ]
    },
    plugins: [
      new DefinePlugin({
        SERVICE_HOST: JSON.stringify(envConfig.HOST),
        SERVICE_PORT: JSON.stringify(envConfig.PORT)
      })
    ]
  };
};
