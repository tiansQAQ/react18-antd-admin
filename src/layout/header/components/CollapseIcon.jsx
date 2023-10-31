// 展开收起 icon
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { updateCollapse } from '@/store/modules/menu'
const collapseIconStyle = { fontSize: '18px', cursor: 'pointer' }

export default function CollapseIcon() {
  const dispatch = useDispatch()
  const { isCollapse } = useSelector((state) => state.menu)

  return (
    <span
      onClick={() => {
        dispatch(updateCollapse(!isCollapse))
      }}
    >
      {isCollapse ? <MenuUnfoldOutlined style={collapseIconStyle} /> : <MenuFoldOutlined style={collapseIconStyle} />}
    </span>
  )
}
