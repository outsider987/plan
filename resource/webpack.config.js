const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.tsx',
    // another: './src/another-module.tsx',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
     alias: {
      '~': path.resolve(__dirname, 'src/'),
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[chunkhash].js',
    publicPath: '/'
  },
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    static: path.join(__dirname, 'dist'),
    open: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)?$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
        // exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 80 * 1024, // 当图片小于80kb时采用base64的方式打包，大于则以图片形式打包。
          name: "[hash:10].[ext]", // 每次webpack构建打包会生成一串不重复的hash码，[hash:10]则是去hash的前十位，[ext]取源文件的后缀名。
          outputPath: "public", // 输出目录，output定义了输出目录为build，此处图片输出目录为build/static/img/XXX文件。
          esModule: false, // 默认使用es6语法解析，html-loader使用的

        },
      },

      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
      {
        // this should be /\.handlebars$/
        test: /\.hbs$/,
        exclude: /(node_modules)/,
        loader: 'handlebars-loader'
      }
    ]
  },
  plugins: [

    new CleanWebpackPlugin({
      verbose: true,
    }),
    new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      // test: /\.html$/,
      // exclude: [/node_modules/, require.resolve('./index.html')],
      template: './public/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 5000,
      // minRemainingSize: 0, (Webpack 5 才有此選項)
      maxSize: 25000,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          chunks: 'initial',
          name: 'vendors',
          priority: 20,
          enforce: true,
        },
        // 抽離公用模組
        common: {
          chunks: 'initial',
          minSize: 0,
          name: 'common',
          minChunks: 2,
          priority: 10,
        },
      },
    },
  },



}