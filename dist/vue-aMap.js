;(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports, require('vue-property-decorator'))
    : typeof define === 'function' && define.amd
    ? define(['exports', 'vue-property-decorator'], factory)
    : ((global = global || self), factory((global.VueAMap = {}), global.VuePropertyDecorator))
})(this, function(exports, vuePropertyDecorator) {
  'use strict'

  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function(d, b) {
    extendStatics =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function(d, b) {
          d.__proto__ = b
        }) ||
      function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]
      }
    return extendStatics(d, b)
  }

  function __extends(d, b) {
    extendStatics(d, b)
    function __() {
      this.constructor = d
    }
    d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
  }

  var __assign = function() {
    __assign =
      Object.assign ||
      function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }

  function __decorate(decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc)
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
    return c > 3 && r && Object.defineProperty(target, key, r), r
  }

  function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j]
    return r
  }

  var AMapAPILoader = /** @class */ (function() {
    function AMapAPILoader() {
      this.config = {
        key: null,
        v: '1.4.15',
        UIVersion: '1.0',
        plugin: [],
        callback: 'amapInitComponent'
      }
      this.scriptLoaded = false
      this.loadPromie = null
    }
    AMapAPILoader.prototype.setConfig = function(config) {
      this.config = __assign(__assign({}, this.config), config)
    }
    AMapAPILoader.prototype.sdkReady = function() {
      var _this = this
      if (this.scriptLoaded) return Promise.resolve()
      if (this.loadPromie === null) {
        this.loadPromie = new Promise(function(resolve, reject) {
          var script = document.createElement('script')
          script.type = 'text/javascript'
          script.async = true
          script.defer = true
          script.src = _this.getScriptSrc()
          window.amapInitComponent = function() {
            var UIScript = document.createElement('script')
            UIScript.type = 'text/javascript'
            UIScript.async = true
            UIScript.defer = true
            UIScript.src = 'https://webapi.amap.com/ui/' + _this.config.UIVersion + '/main-async.js'
            _this.scriptLoaded = true
            document.head.appendChild(UIScript)
            UIScript.onload = resolve
            UIScript.onerror = reject
          }
          document.head.appendChild(script)
        })
      }
      return this.loadPromie
    }
    AMapAPILoader.prototype.getScriptSrc = function() {
      var config = this.config
      var str = 'https://webapi.amap.com/maps?'
      var keys = ['v', 'key', 'plugin', 'callback']
      return (
        str +
        keys
          .filter(function(key) {
            return Array.isArray(config[key]) ? config[key].length : config[key]
          })
          .map(function(key) {
            return key + '=' + (Array.isArray(config[key]) ? config[key].join(',') : config[key])
          })
          .join('&')
      )
    }
    return AMapAPILoader
  })()
  var AMapLoader = new AMapAPILoader()

  var ControlMixin = /** @class */ (function(_super) {
    __extends(ControlMixin, _super)
    function ControlMixin() {
      return (_super !== null && _super.apply(this, arguments)) || this
    }
    ControlMixin.prototype.created = function() {
      var _this = this
      this.$once('COMPONENTINIT', function(aMap) {
        _this.aMap = aMap
        if (AMapLoader.config.plugin.includes('AMap.' + _this.controlName)) {
          _this.pluginInt()
        } else {
          AMap.plugin('AMap.' + _this.controlName, _this.pluginInt)
        }
      })
    }
    ControlMixin.prototype.pluginInt = function() {
      var _this = this
      this.control = new AMap[this.controlName](this.$attrs)
      Object.keys(this.$listeners).forEach(function(key) {
        var _a
        _this.control.on(
          key,
          _this.$listeners[key].bind(
            null,
            ((_a = {}), (_a[_this.controlName] = _this.control), (_a.aMap = _this.aMap), _a)
          )
        )
      })
      this.aMap.addControl(this.control)
    }
    ControlMixin.prototype.beforeDestroy = function() {
      var _this = this
      if (this.control && this.aMap) {
        this.aMap.removeControl(this.control)
        Object.keys(this.$listeners).forEach(function(key) {
          _this.control.off(key, _this.$listeners[key])
        })
      }
    }
    ControlMixin.prototype.render = function() {
      return null
    }
    ControlMixin = __decorate([vuePropertyDecorator.Component], ControlMixin)
    return ControlMixin
  })(vuePropertyDecorator.Vue)

  var ControlBar = /** @class */ (function(_super) {
    __extends(ControlBar, _super)
    function ControlBar() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this
      _this.controlName = 'ControlBar'
      return _this
    }
    ControlBar = __decorate([vuePropertyDecorator.Component], ControlBar)
    return ControlBar
  })(vuePropertyDecorator.Mixins(ControlMixin))
  var MapType = /** @class */ (function(_super) {
    __extends(MapType, _super)
    function MapType() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this
      _this.controlName = 'MapType'
      return _this
    }
    MapType = __decorate([vuePropertyDecorator.Component], MapType)
    return MapType
  })(vuePropertyDecorator.Mixins(ControlMixin))
  var OverView = /** @class */ (function(_super) {
    __extends(OverView, _super)
    function OverView() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this
      _this.controlName = 'OverView'
      return _this
    }
    OverView = __decorate([vuePropertyDecorator.Component], OverView)
    return OverView
  })(vuePropertyDecorator.Mixins(ControlMixin))
  var Scale = /** @class */ (function(_super) {
    __extends(Scale, _super)
    function Scale() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this
      _this.controlName = 'Scale'
      return _this
    }
    Scale = __decorate([vuePropertyDecorator.Component], Scale)
    return Scale
  })(vuePropertyDecorator.Mixins(ControlMixin))
  var ToolBar = /** @class */ (function(_super) {
    __extends(ToolBar, _super)
    function ToolBar() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this
      _this.controlName = 'ToolBar'
      return _this
    }
    ToolBar = __decorate([vuePropertyDecorator.Component], ToolBar)
    return ToolBar
  })(vuePropertyDecorator.Mixins(ControlMixin))
  var Control = /** @class */ (function(_super) {
    __extends(Control, _super)
    function Control() {
      return (_super !== null && _super.apply(this, arguments)) || this
    }
    __decorate(
      [vuePropertyDecorator.Prop({ type: String, required: true })],
      Control.prototype,
      'controlName',
      void 0
    )
    Control = __decorate([vuePropertyDecorator.Component], Control)
    return Control
  })(vuePropertyDecorator.Mixins(ControlMixin))

  var lazy = function(fn, time) {
    var timer = null
    return function() {
      var args = []
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i]
      }
      if (timer) clearTimeout(timer)
      timer = setTimeout(function() {
        fn.apply(void 0, args)
        timer = null
      }, time)
    }
  }
  var AMapComponent = /** @class */ (function(_super) {
    __extends(AMapComponent, _super)
    function AMapComponent() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this
      _this.mapLoading = true
      return _this
    }
    AMapComponent.prototype.beforeCreate = function() {
      AMapLoader.sdkReady()
    }
    AMapComponent.prototype.mounted = function() {
      var _this = this
      AMapLoader.sdkReady()
        .then(this.mapInit)
        .finally(function() {
          _this.mapLoading = false
        })
      this.$on(
        'setFitView',
        lazy(function() {
          _this.aMap.setFitView()
        }, 200)
      )
    }
    AMapComponent.prototype.zoomChange = function(val) {
      if (this.aMap) {
        this.aMap.setZoom(val)
      }
    }
    AMapComponent.prototype.centerChange = function(val) {
      if (this.aMap && val.length === 2) {
        this.aMap.setCenter(val)
      }
    }
    AMapComponent.prototype.updated = function() {
      AMapLoader.sdkReady().then(this.mapInit)
    }
    AMapComponent.prototype.mapInit = function() {
      var _this = this
      if (!this.aMap) {
        this.aMap = new AMap.Map(
          this.$el,
          __assign(__assign({ resizeEnable: true }, this.$attrs), {
            zoom: this.zoom,
            center: this.center
          })
        )
        Object.keys(this.$listeners).forEach(function(key) {
          _this.aMap.on(key, _this.$listeners[key].bind(null, _this.aMap))
        })
      }
      this.$children.forEach(function(component) {
        return component.$emit('COMPONENTINIT', _this.aMap)
      })
    }
    AMapComponent.prototype.beforeDestroy = function() {
      var _this = this
      if (this.aMap) {
        Object.keys(this.$listeners).forEach(function(key) {
          _this.aMap.off(key, _this.$listeners[key])
        })
        this.aMap.destroy()
      }
    }
    AMapComponent.prototype.render = function(h) {
      return h(
        'div',
        {
          attrs: this.$attrs,
          directives: [
            {
              name: 'loading',
              value: this.mapLoading
            }
          ]
        },
        this.$slots.default
      )
    }
    __decorate(
      [vuePropertyDecorator.Prop({ type: Number })],
      AMapComponent.prototype,
      'zoom',
      void 0
    )
    __decorate(
      [vuePropertyDecorator.Prop({ type: Array })],
      AMapComponent.prototype,
      'center',
      void 0
    )
    __decorate([vuePropertyDecorator.Watch('zoom')], AMapComponent.prototype, 'zoomChange', null)
    __decorate(
      [vuePropertyDecorator.Watch('center')],
      AMapComponent.prototype,
      'centerChange',
      null
    )
    AMapComponent = __decorate(
      [
        vuePropertyDecorator.Component({
          inheritAttrs: false
        })
      ],
      AMapComponent
    )
    return AMapComponent
  })(vuePropertyDecorator.Vue)

  var Info = /** @class */ (function(_super) {
    __extends(Info, _super)
    function Info() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this
      _this.nodeEl = undefined
      _this.upTime = 0
      return _this
    }
    Info.prototype.getEl = function(nodeEl) {
      var _this = this
      this.nodeEl = nodeEl
      this.upTime++
      return new Promise(function(resolve) {
        _this.$nextTick(function() {
          resolve(_this.$el)
        })
      })
    }
    Info.prototype.render = function(h) {
      return h(
        'div',
        {
          key: this.upTime
        },
        this.nodeEl
      )
    }
    Info = __decorate([vuePropertyDecorator.Component], Info)
    return Info
  })(vuePropertyDecorator.Vue)
  var InfoWindow = /** @class */ (function(_super) {
    __extends(InfoWindow, _super)
    function InfoWindow() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this
      _this.infoVue = new Info().$mount()
      return _this
    }
    InfoWindow.prototype.created = function() {
      var _this = this
      this.$once('COMPONENTINIT', function(aMap) {
        var _a, _b
        _this.aMap = aMap
        var _c = _this,
          content = _c.content,
          offset = _c.offset,
          position = _c.position,
          anchor = _c.anchor,
          $attrs = _c.$attrs,
          size = _c.size,
          isCustom = _c.isCustom
        _this.infoWindow = new AMap.InfoWindow(
          __assign(__assign({ autoMove: true }, $attrs), {
            content: isCustom ? null : content,
            position: position,
            isCustom: isCustom,
            anchor: anchor,
            size: Array.isArray(size)
              ? new ((_a = AMap.Size).bind.apply(_a, __spreadArrays([void 0], size)))()
              : size,
            offset: Array.isArray(offset)
              ? new ((_b = AMap.Pixel).bind.apply(_b, __spreadArrays([void 0], offset)))()
              : offset
          })
        )
        _this.toggle()
        _this.setCustomContent()
        _this.infoWindow.on('close', _this.closeHandler)
        _this.infoWindow.on('open', _this.openHandler)
        Object.keys(_this.$listeners).forEach(function(key) {
          _this.infoWindow.on(
            key,
            _this.$listeners[key].bind(null, {
              infoWindow: _this.infoWindow,
              aMap: aMap
            })
          )
        })
      })
    }
    InfoWindow.prototype.setContent = function(val) {
      if (this.infoWindow && !this.isCustom) {
        this.infoWindow.setContent(val)
      }
    }
    InfoWindow.prototype.setPosition = function(val) {
      if (this.infoWindow) {
        this.infoWindow.setPosition(val)
      }
    }
    InfoWindow.prototype.setAnchor = function(val) {
      if (this.infoWindow) {
        this.infoWindow.setAnchor(val)
      }
    }
    InfoWindow.prototype.setisOpen = function() {
      if (this.infoWindow) {
        this.toggle()
      }
    }
    InfoWindow.prototype.setSize = function(val) {
      var _a
      if (this.infoWindow) {
        this.infoWindow.setSize(
          Array.isArray(val)
            ? new ((_a = AMap.Size).bind.apply(_a, __spreadArrays([void 0], val)))()
            : val
        )
      }
    }
    InfoWindow.prototype.closeHandler = function() {
      this.$emit('update:isOpen', false)
    }
    InfoWindow.prototype.openHandler = function() {
      this.$emit('update:isOpen', true)
    }
    InfoWindow.prototype.toggle = function() {
      if (!this.aMap || !this.infoWindow) return
      var _a = this,
        isOpen = _a.isOpen,
        position = _a.position
      if (isOpen) {
        this.infoWindow.open(this.aMap, position)
      } else {
        this.infoWindow.close()
      }
    }
    InfoWindow.prototype.beforeDestroy = function() {
      var _this = this
      if (this.infoWindow && this.aMap) {
        Object.keys(this.$listeners).forEach(function(key) {
          _this.infoWindow.off(key, _this.$listeners[key])
        })
        this.infoWindow.off('close', this.closeHandler)
        this.infoWindow.off('open', this.openHandler)
        this.aMap.clearInfoWindow()
        this.infoVue.$destroy()
      }
    }
    InfoWindow.prototype.setCustomContent = function() {
      var _this = this
      if (this.isCustom && this.infoWindow) {
        this.infoVue.getEl(this.$slots.default).then(function(el) {
          _this.infoWindow.setContent(el)
        })
      }
    }
    InfoWindow.prototype.updated = function() {
      this.setCustomContent()
    }
    InfoWindow.prototype.render = function() {
      return null
    }
    __decorate(
      [vuePropertyDecorator.Prop({ type: Array })],
      InfoWindow.prototype,
      'position',
      void 0
    )
    __decorate(
      [vuePropertyDecorator.Prop({ type: String })],
      InfoWindow.prototype,
      'content',
      void 0
    )
    __decorate(
      [vuePropertyDecorator.Prop({ type: String })],
      InfoWindow.prototype,
      'anchor',
      void 0
    )
    __decorate(
      [vuePropertyDecorator.Prop({ type: Boolean, default: false })],
      InfoWindow.prototype,
      'isOpen',
      void 0
    )
    __decorate([vuePropertyDecorator.Prop({ type: Array })], InfoWindow.prototype, 'offset', void 0)
    __decorate([vuePropertyDecorator.Prop({ type: Array })], InfoWindow.prototype, 'size', void 0)
    __decorate(
      [vuePropertyDecorator.Prop({ type: Boolean, default: true })],
      InfoWindow.prototype,
      'isCustom',
      void 0
    )
    __decorate([vuePropertyDecorator.Watch('content')], InfoWindow.prototype, 'setContent', null)
    __decorate(
      [vuePropertyDecorator.Watch('position', { deep: true })],
      InfoWindow.prototype,
      'setPosition',
      null
    )
    __decorate([vuePropertyDecorator.Watch('anchor')], InfoWindow.prototype, 'setAnchor', null)
    __decorate([vuePropertyDecorator.Watch('isOpen')], InfoWindow.prototype, 'setisOpen', null)
    __decorate(
      [vuePropertyDecorator.Watch('size', { deep: true })],
      InfoWindow.prototype,
      'setSize',
      null
    )
    InfoWindow = __decorate([vuePropertyDecorator.Component], InfoWindow)
    return InfoWindow
  })(vuePropertyDecorator.Vue)

  var AmapMark = /** @class */ (function(_super) {
    __extends(AmapMark, _super)
    function AmapMark() {
      return (_super !== null && _super.apply(this, arguments)) || this
    }
    AmapMark.prototype.mounted = function() {
      var _this = this
      this.$once('COMPONENTINIT', function(aMap) {
        var _a, _b, _c, _d, _e, _f
        var _g = _this,
          position = _g.position,
          offset = _g.offset,
          anchor = _g.anchor,
          label = _g.label,
          animation = _g.animation,
          clickable = _g.clickable,
          angle = _g.angle,
          zIndex = _g.zIndex,
          draggable = _g.draggable,
          cursor = _g.cursor,
          content = _g.content,
          title = _g.title,
          icon = _g.icon,
          shadow = _g.shadow,
          shape = _g.shape,
          extData = _g.extData,
          $attrs = _g.$attrs,
          $listeners = _g.$listeners
        if (label && Array.isArray(label.offset)) {
          label.offset = new ((_a = AMap.Pixel).bind.apply(
            _a,
            __spreadArrays([void 0], label.offset)
          ))()
        }
        if (icon && typeof icon !== 'string') {
          icon.size = new ((_b = AMap.Size).bind.apply(_b, __spreadArrays([void 0], icon.size)))()
          Array.isArray(icon.imageSize) &&
            (icon.imageSize = new ((_c = AMap.Size).bind.apply(
              _c,
              __spreadArrays([void 0], icon.imageSize)
            ))())
          Array.isArray(icon.imageOffset) &&
            (icon.imageOffset = new ((_d = AMap.Pixel).bind.apply(
              _d,
              __spreadArrays([void 0], icon.imageOffset)
            ))())
          icon.instance = new AMap.Icon(icon)
        }
        _this.aMap = aMap
        _this.aMapMarker = new AMap.Marker(
          __assign(
            __assign(__assign({}, $attrs), {
              anchor: anchor,
              animation: animation,
              clickable: clickable,
              label: label,
              angle: angle,
              zIndex: zIndex,
              draggable: draggable,
              cursor: cursor,
              content: content,
              title: title,
              extData: extData,
              icon: icon && typeof icon !== 'string' ? icon.instance : icon,
              shadow: shadow,
              shape: shape,
              position: new ((_e = AMap.LngLat).bind.apply(
                _e,
                __spreadArrays([void 0], position)
              ))()
            }),
            Array.isArray(offset)
              ? {
                  offset: new ((_f = AMap.Pixel).bind.apply(_f, __spreadArrays([void 0], offset)))()
                }
              : {}
          )
        )
        Object.keys($listeners).forEach(function(key) {
          _this.aMapMarker.on(
            key,
            $listeners[key].bind(null, {
              marker: _this.aMapMarker,
              aMap: aMap
            })
          )
        })
        _this.aMap.add(_this.aMapMarker)
        _this.$parent.$emit('setFitView')
      })
    }
    AmapMark.prototype.setAnchor = function(anchor) {
      this.aMapMarker && this.aMapMarker.setAnchor(anchor)
    }
    AmapMark.prototype.setAnimation = function(animation) {
      this.aMapMarker && this.aMapMarker.setAnimation(animation)
    }
    AmapMark.prototype.setClickable = function(clickable) {
      this.aMapMarker && this.aMapMarker.setClickable(clickable)
    }
    AmapMark.prototype.setLabel = function(label) {
      if (label && Array.isArray(label.offset)) {
        label.offset = AMap.Pixel.apply(AMap, label.offset)
      }
      this.aMapMarker && this.aMapMarker.setLabel(label)
    }
    AmapMark.prototype.setAngle = function(angle) {
      this.aMapMarker && this.aMapMarker.setAngle(angle)
    }
    AmapMark.prototype.setzIndex = function(zIndex) {
      this.aMapMarker && this.aMapMarker.setzIndex(zIndex)
    }
    AmapMark.prototype.setDraggable = function(draggable) {
      this.aMapMarker && this.aMapMarker.setDraggable(draggable)
    }
    AmapMark.prototype.setCursor = function(cursor) {
      this.aMapMarker && this.aMapMarker.setCursor(cursor)
    }
    AmapMark.prototype.setContent = function(content) {
      this.aMapMarker && this.aMapMarker.setContent(content)
    }
    AmapMark.prototype.setTitle = function(title) {
      this.aMapMarker && this.aMapMarker.setTitle(title)
    }
    AmapMark.prototype.setExtData = function(extData) {
      this.aMapMarker && this.aMapMarker.setExtData(extData)
    }
    AmapMark.prototype.setPosition = function(position) {
      var _a
      this.aMapMarker &&
        this.aMapMarker.setPosition(
          Array.isArray(position)
            ? new ((_a = AMap.LngLat).bind.apply(_a, __spreadArrays([void 0], position)))()
            : position
        )
      this.$parent.$emit('setFitView')
    }
    AmapMark.prototype.setOffset = function(offset) {
      var _a
      this.aMapMarker &&
        this.aMapMarker.setOffset(
          Array.isArray(offset)
            ? new ((_a = AMap.Pixel).bind.apply(_a, __spreadArrays([void 0], offset)))()
            : offset
        )
    }
    AmapMark.prototype.beforeDestroy = function() {
      var _this = this
      if (this.aMap && this.aMapMarker) {
        this.aMap.remove(this.aMapMarker)
        Object.keys(this.$listeners).forEach(function(key) {
          _this.aMapMarker.off(key, _this.$listeners[key])
        })
      }
    }
    AmapMark.prototype.render = function() {
      return null
    }
    __decorate(
      [vuePropertyDecorator.Prop({ type: Array, required: true })],
      AmapMark.prototype,
      'position',
      void 0
    )
    __decorate([vuePropertyDecorator.Prop({ type: String })], AmapMark.prototype, 'anchor', void 0)
    __decorate([vuePropertyDecorator.Prop({ type: Array })], AmapMark.prototype, 'offset', void 0)
    __decorate(
      [vuePropertyDecorator.Prop({ type: String })],
      AmapMark.prototype,
      'animation',
      void 0
    )
    __decorate(
      [vuePropertyDecorator.Prop({ type: Boolean, default: true })],
      AmapMark.prototype,
      'clickable',
      void 0
    )
    __decorate(
      [vuePropertyDecorator.Prop({ type: [Number, String] })],
      AmapMark.prototype,
      'angle',
      void 0
    )
    __decorate([vuePropertyDecorator.Prop({ type: Object })], AmapMark.prototype, 'label', void 0)
    __decorate([vuePropertyDecorator.Prop({ type: Number })], AmapMark.prototype, 'zIndex', void 0)
    __decorate(
      [vuePropertyDecorator.Prop({ type: Boolean, default: false })],
      AmapMark.prototype,
      'draggable',
      void 0
    )
    __decorate([vuePropertyDecorator.Prop({ type: String })], AmapMark.prototype, 'cursor', void 0)
    __decorate([vuePropertyDecorator.Prop({ type: String })], AmapMark.prototype, 'content', void 0)
    __decorate([vuePropertyDecorator.Prop({ type: String })], AmapMark.prototype, 'title', void 0)
    __decorate(
      [vuePropertyDecorator.Prop({ type: [Object, String] })],
      AmapMark.prototype,
      'icon',
      void 0
    )
    __decorate([vuePropertyDecorator.Prop({ type: Object })], AmapMark.prototype, 'shadow', void 0)
    __decorate([vuePropertyDecorator.Prop({ type: Object })], AmapMark.prototype, 'shape', void 0)
    __decorate([vuePropertyDecorator.Prop()], AmapMark.prototype, 'extData', void 0)
    __decorate([vuePropertyDecorator.Watch('anchor')], AmapMark.prototype, 'setAnchor', null)
    __decorate([vuePropertyDecorator.Watch('animation')], AmapMark.prototype, 'setAnimation', null)
    __decorate([vuePropertyDecorator.Watch('clickable')], AmapMark.prototype, 'setClickable', null)
    __decorate(
      [vuePropertyDecorator.Watch('label', { deep: true })],
      AmapMark.prototype,
      'setLabel',
      null
    )
    __decorate([vuePropertyDecorator.Watch('angle')], AmapMark.prototype, 'setAngle', null)
    __decorate([vuePropertyDecorator.Watch('zIndex')], AmapMark.prototype, 'setzIndex', null)
    __decorate([vuePropertyDecorator.Watch('draggable')], AmapMark.prototype, 'setDraggable', null)
    __decorate([vuePropertyDecorator.Watch('cursor')], AmapMark.prototype, 'setCursor', null)
    __decorate([vuePropertyDecorator.Watch('content')], AmapMark.prototype, 'setContent', null)
    __decorate([vuePropertyDecorator.Watch('title')], AmapMark.prototype, 'setTitle', null)
    __decorate([vuePropertyDecorator.Watch('extData')], AmapMark.prototype, 'setExtData', null)
    __decorate(
      [vuePropertyDecorator.Watch('position', { deep: true })],
      AmapMark.prototype,
      'setPosition',
      null
    )
    __decorate(
      [vuePropertyDecorator.Watch('offset', { deep: true })],
      AmapMark.prototype,
      'setOffset',
      null
    )
    AmapMark = __decorate([vuePropertyDecorator.Component], AmapMark)
    return AmapMark
  })(vuePropertyDecorator.Vue)

  var MassMarks = /** @class */ (function(_super) {
    __extends(MassMarks, _super)
    function MassMarks() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this
      _this.handleSingleStyleObject = function(style) {
        var _a, _b
        Array.isArray(style.anchor) &&
          (style.anchor = new ((_a = AMap.Pixel).bind.apply(
            _a,
            __spreadArrays([void 0], style.anchor)
          ))())
        Array.isArray(style.size) &&
          (style.size = new ((_b = AMap.Size).bind.apply(
            _b,
            __spreadArrays([void 0], style.size)
          ))())
        return style
      }
      _this.handleStyle = function(style) {
        if (Array.isArray(style)) {
          style.forEach(_this.handleSingleStyleObject)
        } else if (style) {
          _this.handleSingleStyleObject(style)
        }
        return style
      }
      return _this
    }
    MassMarks.prototype.mounted = function() {
      var _this = this
      this.$once('COMPONENTINIT', function(aMap) {
        var _a = _this,
          $attrs = _a.$attrs,
          $listeners = _a.$listeners,
          data = _a.data,
          styles = _a.styles
        if (styles) {
          styles = _this.handleStyle(styles)
        }
        _this.aMap = aMap
        _this.massMarks = new AMap.MassMarks(
          data,
          __assign(__assign({}, $attrs), { style: styles })
        )
        Object.keys($listeners).forEach(function(key) {
          _this.massMarks.on(
            key,
            $listeners[key].bind(null, {
              massMarks: _this.massMarks,
              aMap: aMap
            })
          )
        })
        _this.massMarks.setMap(_this.aMap)
      })
    }
    MassMarks.prototype.dataChange = function(val) {
      this.massMarks && this.massMarks.setData(val)
    }
    MassMarks.prototype.styleChange = function(val) {
      val = this.handleStyle(val)
      this.massMarks && this.massMarks.setStyle(val)
    }
    MassMarks.prototype.beforeDestroy = function() {
      var _this = this
      if (this.aMap && this.massMarks) {
        this.aMap.remove(this.massMarks)
        Object.keys(this.$listeners).forEach(function(key) {
          _this.massMarks.off(key, _this.$listeners[key])
        })
      }
    }
    MassMarks.prototype.render = function() {
      return null
    }
    __decorate(
      [vuePropertyDecorator.Prop({ type: Array, required: true })],
      MassMarks.prototype,
      'data',
      void 0
    )
    __decorate(
      [vuePropertyDecorator.Prop({ type: [Object, Array] })],
      MassMarks.prototype,
      'styles',
      void 0
    )
    __decorate(
      [vuePropertyDecorator.Watch('data', { deep: true })],
      MassMarks.prototype,
      'dataChange',
      null
    )
    __decorate(
      [vuePropertyDecorator.Watch('styles', { deep: true })],
      MassMarks.prototype,
      'styleChange',
      null
    )
    MassMarks = __decorate([vuePropertyDecorator.Component], MassMarks)
    return MassMarks
  })(vuePropertyDecorator.Vue)

  var PathNavigator = /** @class */ (function(_super) {
    __extends(PathNavigator, _super)
    function PathNavigator() {
      return (_super !== null && _super.apply(this, arguments)) || this
    }
    PathNavigator.prototype.created = function() {
      var _this = this
      this.$on('DATACHANGE', function(data) {
        if (_this.pathNavigator) {
          _this.close()
        }
        _this.createPathNavigator(data)
      })
      this.$once('COMPONENTINIT', function(data) {
        _this.createPathNavigator(data)
      })
    }
    PathNavigator.prototype.createPathNavigator = function(_a) {
      var _this = this
      var count = _a.count,
        pathSimplifier = _a.pathSimplifier,
        PathSimplifier = _a.PathSimplifier
      var _b = this,
        $attrs = _b.$attrs,
        speed = _b.speed,
        range = _b.range,
        getOptions = _b.getOptions,
        index = _b.index
      var options = __assign(__assign({}, $attrs), { speed: speed, range: range })
      if (getOptions) {
        options = __assign(__assign({}, options), getOptions(PathSimplifier) || {})
      }
      var num = count
      if (index !== undefined) num = index
      this.pathNavigator = pathSimplifier.createPathNavigator(num, options)
      this.pathNavigator.start()
      Object.keys(this.$listeners).forEach(function(key) {
        _this.pathNavigator.on(
          key,
          _this.$listeners[key].bind(null, {
            pathNavigator: _this.pathNavigator,
            pathSimplifier: pathSimplifier
          })
        )
      })
    }
    PathNavigator.prototype.setSpeed = function(val) {
      if (this.pathNavigator) {
        this.pathNavigator.setSpeed(val)
      }
    }
    PathNavigator.prototype.setRange = function(val) {
      if (this.pathNavigator) {
        this.pathNavigator.setRange(val)
      }
    }
    PathNavigator.prototype.close = function() {
      var _this = this
      if (this.pathNavigator) {
        Object.keys(this.$listeners).forEach(function(key) {
          _this.pathNavigator.off(key, _this.$listeners[key])
        })
        this.pathNavigator.destroy()
      }
    }
    PathNavigator.prototype.beforeDestroy = function() {
      this.close()
    }
    PathNavigator.prototype.render = function() {
      return null
    }
    __decorate(
      [vuePropertyDecorator.Prop({ type: Number })],
      PathNavigator.prototype,
      'speed',
      void 0
    )
    __decorate(
      [vuePropertyDecorator.Prop({ type: Array })],
      PathNavigator.prototype,
      'range',
      void 0
    )
    __decorate(
      [vuePropertyDecorator.Prop({ type: Function })],
      PathNavigator.prototype,
      'getOptions',
      void 0
    )
    __decorate(
      [vuePropertyDecorator.Prop({ type: Number })],
      PathNavigator.prototype,
      'index',
      void 0
    )
    __decorate([vuePropertyDecorator.Watch('speed')], PathNavigator.prototype, 'setSpeed', null)
    __decorate([vuePropertyDecorator.Watch('range')], PathNavigator.prototype, 'setRange', null)
    PathNavigator = __decorate([vuePropertyDecorator.Component], PathNavigator)
    return PathNavigator
  })(vuePropertyDecorator.Vue)

  var PathSimplifier = /** @class */ (function(_super) {
    __extends(PathSimplifier, _super)
    function PathSimplifier() {
      return (_super !== null && _super.apply(this, arguments)) || this
    }
    PathSimplifier.prototype.mounted = function() {
      var _this = this
      this.$once('COMPONENTINIT', function(aMap) {
        _this.aMap = aMap
        initAMapUI()
        AMapUI.load(['ui/misc/PathSimplifier'], function(PathSimplifier) {
          window.PathSimplifier = PathSimplifier
          _this.PathSimplifier = PathSimplifier
          if (!PathSimplifier.supportCanvas) {
            alert('当前环境不支持 Canvas！')
          }
          _this.$emit('ui-init', PathSimplifier)
          var _a = _this,
            $attrs = _a.$attrs,
            data = _a.data
          // 创建组件实例
          _this.pathSimplifier = new PathSimplifier(
            __assign(
              __assign(
                {
                  getPath: function(pathData) {
                    return pathData.path
                  }
                },
                $attrs
              ),
              {
                data: data,
                map: aMap // 所属的地图实例
              }
            )
          )
          _this.childrenInit()
          Object.keys(_this.$listeners).forEach(function(key) {
            _this.pathSimplifier.on(
              key,
              _this.$listeners[key].bind(null, {
                pathSimplifier: _this.pathSimplifier,
                aMap: aMap
              })
            )
          })
        })
      })
    }
    PathSimplifier.prototype.dataChange = function(val) {
      if (this.pathSimplifier) {
        this.pathSimplifier.setData(val)
        this.childrenInit('DATACHANGE')
      }
    }
    PathSimplifier.prototype.updated = function() {
      this.childrenInit()
    }
    PathSimplifier.prototype.beforeDestroy = function() {
      var _this = this
      if (this.pathSimplifier && this.aMap) {
        Object.keys(this.$listeners).forEach(function(key) {
          _this.pathSimplifier.off(key, _this.$listeners[key])
        })
        this.pathSimplifier.setData([])
        this.pathSimplifier.destroy()
      }
    }
    PathSimplifier.prototype.childrenInit = function(eventName) {
      var _this = this
      if (eventName === void 0) {
        eventName = 'COMPONENTINIT'
      }
      var _a = this,
        PathSimplifier = _a.PathSimplifier,
        pathSimplifier = _a.pathSimplifier
      if (!PathSimplifier) return
      this.$children.forEach(function(component, count) {
        if (count <= _this.data.length - 1) {
          component.$emit(eventName, {
            count: count,
            PathSimplifier: PathSimplifier,
            pathSimplifier: pathSimplifier
          })
        }
      })
    }
    PathSimplifier.prototype.render = function(h) {
      return h('span', this.$slots.default)
    }
    __decorate(
      [vuePropertyDecorator.Prop({ type: Array, required: true })],
      PathSimplifier.prototype,
      'data',
      void 0
    )
    __decorate([vuePropertyDecorator.Watch('data')], PathSimplifier.prototype, 'dataChange', null)
    PathSimplifier = __decorate(
      [
        vuePropertyDecorator.Component({
          inheritAttrs: false
        })
      ],
      PathSimplifier
    )
    return PathSimplifier
  })(vuePropertyDecorator.Vue)

  function regComponents(_Vue) {
    _Vue.component('el-amap-controlbar', ControlBar)
    _Vue.component('el-amap-toolbar', ToolBar)
    _Vue.component('el-amap-maptype', MapType)
    _Vue.component('el-amap-overview', OverView)
    _Vue.component('el-amap-scale', Scale)
    _Vue.component('el-amap-control', Control)
    _Vue.component('el-amap', AMapComponent)
    _Vue.component('el-amap-infowindow', InfoWindow)
    _Vue.component('el-amap-mark', AmapMark)
    _Vue.component('el-amap-massmarks', MassMarks)
    _Vue.component('el-amap-pathnavigator', PathNavigator)
    _Vue.component('el-amap-pathsimplifier', PathSimplifier)
  }

  var installed = false
  var install = function(_Vue, options) {
    if (installed) return
    installed = true
    AMapLoader.setConfig(options)
    regComponents(_Vue)
  }

  exports.AMapLoader = AMapLoader
  exports.default = install

  Object.defineProperty(exports, '__esModule', { value: true })
})
