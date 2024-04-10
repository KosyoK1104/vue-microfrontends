const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        output: {
            libraryTarget: 'system',
            filename: 'js/app.js',
        },
        externals: ['vue', 'vue-router', /^@kkostadinov\/.*/],
        devServer: {
            hot: true,
            liveReload: false,
        }
    }
})
