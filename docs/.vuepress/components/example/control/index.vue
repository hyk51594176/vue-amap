<template>
  <el-amap 
    style="height: 400px;"
    :zoom="zoom"
    :center="center"
    @complete="complete"
  >
    <el-amap-maptype/>
    <el-amap-overview :isOpen="true"/>
    <el-amap-scale/>
    <el-amap-toolbar/>
    <el-amap-controlbar/>
    <el-amap-control control-name="Geolocation"></el-amap-control>
  </el-amap>
</template>

<script>
export default {
  data () {
    return {
      zoom: 6,
      center: [116.3, 39.1]
    }
  },
  methods: {
    complete () {
      console.log('complete')
    }
  }
}
</script>