const path = require('path');
module.exports = {
    mode: 'development',// 不同的mode下webpack有不同的行为
    devtool: 'none',// 不生成sourcemap
    entry: './src/index.js',// 我们们会此文件出发，找到此模块依赖的模块，进行输出
    output: {//指定输出的目录和文件名
        path: path.resolve(__dirname, 'dist'),// dist目录的绝对路径
        filename: '[name].js', // 打包后的文件名
    },
    // 告诉 webpack如何解析loader路径
    resolveLoader: {
        modules: [
            path.resolve(__dirname, 'loaders'), "node_modules"
        ]
    },
    module: {
        rules: [
            {
                test: /\.jpg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options:{
                            limit:8*1024
                        }
                    }
                ]
            }
        ]
    }
}
