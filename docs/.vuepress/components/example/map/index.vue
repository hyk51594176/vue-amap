<template>
  <el-amap 
    style="height: 400px;"
    :zoom="zoom"
    :center="center"
    @complete="complete"
  ></el-amap>
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