module.exports = {
    // publicPath: '',
    devServer: {
        // proxy: {
        //     "/api": {
        //         target: "http://localhost:8080",
        //         ws: true,
        //         changeOrigin: true,
        //         pathRewrite: {
        //             "^/api": "/mock"
        //         }
        //     },
        //     "/search": {
        //         target: "http://cp-tools.cn",
        //         changeOrigin: true,
        //         pathRewrite: {
        //             "^/search": "/search"
        //         }
        //     },
        // }
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require("postcss-px-to-viewport")({
                        viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750.
                        viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334.
                        unitPrecision: 3, // (指定`px`转换为视窗单位值的小数位数（很多时候无法整除).
                        viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw.
                        fontViewportUnit: "vw",
                        selectorBlackList: [], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名.
                        minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值.
                        mediaQuery: false, // 允许在媒体查询中转换`px`.
                        replace: true,
                        exclude: /(\/|\\)(node_modules)(\/|\\)/,
                    })
                ]
            }
        }
    }
    //     css: {
    //         // 启用 CSS modules
    //         modules: false,
    //         // 是否使用css分离插件
    //         extract: true,
    //         // 开启 CSS source maps?
    //         sourceMap: false,
    //         // css预设器配置项
    //         loaderOptions: {
    //             css: {},
    //             postcss: {
    //                 plugins: [
    //                     //remUnit这个配置项的数值是多少呢？？？ 通常我们是根据设计图来定这个值，原因很简单，便于开发。
    //                     //假如设计图给的宽度是750，我们通常就会把remUnit设置为75，这样我们写样式时，可以直接按照设计图标注的宽高来1:1还原开发。
    //                     require('postcss-px2rem')({
    //                         remUnit: 75
    //                     })
    //                 ]
    //             }
    //         }
    //     }
    // }
}