const {merge} = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
    const orgName = "kkostadinov";
    const defaultConfig = singleSpaDefaults({
        orgName,
        projectName: "root-config",
        webpackConfigEnv,
        argv,
        disableHtmlGeneration: true,
    });

    return merge(defaultConfig, {
        // modify the webpack config however you'd like to by adding to this object
        externals: ["vue", "vue-router", /^@kkostadinov\/.*/],
        module: {
            rules: [
                {
                    test: /\.scss$/i,
                    use: [
                        {
                            loader: "style-loader",
                        },
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            },
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                inject: false,
                template: "src/index.ejs",
                templateParameters: {
                    isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
                    orgName,
                },
            }),
        ],
    });
};
