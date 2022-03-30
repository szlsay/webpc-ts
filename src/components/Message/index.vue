<template>
  <transition name="down">
    <div class="xtx-message" :style="style[type]" v-if="visible">
      <!-- 上面绑定的是样式 -->
      <i class="iconfont" :class="[icons[type]]"></i>
      <!-- 不同提示图标会变 -->
      <span class="text">{{ text }}</span>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, PropType } from 'vue'
export default defineComponent({
  name: 'XtxMessage',
  props: {
    text: {
      type: String,
      default: '',
    },
    type: {
      type: String as PropType<'warn' | 'error' | 'success'>,
      // warn 警告  error 错误  success 成功
      default: 'warn',
    },
  },
  setup() {
    // 样式集合
    const style = {
      warn: {
        color: '#E6A23C',
        backgroundColor: 'rgb(253, 246, 236)',
        borderColor: 'rgb(250, 236, 216)',
      },
      error: {
        color: '#F56C6C',
        backgroundColor: 'rgb(254, 240, 240)',
        borderColor: 'rgb(253, 226, 226)',
      },
      success: {
        color: '#67C23A',
        backgroundColor: 'rgb(240, 249, 235)',
        borderColor: 'rgb(225, 243, 216)',
      },
    }

    // 图标类名集合
    const icons = {
      warn: 'icon-warning',
      error: 'icon-shanchu',
      success: 'icon-queren2',
    }
    const visible = ref(false) // 隐藏
    onMounted(() => {
      visible.value = true
    })
    return { style, icons, visible }
  },
})
</script>
<style scoped lang="less">
.xtx-message {
  width: 300px;
  height: 50px;
  position: fixed;
  z-index: 9999;
  left: 50%;
  margin-left: -150px;
  top: 25px;
  line-height: 50px;
  padding: 0 25px;
  border: 1px solid #e4e4e4;
  background: #f5f5f5;
  color: #999;
  border-radius: 4px;
  i {
    margin-right: 4px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
}
.down {
  &-enter {
    // 进入前 在正常文档流的基础上往上移动75px 并且透明度为零完全透明
    &-from {
      transform: translate3d(0, -75px, 0);
      opacity: 0;
    }
    // 进入中 对所有的可以支持过滤效果的样式都应用过渡效果 整个过渡时长是0.5s
    &-active {
      transition: all 0.5s;
    }
    // 进入后 恢复到正常状态
    &-to {
      transform: none;
      opacity: 1;
    }
  }
}
</style>