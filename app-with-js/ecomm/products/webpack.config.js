const HTMLWebPackPlugin = require('html-webpack-plugin');

module.exports ={
    mode: 'development',
    devServer: {
        port: 8081,
    },
    plugins: [
        new HTMLWebPackPlugin({
            template: './public/index.html',
        })
    ]
}