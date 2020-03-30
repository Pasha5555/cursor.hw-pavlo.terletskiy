const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: ["babel-polyfill", path.join(__dirname, 'src') + '/index.js'],
    output: {
        path: path.join(__dirname,'dist'),
        filename: '[name].js'
    },
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                ],
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/index.html"
    })],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    hot: true
  },
  mode: 'development'
};