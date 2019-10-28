;(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    312: function(t, a, s) {
      'use strict'
      s.r(a)
      var e = s(19),
        n = Object(e.a)(
          {},
          function() {
            var t = this,
              a = t.$createElement,
              s = t._self._c || a
            return s('ContentSlotsDistributor', { attrs: { 'slot-key': t.$parent.slotKey } }, [
              s('h1', { attrs: { id: '介绍' } }, [
                s('a', { staticClass: 'header-anchor', attrs: { href: '#介绍' } }, [t._v('#')]),
                t._v(' 介绍')
              ]),
              t._v(' '),
              s('p', [
                t._v('vue-amap是基于高德地图js-api封装的vue组件，结合'),
                s(
                  'a',
                  {
                    attrs: {
                      href: 'https://lbs.amap.com/api/javascript-api/summary',
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    }
                  },
                  [t._v('高德地图js-api文档'), s('OutboundLink')],
                  1
                ),
                t._v('，可以方便快捷构建页面地图组件')
              ]),
              t._v(' '),
              s('h2', { attrs: { id: '安装' } }, [
                s('a', { staticClass: 'header-anchor', attrs: { href: '#安装' } }, [t._v('#')]),
                t._v(' 安装')
              ]),
              t._v(' '),
              s('div', { staticClass: 'language-sh extra-class' }, [
                s('pre', { pre: !0, attrs: { class: 'language-sh' } }, [
                  s('code', [
                    s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 安装')]),
                    t._v('\n'),
                    s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('npm')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('install')]),
                    t._v(' -S @hanyk/vue-amap\n')
                  ])
                ])
              ]),
              s('div', { staticClass: 'language-js extra-class' }, [
                s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                  s('code', [
                    s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 使用')]),
                    t._v('\n'),
                    s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                    t._v(' Vue '),
                    s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'vue'")]),
                    t._v('\n'),
                    s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                    t._v(' amap '),
                    s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'@hanyk/vue-amap'")
                    ]),
                    t._v('\n\nVue'),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('use')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('amap'),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n  key'),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'Your Key'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n  plugin'),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'AMap.Geocoder'")
                    ]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('// plugin list that you needed')
                    ]),
                    t._v('\n  v'),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'1.4.15'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n  UIVersion'),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'1.0'")]),
                    t._v('\n'),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n')
                  ])
                ])
              ]),
              s('h2', { attrs: { id: '内置处理' } }, [
                s('a', { staticClass: 'header-anchor', attrs: { href: '#内置处理' } }, [t._v('#')]),
                t._v(' 内置处理')
              ]),
              t._v(' '),
              s('p', [
                t._v(
                  '为了简便使用，组件内部对部分高德地图基础类均做了处理，在使用时传参与高德地图api文档稍有不同，在下面表格列出'
                )
              ]),
              t._v(' '),
              s('ul', [s('li', [t._v('出于方便表达的考虑，之后的文档中同类型均使用类名代替')])]),
              t._v(' '),
              s('table', [
                s('thead', [
                  s('tr', [
                    s('th', { staticStyle: { 'text-align': 'center' } }, [t._v('类名')]),
                    t._v(' '),
                    s('th', { staticStyle: { 'text-align': 'center' } }, [t._v('构造函数')]),
                    t._v(' '),
                    s('th', [t._v('传参类型')])
                  ])
                ]),
                t._v(' '),
                s('tbody', [
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('Pixel')]),
                    t._v(' '),
                    s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('AMap.Pixel')]),
                    t._v(' '),
                    s('td', [t._v('[number, number]')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('Size')]),
                    t._v(' '),
                    s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('AMap.Size')]),
                    t._v(' '),
                    s('td', [t._v('[number, number]')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('LngLat')]),
                    t._v(' '),
                    s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('AMap.LngLat')]),
                    t._v(' '),
                    s('td', [t._v('[number, number]')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('Icon')]),
                    t._v(' '),
                    s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('AMap.Icon')]),
                    t._v(' '),
                    s('td', [
                      t._v('{ size: Size, imageSize?: Size, imageOffset?: Pixel, image: string }')
                    ])
                  ])
                ])
              ])
            ])
          },
          [],
          !1,
          null,
          null,
          null
        )
      a.default = n.exports
    }
  }
])
