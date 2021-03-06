const path = require('path');

module.exports = {
    entry: "./source/js/entry.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
        publicPath: "/public/"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }, {
            test: /\.pug$/,
            use: [{
                loader: "pug-loader"
            }]
        }]
    }
};
