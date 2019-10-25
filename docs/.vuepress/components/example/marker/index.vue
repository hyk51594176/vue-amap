<template>
  <el-amap 
    style="height: 400px;"
    :zoom="zoom"
    :center="center"
    @complete="complete"
  >
    <el-amap-mark
      v-for="marker in markers"
      :key="`${marker.position[0]}_${marker.position[1]}`"
      v-bind="marker"
      @click="markerClick"
    />
  </el-amap>
</template>

<script>
export default {
  data () {
    return {
      zoom: 6,
      center: [116.3, 39.1],
      markers: [
        {
          position: [120.15, 30.28],
          label: { content: '杭州' },
          icon: {
            size: [25, 34],
            image:
              'http://a.amap.com/jsapi_demos/static/demo-center/icons/dir-marker.png',
            imageSize: [135, 40]
          }
        },
        {
          position: [116.15, 39.28],
          label: { content: '北京' },
          icon: {
            size: [25, 34],
            image:
              'http://a.amap.com/jsapi_demos/static/demo-center/icons/dir-marker.png',
            imageSize: [135, 40]
          }
        },
      ]
    }
  },
  methods: {
    complete () {

    }
  }
}
</script>