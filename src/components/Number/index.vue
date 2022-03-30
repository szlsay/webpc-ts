<template>
  <div class="xtx-numbox">
    <div class="label" v-if="isLabel">数量</div>
    <div class="numbox">
      <a href="javascript:;" @click="des">-</a>
      <input type="text" readonly :value="num" />
      <a href="javascript:;" @click="ins">+</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
export default defineComponent({
  name: 'XtxNumber',
  props: {
    isLabel: {
      type: Boolean,
      default: true,
    },
    max: {
      type: Number,
    },
    min: {
      type: Number,
    },
    modelValue: {
      type: Number,
    }
  },
  setup(props, ctx) {
    // num始终以modelValue为主
    // 父组件传入的modelValue如果发生变化 同步关系还在不在？关系不在 只能同步到props
    const num = ref(props.modelValue)
    watch(
      () => {
        return props.modelValue
      },
      () => {
        // 手动把最新值同步给num
        num.value = props.modelValue
      }
    )
    // 增加函数
    function ins() {
      if (num.value === props.max) {
        return
      }
      num.value++
      // 同步到父组件中的count
      ctx.emit('update:modelValue', num.value)
    }
    // 减少函数
    function des() {
      if (num.value === props.min) {
        return
      }
      num.value--
      // 同步到父组件中的count
      ctx.emit('update:modelValue', num.value)
    }
    return {
      num,
      ins,
      des,
    }
  },
})
</script>

<style scoped lang="less">
.xtx-numbox {
  display: flex;
  align-items: center;
  .label {
    width: 60px;
    color: #999;
    padding-left: 10px;
  }
  .numbox {
    width: 120px;
    height: 30px;
    border: 1px solid #e4e4e4;
    display: flex;
    > a {
      width: 29px;
      line-height: 28px;
      text-align: center;
      background: #f8f8f8;
      font-size: 16px;
      color: #666;
      &:first-of-type {
        border-right: 1px solid #e4e4e4;
      }
      &:last-of-type {
        border-left: 1px solid #e4e4e4;
      }
    }
    > input {
      width: 60px;
      padding: 0 5px;
      text-align: center;
      color: #666;
    }
  }
}
</style>
