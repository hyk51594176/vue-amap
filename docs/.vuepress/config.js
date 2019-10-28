const path = require('path')

module.exports = {
  title: 'Vue-Amap',
  description: '基于高德地图封装vue组件',
  base: '/vue-amap/',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      {
        text: 'Github',
        link: 'https://github.com/hyk51594176/vue-amap',
        target: '_blank'
      }
    ],
    sidebar: [
      {
        title: '指南',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/map.html',
          '/guide/control.html',
          '/guide/marker.html',
          '/guide/mass-mark.html',
          '/guide/info-window.html',
          '/guide/path-simplifier.html',
          '/guide/path-navigator.html'
        ]
      }
    ]
  },
  chainWebpack(config) {
    config.resolve.alias.set('@', path.resolve(__dirname, '../../src/'))
  }
}
