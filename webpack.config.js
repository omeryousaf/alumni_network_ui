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
  }
};

module.exports = config;