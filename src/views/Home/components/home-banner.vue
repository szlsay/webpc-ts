<script lang="ts" setup>
import { useStore } from '@/stores'
const { homeStore } = useStore()
homeStore.getBannerList()
</script>


<template>
  <div class="home-banner">
    <Slider :sliders="homeStore.bannerList"/>
  </div>
</template>


<style scoped lang='less'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
}
</style>