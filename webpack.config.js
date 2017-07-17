module.exports = {
  devtool: 'eval-source-map', //Webpack在打包时可以为我们生成的source maps，这为我们提供了一种对应编译文件和源文件的方法，使得编译后的代码可读性更高，也更容易调试。
  entry:  "./app/main.js",//已多次提及的唯一入口文件
  output: {
    filename: "bundle.js"//打包后输出文件的文件名
  },
  module: {
    //在配置文件里添加css loader
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      //添加json loader
      {
        test: /\.json$/,
        loader: "json-loader"
      },

    ]
  },
  devServer: {
    // contentBase: "./public",//本地服务器所加载的页面所在的目录
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  }


}

