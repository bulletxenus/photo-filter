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
                test: /\.sass$/,
                use: ["style-loader", "css-loader",
                    {
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
                    },
                    "sass-loader"],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.png$/,
                type: "asset/inline",
                /*generator: {
                    filename: "assets/[name][ext]",
                }*/
            },
            {
                test: /\.svg$/,
                type: "assets/sourse",
            }

        ]
    },

    devServer: {
        contentBase: 'dist/',
        port: 8080,
        hot: true,
        open: true,
    }
}
