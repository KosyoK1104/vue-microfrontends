const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    configureWebpack: {
        output: {
            libraryTarget: 'system',
            filename: 'js/app.js',
        },
        externals: ['vue', 'vue-router', /^@kkostadinov\/.+/],
        devServer: {
            hot: false,
            liveReload: false,
        }
    }
})
