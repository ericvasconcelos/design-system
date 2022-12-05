const path = require('path')

var webpack = require('webpack')

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../src/**/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-a11y'
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [
      path.resolve(__dirname, '../src/'),
      path.resolve(__dirname, '../stories/'),
      'node_modules'
    ]
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.__NEXT_IMAGE_OPTS': JSON.stringify({
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          domains: ['https://qa-static.cashme.com.br'],
          path: 'https://qa-static.cashme.com.br/',
          loader: 'imgix'
        })
      })
    )
    return config
  }
}
