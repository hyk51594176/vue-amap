;(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    316: function(t, a, s) {
      'use strict'
      s.r(a)
      var n = s(19),
        p = Object(n.a)(
          {},
          function() {
            var t = this,
              a = t.$createElement,
              s = t._self._c || a
            return s(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                s('h2', { attrs: { id: '介绍' } }, [
                  s('a', { staticClass: 'header-anchor', attrs: { href: '#介绍' } }, [t._v('#')]),
                  t._v(' 介绍')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    'pathNavigator巡航器组件一般配合轨迹组件同时使用，一条轨迹数据对应一个巡航器组件，具体使用方式参照示例'
                  )
                ]),
                t._v(' '),
                s('h2', { attrs: { id: '参数配置' } }, [
                  s('a', { staticClass: 'header-anchor', attrs: { href: '#参数配置' } }, [
                    t._v('#')
                  ]),
                  t._v(' 参数配置')
                ]),
                t._v(' '),
                s('p', [
                  t._v('pathNavigator组件支持'),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://lbs.amap.com/api/javascript-api/reference-amap-ui/mass-data/pathsimplifier',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('高德地图pathNavigator类'), s('OutboundLink')],
                    1
                  ),
                  t._v(
                    '所有属性及事件。在此基础上，对以下属性变动在组件内部监听，并会主动触发对应对set方法'
                  )
                ]),
                t._v(' '),
                s('table', [
                  s('thead', [
                    s('tr', [
                      s('th', [t._v('属性名')]),
                      t._v(' '),
                      s('th', [t._v('类型')]),
                      t._v(' '),
                      s('th', [t._v('默认值')])
                    ])
                  ]),
                  t._v(' '),
                  s('tbody', [
                    s('tr', [
                      s('td', [t._v('speed')]),
                      t._v(' '),
                      s('td', [t._v('number')]),
                      t._v(' '),
                      s('td', [t._v('-')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', [t._v('range')]),
                      t._v(' '),
                      s('td', [t._v('number[]')]),
                      t._v(' '),
                      s('td', [t._v('-')])
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
                    s('example-pathnavigator-index', { attrs: { slot: 'source' }, slot: 'source' }),
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
                            t._v('\n    '),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('/>')
                            ])
                          ]),
                          t._v('\n    '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('el-amap-pathsimplifier')
                            ]),
                            t._v(' \n      '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v(':data')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('=')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v("'")
                              ]),
                              t._v('data'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v("'")
                              ])
                            ]),
                            t._v('\n      '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v(':renderOptions')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('=')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v("'")
                              ]),
                              t._v('renderOptions'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v("'")
                              ])
                            ]),
                            t._v('\n    '),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n      '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('el-amap-pathnavigator')
                            ]),
                            t._v(' '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v(':getOptions')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('=')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v("'")
                              ]),
                              t._v('getOptions'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v("'")
                              ])
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('/>')
                            ])
                          ]),
                          t._v('\n    '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('el-amap-pathsimplifier')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
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
                              t._v('\n      data'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n          name'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'轨迹0'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          path'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              t._v('\n            '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                t._v('116.340417')
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
                              t._v('\n            '),
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
                              t._v('\n          '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n      renderOptions'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n        pathLineStyle'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n          strokeStyle'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'red'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          lineWidth'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('6')]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          dirArrowStyle'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                t._v('true')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
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
                                t._v('getOptions')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                                t._v('PathSimplifier')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('return')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n        loop'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                t._v('true')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        speed'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                t._v('1000000')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        pathNavigatorStyle'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n          width'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                t._v('20')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          height'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                t._v('40')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          content'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' PathSimplifier'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('Render'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('Canvas'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('getImageContent')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
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
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' onload'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' onerror'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          strokeStyle'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('null')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          fillStyle'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('null')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          pathLinePassedStyle'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n            lineWidth'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('6')]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            strokeStyle'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'#f34135'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            dirArrowStyle'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n              stepSpace'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                t._v('15')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n              strokeStyle'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'#fff'")
                              ]),
                              t._v('\n            '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n          '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
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
      a.default = p.exports
    }
  }
])
