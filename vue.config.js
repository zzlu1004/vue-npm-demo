const path = require('path')
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
// compression-webpack-plugin
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
    assetsDir: 'static',
    // publicPath: './',
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    configureWebpack: config => {
        // 解除包体积限制
        let performance = {
            hints: false,
            // 入口起点的最大体积
            maxEntrypointSize: 1048576, // 设置为1MB
            // 生成文件的最大体积
            maxAssetSize: 5242880, // 5MB
            // 只给出 js 文件的性能提示
            assetFilter: function (assetFilename) {
                return assetFilename.endsWith(".js");
            }
        };
        // 打包生产环境将console删除
        if (process.env.NODE_ENV == "production") {
            Object.assign(config, {
                // optimization,
                performance,
                plugins: [
                    ...config.plugins,
                    new CompressionWebpackPlugin({
                        test: /\.js$|\.html$|\.css$|\.jpg$|\.jpeg$|\.png/, // 需要压缩的文件类型
                        threshold: 10240, // 归档需要进行压缩的文件大小最小值，我这个是10K以上的进行压缩
                        deleteOriginalAssets: false, // 是否删除原文件
                        minRatio: 0.8
                    })
                ]
            });
        }
    },
    chainWebpack: config => {
        config.module
        .rule('js')
        .include
            .add(resolve('packages'))
            .end()
        .use('babel')
            .loader('babel-loader')
            .tap(options => {
                return options
            });
    },
    css: {
        extract: true
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.31.120:19000', // 开发环境
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
}