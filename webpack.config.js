
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // Just to analyze which module is taking more memory

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean:true, // this is added to generate only one bundle file
        assetModuleFilename:'[name].[ext]',
    },
    devtool:'source-map',// very important to debug js code as it will show error in source file along with line number
    devServer:{
        static:{
            directory:path.resolve(__dirname,'dist')
        },
        port:3000,
        open:true,
        hot:true,
        compress:true,
        historyApiFallback:true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use: {
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test:/\.(png|jpg|jpeg|svg|gif)$/,
                type:'asset/resource'
            }
        ]

    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'RMS Webpack App',
            filename:'index.html',
            template:'src/template.html'
        }),
        new BundleAnalyzerPlugin()
    ]

}