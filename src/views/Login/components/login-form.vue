<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import type { LoginForm } from '@/types/login'
import { Form, Field } from 'vee-validate'
import Message from '@/components/Message/index'
const { loginStore } = useStore()
// 表单对象
const form = reactive<LoginForm>({
  account: '',
  password: '',
})

// 校验对象
const validateSchema = {
  account(value: string) {
    if (!value) return '请输入用户名'
    return true
  },
  password(value: string) {
    if (!value) return '请输入密码'
    if (!/^\w{6,24}$/.test(value)) return '密码是6-24个字符'
    return true
  },
}
const router = useRouter()
const formRef = ref()
const login = async () => {
  const valid = await formRef.value.validate()
  if (valid) {
    await loginStore.login(form)
    router.push('/')
    Message({ type: 'success', text: '登录成功' })
  }
}
</script>


<template>
  <div class="account-box">
    <div class="form">
      <Form
        class="form"
        :validation-schema="validateSchema"
        v-slot="{ errors }"
        autocomplete="off"
        ref="formRef"
      >
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-user"></i>
            <Field
              v-model="form.account"
              name="account"
              type="text"
              placeholder="请输入用户名"
              :class="{ error: errors.account }"
            />
          </div>
          <!-- 表单验证错误信息提示 -->
          <div class="error" v-if="errors.account">
            <i class="iconfont icon-warning" />{{ errors.account }}
          </div>
        </div>
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-lock"></i>
            <Field
              :class="{ error: errors.password }"
              v-model="form.password"
              name="password"
              type="password"
              placeholder="请输入密码"
            />
          </div>
          <div class="error" v-if="errors.password">
            <i class="iconfont icon-warning" />{{ errors.password }}
          </div>
        </div>
      </Form>
      <a href="javascript:;" class="btn" @click="login">登录</a>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@/styles/var.less';
// 账号容器
.account-box {
  .toggle {
    padding: 15px 40px;
    text-align: right;
    a {
      color: @xtxColor;
      i {
        font-size: 14px;
      }
    }
  }
  .form {
    padding: 0 20px 20px 20px;
    &-item {
      margin-bottom: 28px;
      .input {
        position: relative;
        height: 36px;
        > i {
          width: 34px;
          height: 34px;
          background: #cfcdcd;
          color: #fff;
          position: absolute;
          left: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 18px;
        }
        input {
          padding-left: 44px;
          border: 1px solid #cfcdcd;
          height: 36px;
          line-height: 36px;
          width: 100%;
          &.error {
            border-color: @priceColor;
          }
          &.active,
          &:focus {
            border-color: @xtxColor;
          }
        }
        .code {
          position: absolute;
          right: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 14px;
          background: #f5f5f5;
          color: #666;
          width: 90px;
          height: 34px;
          cursor: pointer;
        }
      }
      > .error {
        position: absolute;
        font-size: 12px;
        line-height: 28px;
        color: @priceColor;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
      }
    }
    .agree {
      a {
        color: #069;
      }
    }
    .btn {
      display: block;
      width: 100%;
      height: 40px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      background: @xtxColor;
      &.disabled {
        background: #cfcdcd;
      }
    }
  }
  .action {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .url {
      a {
        color: #999;
        margin-left: 10px;
      }
    }
  }
}
</style>