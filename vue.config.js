const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  runtimeCompiler: true,
  transpileDependencies: true,
  devServer: { 
    proxy: 'http://localhost:9000/'
  },
  configureWebpack: {
    devServer: {
      headers: { "Access-Control-Allow-Origin": "*" }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/blog/' : '/',
  // publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir : 'docs',
	css: {
		loaderOptions: {
      scss: {
        additionalData: 
          `
          @import "variables.scss"; 
          @import "mixins.scss";
        `
      }
    },
    extract: {
      filename: 'css/[name].css?_hash=[contenthash:8]'
    }
  },
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugin('extract-css').tap(args => {
        args[0].filename = 'css/[name].css?_hash=[contenthash:8]'
        args[0].chunkFilename = 'css/[name].css?_hash=[contenthash:8]'
        return args
      })
    }
  },
})
