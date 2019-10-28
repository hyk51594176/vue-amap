;(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    305: function(e, n, t) {
      'use strict'
      t.r(n)
      var i = {
          data: function() {
            return { zoom: 6, center: [116.3, 39.1], markers: [] }
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
            markerClick: function() {
              for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
                n[t] = arguments[t]
              console.log(n)
            }
          }
        },
        a = t(19),
        o = Object(a.a)(
          i,
          function() {
            var e = this,
              n = e.$createElement,
              t = e._self._c || n
            return t(
              'el-amap',
              { staticStyle: { height: '400px' }, attrs: { zoom: e.zoom, center: e.center } },
              e._l(e.markers, function(n) {
                return t(
                  'el-amap-mark',
                  e._b(
                    { key: n.position[0] + '_' + n.position[1], on: { click: e.markerClick } },
                    'el-amap-mark',
                    n,
                    !1
                  )
                )
              }),
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      n.default = o.exports
    }
  }
])
