<template>
  <el-amap 
    style="height: 400px;"
    :zoom="zoom"
    :center="center"
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
      markers: [],
    }
  },
  mounted () {
    this.markers = [
      {
        position: [120.15, 30.28],
        label: { content: '杭州' },
        icon: {
          imageSize: [20, 40],
          size: [20, 40],
          image: this.$withBase('/car.png')
        },
      },
      {
        position: [116.15, 39.28],
        label: { content: '北京' },
        icon: {
          imageSize: [20, 40],
          size: [20, 40],
          image: this.$withBase('/car.png')
        },
      }
    ]
  },
  methods: {
    markerClick (...args) {
      console.log(args)
    }
  }
}
</script>