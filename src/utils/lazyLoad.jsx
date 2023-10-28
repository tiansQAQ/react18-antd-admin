/**
 * 使用 Suspense 实现懒加载组件
 * https://zh-hans.react.dev/reference/react/lazy#lazy
 */
import { Suspense } from 'react'
import { Spin } from 'antd'

export default function lazyLoad(LazyComponent) {
  return (
    <Suspense fallback={<Spin />}>
      <LazyComponent />
    </Suspense>
  )
}
