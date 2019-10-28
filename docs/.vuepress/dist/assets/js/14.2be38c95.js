;(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    309: function(t, a, s) {
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
                  t._v('control组件支持'),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://lbs.amap.com/api/javascript-api/reference/map-control#control-bar',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('高德地图控件'), s('OutboundLink')],
                    1
                  ),
                  t._v(
                    '所有属性及事件。该组件提供了五种默认控件ControlBar、MapType、OverView、Scale、ToolBar及通用Control。\n其中默认控件可以使用 '
                  ),
                  s('code', [t._v('<el-amap-controlname/>')]),
                  t._v(' 的方式直接使用，而通用Control组件需要提供具体控件名称 '),
                  s('code', [t._v("<el-amap-control control-name='controlName'/>")])
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
                    s('example-control-index', { attrs: { slot: 'source' }, slot: 'source' }),
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
                            t._v('\n    '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('@complete')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('=')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('complete'),
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
                              t._v('el-amap-maptype')
                            ]),
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
                              t._v('el-amap-overview')
                            ]),
                            t._v(' '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v(':isOpen')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('=')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('true'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
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
                                t._v('<')
                              ]),
                              t._v('el-amap-scale')
                            ]),
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
                              t._v('el-amap-toolbar')
                            ]),
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
                              t._v('el-amap-controlbar')
                            ]),
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
                              t._v('el-amap-control')
                            ]),
                            t._v(' '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('control-name')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('=')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('Geolocation'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('el-amap-control')
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
                                t._v('complete')
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
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'complete'")
                              ]),
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
