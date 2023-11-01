// 展开收起 icon
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { updateCollapse } from '@/store/modules/menu'

export default function CollapseIcon() {
  const dispatch = useDispatch()
  const { isCollapse } = useSelector((state) => state.menu)

  return (
    <span
      className="mr10"
      onClick={() => {
        dispatch(updateCollapse(!isCollapse))
      }}
    >
      {isCollapse ? <MenuUnfoldOutlined className="poi" /> : <MenuFoldOutlined className="poi" />}
    </span>
  )
}
