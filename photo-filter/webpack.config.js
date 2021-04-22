const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: "development",

    entry: "./src/js/index.js",

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "[name].html"
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: "babel-loader",
            },
            {
                test: /\.(css|sass)$/,
                use: ["style-loader", "css-loader", "sass-loader", {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [
                                [
                                    "autoprefixer",
                                ]
                            ]
                        }
                    }
                }],
            },
            {
                test: /\.png$/,
                type: "asset/resouce",
                generator: {
                    filename: "assets/[name][ext]",
                }
            },
            {
                test: /\.svg$/,
                type: "assets/inline",
            }

        ]
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'dist/'),
        port: 8080,
        hot: true,
        open: true,
    }
}
