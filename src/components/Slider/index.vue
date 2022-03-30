<template>
  <div class="box" style="height: 500px">
    <div class="xtx-slider" @mouseenter="clearTimer" @mouseleave="startTimer">
      <ul class="slider-body">
        <li
          class="slider-item"
          v-for="(item, i) in sliders"
          :key="i"
          :class="{ fade: curIndex === i }"
        >
          <img :src="item.imgUrl" alt="" />
        </li>
      </ul>
      <div class="slider-indicator">
        <span
          v-for="(item, index) in sliders"
          :key="index"
          @click="curIndex = index"
          :class="{ active: curIndex === index }"
        ></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, PropType } from 'vue'
import type { BannerItem } from '@/types/data'

export default defineComponent({
  props: {
    sliders: {
      type: Array as PropType<BannerItem[]>,
      default: () => [],
    },
    autoPlay: {
      type: Boolean,
    },
  },
  setup(props) {
    const curIndex = ref(0)
    const timer = ref<number>()
    function clearTimer() {
      clearInterval(timer.value)
    }
    function startTimer() {
      initLoop()
    }

    function initLoop() {
      if (!props.autoPlay) {
        return false
      }
      timer.value = window.setInterval(() => {
        curIndex.value++
        if (curIndex.value > props.sliders.length - 1) {
          curIndex.value = 0
        }
      }, 2000)
    }
    onMounted(() => {
      initLoop()
    })
    onUnmounted(() => clearInterval(timer.value))
    return {
      clearTimer,
      startTimer,
      curIndex
    }
  },
})
</script>

<style scoped lang='less'>
.xtx-slider {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
  .slider {
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background: #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      &.prev {
        left: 20px;
      }
      &.next {
        right: 20px;
      }
    }
  }
  &:hover {
    .slider-btn {
      opacity: 1;
    }
  }
}
</style>
