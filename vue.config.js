const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'fa',
      localeDir: 'locales',
      enableInSFC: false,
      enableBridge: false
    }
  }
})
