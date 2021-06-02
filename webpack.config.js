const path = require('path');

module.exports = {
    entry: './src/js/map.js',
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