// 全局设置组件大小

import { FontSizeOutlined } from '@ant-design/icons'
import { Dropdown } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setComponentSize } from '@/store/modules/global'
export default function SizeSelect() {
  const dispatch = useDispatch()
  const { componentSize } = useSelector((state) => state.global)

  const handleClick = (e) => {
    dispatch(setComponentSize(e.key))
  }
  const items = [
    { key: 'middle', label: '默认', onClick: handleClick, disabled: componentSize === 'middle' },
    { key: 'large', label: '大', onClick: handleClick, disabled: componentSize === 'large' },
    { key: 'small', label: '小', onClick: handleClick, disabled: componentSize === 'small' }
  ]

  return (
    <Dropdown className="mr10" menu={{ items }} placement="bottom">
      <FontSizeOutlined className="poi" />
    </Dropdown>
  )
}
