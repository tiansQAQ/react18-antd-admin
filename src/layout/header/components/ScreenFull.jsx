// 全屏
import React from 'react'
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { message } from 'antd'
import screenfull from 'screenfull'
export default function ScreenFull() {
  const [isFullScreen, setIsFullScreen] = useState(false)

  useEffect(() => {
    if (screenfull.isEnabled) {
      screenfull.on('change', () => {
        setIsFullScreen(screenfull.isFullscreen)
      })
    }
    return () => {
      if (screenfull.isEnabled) {
        screenfull.off('change', () => {
          setIsFullScreen(screenfull.isFullscreen)
        })
      }
    }
  }, [])

  const handleScreenFull = () => {
    if (!screenfull.isEnabled) {
      return message.warning('您的浏览器不支持全屏！')
    }
    screenfull.toggle()
  }
  return React.createElement(isFullScreen ? FullscreenExitOutlined : FullscreenOutlined, { className: 'poi', onClick: handleScreenFull })
}
