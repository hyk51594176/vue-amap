;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    304: function(t, e, o) {
      'use strict'
      o.r(e)
      var n = {
          data: function() {
            return { zoom: 6, center: [116.3, 39.1] }
          },
          methods: {
            complete: function() {
              console.log('complete')
            }
          }
        },
        c = o(19),
        l = Object(c.a)(
          n,
          function() {
            var t = this.$createElement
            return (this._self._c || t)('el-amap', {
              staticStyle: { height: '400px' },
              attrs: { zoom: this.zoom, center: this.center },
              on: { complete: this.complete }
            })
          },
          [],
          !1,
          null,
          null,
          null
        )
      e.default = l.exports
    }
  }
])
