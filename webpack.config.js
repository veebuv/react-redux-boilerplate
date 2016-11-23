const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new ExtractTextPlugin('style.css'),
];
if (process.env.PROD_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
  }));
}

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins,

  externals: {
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        presets: ['es2015', 'stage-0', 'react'],
        loaders: ['babel'], exclude: /node_modules/,
      },
      { test: /\.json$/, loader: 'json', exclude: /node_modules/ },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss?parser=postcss-scss'),
      },
      { test: /\.(png|jpg|jpeg|gif|svg|woff)$/,
        loader: 'file?name=[name].[ext]', exclude: /node_modules/,
      },
    ],
  },
  postcss() {
    return [
      require('autoprefixer')({
        browsers: [
          'last 2 Chrome versions',
          'Explorer >= 10',
          'last 2 Firefox versions',
          'Safari >= 8',
        ],
      }),
    ];
  },
};
