;(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    315: function(t, a, s) {
      'use strict'
      s.r(a)
      var n = s(19),
        e = Object(n.a)(
          {},
          function() {
            var t = this,
              a = t.$createElement,
              s = t._self._c || a
            return s(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                s('h2', { attrs: { id: '参数配置' } }, [
                  s('a', { staticClass: 'header-anchor', attrs: { href: '#参数配置' } }, [
                    t._v('#')
                  ]),
                  t._v(' 参数配置')
                ]),
                t._v(' '),
                s('p', [
                  t._v('marker组件支持'),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://lbs.amap.com/api/javascript-api/reference/overlay#marker',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('高德地图marker类'), s('OutboundLink')],
                    1
                  ),
                  t._v(
                    '所有MarkerOption属性及事件。在此基础上，对以下属性变动在组件内部监听，并会主动触发对应对set方法'
                  )
                ]),
                t._v(' '),
                s('table', [
                  s('thead', [
                    s('tr', [
                      s('th', [t._v('属性名')]),
                      t._v(' '),
                      s('th', { staticStyle: { 'text-align': 'center' } }, [t._v('类型')]),
                      t._v(' '),
                      s('th', { staticStyle: { 'text-align': 'center' } }, [t._v('默认值')])
                    ])
                  ]),
                  t._v(' '),
                  s('tbody', [
                    s('tr', [
                      s('td', [t._v('position')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('LngLat')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('-')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', [t._v('offset')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('Pixel')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('-')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', [t._v('anchor')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('string')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v("'top-left'")])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', [t._v('label')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('{ content: string, offset?: Pixel, direction?: string }')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('-')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', [t._v('animation')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('string')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v("'AMAP_ANIMATION_NONE'")
                      ])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', [t._v('clickable')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('boolean')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('true')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', [t._v('angle')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('number')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('-')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', [t._v('zIndex')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('number')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('-')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', [t._v('draggable')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('boolean')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('false')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', [t._v('title')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('string')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('-')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', [t._v('content')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('string')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('-')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', [t._v('icon')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('string | Icon')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('-')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', [t._v('extData')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('any')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('-')])
                    ])
                  ])
                ]),
                t._v(' '),
                s('h2', { attrs: { id: '示例' } }, [
                  s('a', { staticClass: 'header-anchor', attrs: { href: '#示例' } }, [t._v('#')]),
                  t._v(' 示例')
                ]),
                t._v(' '),
                s(
                  'demo-block',
                  [
                    s('example-marker-index', { attrs: { slot: 'source' }, slot: 'source' }),
                    t._v(' '),
                    s('div', { staticClass: 'language-vue extra-class' }, [
                      s('pre', { pre: !0, attrs: { class: 'language-vue' } }, [
                        s('code', [
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('template')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n  '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('el-amap')
                            ]),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token style-attr language-css' } },
                              [
                                s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                  t._v(' \n    '),
                                  s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                    t._v('style')
                                  ])
                                ]),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('="')
                                ]),
                                s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                  s('span', { pre: !0, attrs: { class: 'token property' } }, [
                                    t._v('height')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' 400px'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(';')
                                  ])
                                ]),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]
                            ),
                            t._v('\n    '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v(':zoom')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('=')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('zoom'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n    '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v(':center')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('=')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('center'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n  '),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n    '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('el-amap-mark')
                            ]),
                            t._v('\n      '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('v-for')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('=')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('marker in markers'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n      '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v(':key')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('=')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('`${marker.position[0]}_${marker.position[1]}`'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n      '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('v-bind')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('=')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('marker'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n      '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('@click')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('=')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('markerClick'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n    '),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('/>')
                            ])
                          ]),
                          t._v('\n  '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('el-amap')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n'),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('template')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n\n'),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('script')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          s('span', { pre: !0, attrs: { class: 'token script' } }, [
                            s('span', { pre: !0, attrs: { class: 'token language-javascript' } }, [
                              t._v('\n'),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('export')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('default')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('data')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('return')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n      zoom'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('6')]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n      center'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                t._v('116.3')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                t._v('39.1')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n      markers'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('mounted')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('markers '),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v('=')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n        position'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                t._v('120.15')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                t._v('30.28')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        label'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' content'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'杭州'")
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        icon'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n          imageSize'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                t._v('20')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                t._v('40')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          size'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                t._v('20')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                t._v('40')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          image'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('$withBase')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'/car.png'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n        position'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                t._v('116.15')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                t._v('39.28')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        label'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' content'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'北京'")
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        icon'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n          imageSize'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                t._v('20')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                t._v('40')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          size'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                t._v('20')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                t._v('40')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          image'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('$withBase')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'/car.png'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n  methods'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('markerClick')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                                s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                  t._v('...')
                                ]),
                                t._v('args')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n      console'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('log')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              t._v('args'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n')
                            ])
                          ]),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('script')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ])
                        ])
                      ])
                    ])
                  ],
                  1
                )
              ],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      a.default = e.exports
    }
  }
])
