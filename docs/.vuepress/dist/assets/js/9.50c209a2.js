;(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    307: function(e, t, n) {
      'use strict'
      n.r(t)
      var a = {
          data: function() {
            return {
              zoom: 6,
              center: [116.3, 39.1],
              markers: [],
              data: [{ name: '轨迹0', path: [[116.340417, 39.1], [120.15, 30.28]] }],
              renderOptions: {
                pathLineStyle: { strokeStyle: 'red', lineWidth: 6, dirArrowStyle: !0 }
              }
            }
          },
          mounted: function() {
            this.markers = [
              {
                position: [120.15, 30.28],
                label: { content: '杭州' },
                icon: { imageSize: [20, 40], size: [20, 40], image: this.$withBase('/car.png') }
              },
              {
                position: [116.15, 39.28],
                label: { content: '北京' },
                icon: { imageSize: [20, 40], size: [20, 40], image: this.$withBase('/car.png') }
              }
            ]
          },
          methods: {
            getOptions: function(e) {
              return {
                loop: !0,
                speed: 1e6,
                pathNavigatorStyle: {
                  width: 20,
                  height: 40,
                  content: e.Render.Canvas.getImageContent(
                    this.$withBase('/car.png'),
                    onload,
                    onerror
                  ),
                  strokeStyle: null,
                  fillStyle: null,
                  pathLinePassedStyle: {
                    lineWidth: 6,
                    strokeStyle: '#f34135',
                    dirArrowStyle: { stepSpace: 15, strokeStyle: '#fff' }
                  }
                }
              }
            }
          }
        },
        i = n(19),
        r = Object(i.a)(
          a,
          function() {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t
            return n(
              'el-amap',
              { staticStyle: { height: '400px' }, attrs: { zoom: e.zoom, center: e.center } },
              [
                e._l(e.markers, function(t) {
                  return n(
                    'el-amap-mark',
                    e._b({ key: t.position[0] + '_' + t.position[1] }, 'el-amap-mark', t, !1)
                  )
                }),
                e._v(' '),
                n(
                  'el-amap-pathsimplifier',
                  { attrs: { data: e.data, renderOptions: e.renderOptions } },
                  [n('el-amap-pathnavigator', { attrs: { getOptions: e.getOptions } })],
                  1
                )
              ],
              2
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      t.default = r.exports
    }
  }
])
