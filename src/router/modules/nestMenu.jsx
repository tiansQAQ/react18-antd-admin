// 嵌套菜单

import React from 'react'
import lazyLoad from '@/utils/lazyLoad'
import Layout from '@/layout'

// menu 模块
const nestMenuRouter = [
  {
    element: <Layout />,
    meta: {
      title: '嵌套菜单'
    },
    children: [
      {
        path: '/menu/menu1',
        element: lazyLoad(React.lazy(() => import('@/views/menu/menu1'))),
        meta: {
          requiresAuth: true,
          title: '菜单1',
          key: 'menu1'
        }
      },
      {
        path: '/menu/menu2/menu21',
        element: lazyLoad(React.lazy(() => import('@/views/menu/menu2/menu21'))),
        meta: {
          requiresAuth: true,
          title: '菜单2-1',
          key: 'menu21'
        }
      },
      {
        path: '/menu/menu2/menu22/menu221',
        element: lazyLoad(React.lazy(() => import('@/views/menu/menu2/menu22/menu221'))),
        meta: {
          requiresAuth: true,
          title: '菜单2-2-1',
          key: 'menu221'
        }
      },
      {
        path: '/menu/menu2/menu22/menu222',
        element: lazyLoad(React.lazy(() => import('@/views/menu/menu2/menu22/menu222'))),
        meta: {
          requiresAuth: true,
          title: '菜单2-2-2',
          key: 'menu222'
        }
      },
      {
        path: '/menu/menu2/menu23',
        element: lazyLoad(React.lazy(() => import('@/views/menu/menu2/menu23'))),
        meta: {
          requiresAuth: true,
          title: '菜单2-3',
          key: 'menu23'
        }
      },
      {
        path: '/menu/menu3',
        element: lazyLoad(React.lazy(() => import('@/views/menu/menu3'))),
        meta: {
          requiresAuth: true,
          title: '菜单3',
          key: 'menu3'
        }
      }
    ]
  }
]

export default nestMenuRouter
