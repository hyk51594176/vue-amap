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
      @click="markerClick(marker)"
    />
    <el-amap-infowindow
      :isOpen="isOpen"
      :offset="[16, -45]"
      :position="infowWindow.position"
    >
      <div class="custom-info">
        <div class="info-top">
          <div>车辆基本信息</div>
          <span class="info-top-btn" @click="isOpen=false">+</span>
        </div>
        <div class="info-middle">
          <ul>
            <li><strong>车牌号：</strong>{{infowWindow.plateNumber}}</li>
            <li><strong>定位时间：</strong>{{infowWindow.time}}</li>
            <li><strong>速度：</strong>{{infowWindow.spd}}km/h</li>
          </ul>
        </div>
        <div class="info-bottom">
          <img src="/sharp.png">
        </div>
      </div>
    </el-amap-infowindow>
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
            imageSize: [20, 40],
            size: [20, 40],
            image: '/car.png'
          },
        },
        {
          position: [116.15, 39.28],
          label: { content: '北京' },
          icon: {
            imageSize: [20, 40],
            size: [20, 40],
            image: '/car.png'
          },
        }
      ],
      isOpen: true,
      infowWindow: {
        plateNumber: '浙A66666',
        position: [120.15, 30.28],
        time: '2019-10-25 10:00',
        spd: 60
      }
    }
  },
  methods: {
    markerClick (marker) {
      let { position, label } = marker
      this.isOpen = true
      this.infowWindow = Object.assign(this.infowWindow, {
        position,
        plateNumber: label.content === '杭州'? '浙A66666': '京A66666'
      })
    }
  }
}
</script>

<style lang="less">
.custom-info {
  border: solid 1px #409eff;
  border-radius: 5px;
  position: relative;
  box-shadow: none;
  bottom: 0;
  left: 0;
  width: auto;
  padding: 0;
  &.ship-custom-info{
    width: 440px;
  }
  .info-top {
    position: relative;
    background: #409eff;
    border-radius: 4px 4px 0 0;
    div {
      display: inline-block;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      line-height: 31px;
      padding: 0 10px;
    }
    .info-top-btn {
      float: right;
      transform: rotate(45deg);
      color: #fff;
      font-size: 22px;
      padding-right: 5px;
      cursor: pointer;
    }
  }
  .info-middle {
    font-size: 12px;
    padding: 10px 6px;
    line-height: 20px;
    background: #fff;
    border-radius: 0 0 4px 4px;
    ul, li {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      strong {
        display: inline-block;
        width: 70px;
        text-align: right;
      }
      span{
        flex: 1;
      }
      &.showTrajectory{
        justify-content: flex-end;
        a{
          color: #409eff;
        }
      }
    }

    table {
      width: 100%;
      td {
        padding: 0 5px;
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
      }
      tr:first-child td {
        border-top: 1px solid #ccc;
      }
      tr td:first-child {
        border-left: 1px solid #ccc;
        font-weight: bold;
      }
      tr td:nth-child(3) {
        font-weight: bold;
      }
    }
  }
  .info-bottom {
    height: 0px;
    width: 100%;
    clear: both;
    text-align: center;
    position: relative;
    top: 0;
    margin: 0 auto;
    img {
      position: relative;
      z-index: 104;
    }
  }
}
</style>