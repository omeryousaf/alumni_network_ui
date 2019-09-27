require('./config.js');
const config = {
  entry: ['babel-polyfill', __dirname + '/src/app.jsx'],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module : {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test:/\.css$/,
      use:['style-loader','css-loader']
    }]
  },
  devServer: {
    contentBase: __dirname, // where the index.html must be present
    compress: true,
    port: process.env.LIVE_SERVER_PORT,
    historyApiFallback: true, // results in serving index.html for all non-matching routes
    proxy: {
      '/api': {
        target: process.env.PROXY_TO_DOMAIN
      }
    }
  }
};

module.exports = config;