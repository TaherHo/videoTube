
let webpack = require('webpack');
const  path = require('path');

let parentDir = path.join(__dirname, '../');

module.exports = {
    entry: [
        path.join(parentDir, 'index.js')
    ],
    module: {
        loaders: [
          {
            test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
          {
                test: /\.less$/,
                loaders: ["style-loader", "css-loder", "less-loader"]
            },
          {
            test: /\.scss$/,
              loader: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    output: {
        path: path.join( parentDir , '/dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
};
