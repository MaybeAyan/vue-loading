const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  devtool: "source-map",
  // 模式
  // mode: 'development', // 开发模式 生成普通 js 文件
  mode: 'production', // 生产模式 生成 .min.js 压缩文件
  // 入口
  entry: path.join(__dirname, './src/index.js'),
  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, 'dist'),
    // filename: 'testH1.js', // 生成的文件名 对应 开发模式
    filename: 'loading.min.js', // 生成的文件名 对应 生产模式
    libraryTarget: 'umd', // 支持 ems / commontjs / requirejs 规范
    // libraryTarget: 'amd' // 支持 requirejs 规范
    umdNamedDefine: true
  },
  plugins: [
    new VueLoaderPlugin(),

  ],
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    },
      // {
      //   test: /\.js$/,
      //   use: ['babel-loader']
      // }
    ]
  }
}