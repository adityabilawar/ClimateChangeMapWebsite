const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFilenameHelpers } = require('webpack');


module.exports = {
    entry: './src/js/index.js',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8000,
        open: true,
    }
};


