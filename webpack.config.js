const path = require('path')
const webpack = require('webpack')

const host = '0.0.0.0'
const port = '8080'
const bindAddr = 'http://' + host + ':' + port
const srcDir = path.resolve(__dirname, 'src')
const pubDir = path.resolve(__dirname, 'dist')
const loaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
    // query: {
    //   presets: ['es2015', 'react']
    // }
  }
]

module.exports = [
  {
    context: srcDir,
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?' + bindAddr,
      'webpack/hot/only-dev-server',
      'babel-polyfill',

      path.resolve(srcDir, 'app.jsx')
    ],
    output: {
      path: path.resolve(pubDir, 'assets'),
      filename: 'client.js'
    },
    devServer: {
      hot: true,
      port: port,
      host: host,
      contentBase: pubDir,
      publicPath: bindAddr
    },
    module: {
      loaders: loaders
    },
    resolve: {
      modules: [srcDir, 'node_modules']
      // NOTE: unnecessary for webpack2
      // extensions: ['js', '.jsx']
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
  },
  {
    name: 'server',
    context: srcDir,
    entry: {
      app: path.resolve(srcDir, 'server.jsx')
    },
    output: {
      path: path.resolve(pubDir, 'assets'),
      filename: 'server.js',
      libraryTarget: 'commonjs2'
    },
    module: {
      loaders: loaders
    },
    resolve: {
      modules: [srcDir, 'node_modules']
    }
  }
]
