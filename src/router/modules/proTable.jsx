/** 超级表格 */
import Layout from '@/layout'
import React from 'react'
import lazyLoad from '@/utils/lazyLoad'
const proTableRouter = [
  {
    element: <Layout />,
    meta: {
      title: '超级表格'
    },
    children: [
      {
        path: '/proTable/useHooks',
        element: lazyLoad(React.lazy(() => import('@/views/proTable/useHooks'))),
        meta: {
          requiresAuth: true,
          title: '使用hooks',
          key: 'useHooks'
        }
      }
    ]
  }
]

export default proTableRouter
