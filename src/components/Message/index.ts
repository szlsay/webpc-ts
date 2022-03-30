// 函数式组件的改写
import { createVNode, render } from 'vue'
import MessageComponent from './index.vue'

type Type = 'warn' | 'error' | 'success'
type Props = {
  type: Type
  text: string
}

function Message({ type, text }: Props) {
  const MVNode = createVNode(MessageComponent, { text, type })
  const container = document.createElement('div')
  document.body.appendChild(container)
  render(MVNode, container)

  // 1500之后消失
  setTimeout(() => {
    render(null, container)
  }, 1500)
}

export default Message
