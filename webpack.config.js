const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    devtool: "source-map",
    entry: ["whatwg-fetch", "./src/index.js"],
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(ts|js)x?$/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.html$/,
                use:
                {
                    loader: "html-loader",
                    options: { minimize: true },
                },
            },
            {
                test: /\.(png|jpg|gif|mid|ogg|aac)$/,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
            {
                enforce: "pre",
                test: /\.js$/,
                use: {
                    loader: "source-map-loader",
                },
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: "./index.html",
            template: "./src/index.html",
        }),
    ],
    resolve: {
        extensions: [".js", ".tsx", ".ts", "json"],
    },
}
