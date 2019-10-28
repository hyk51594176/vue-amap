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
    />
    <el-amap-pathsimplifier 
      :data='data'
      :renderOptions='renderOptions'
    >
      <el-amap-pathnavigator :getOptions='getOptions'/>
    </el-amap-pathsimplifier>
  </el-amap>
</template>

<script>
export default {
  data () {
    return {
      zoom: 6,
      center: [116.3, 39.1],
      markers: [],
      data: [
        {
          name: '轨迹0',
          path: [
            [116.340417, 39.1],
            [120.15, 30.28]
          ]
        }
      ],
      renderOptions: {
        pathLineStyle: {
          strokeStyle: 'red',
          lineWidth: 6,
          dirArrowStyle: true
        }
      }
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
    getOptions(PathSimplifier) {
      return {
        loop: true,
        speed: 1000000,
        pathNavigatorStyle: {
          width: 20,
          height: 40,
          content: PathSimplifier.Render.Canvas.getImageContent(this.$withBase('/car.png'), onload, onerror),
          strokeStyle: null,
          fillStyle: null,
          pathLinePassedStyle: {
            lineWidth: 6,
            strokeStyle: '#f34135',
            dirArrowStyle: {
              stepSpace: 15,
              strokeStyle: '#fff'
            }
          }
        }
      }
    }
  }
}
</script>