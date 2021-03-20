const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack');

const config = {

    mode: 'development',

    entry: path.resolve(__dirname, './src/main.js'),

    stats: 'detailed',

    output: {
        filename: 'protoast-3d.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        pathinfo: true,

        library: {
            name: 'protoast3d',
            type: 'umd',
            // umdNamedDefine: true,
        },

    },

    externals: {

        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_',
        },

    },

    devtool: "source-map",

    devServer: {

        contentBase: './dist',
        hot: true,

    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },

    resolveLoader: {
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    },

    resolve: {

        modules: [
            path.join(__dirname, 'node_modules')
        ]
    },

    plugins: [

        new HtmlWebpackPlugin({
            title: 'protoast',
            template: 'dist/dev.html'
        }),

        new webpack.ProvidePlugin({
            _map: ['lodash', 'map'],
        }),
    ],
};

module.exports = config;
