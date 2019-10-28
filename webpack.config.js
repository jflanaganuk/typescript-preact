module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "./public/bundle.js"
    },
    devtool: "eval",
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    }
};