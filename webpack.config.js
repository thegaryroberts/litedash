const HtmlWebPackPlugin = require("html-webpack-plugin")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

const optimization = {
    splitChunks: {
        cacheGroups: {
            node_vendors: {
                chunks: "all",
                priority: 1,
                test: /[\\/]node_modules[\\/]/,
            },
        },
    },
}

const plugins = [
    new BundleAnalyzerPlugin(),
    new HtmlWebPackPlugin({
        filename: "./index.html",
        template: "./src/index.html",
    }),
]

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
    optimization,
    plugins,
    resolve: {
        extensions: [".js", ".tsx", ".ts", "json"],
    },
}
