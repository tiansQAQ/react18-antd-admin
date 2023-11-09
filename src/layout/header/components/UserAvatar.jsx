import { Avatar, Dropdown, Modal } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import EditPwdModal from './EditPwdModal'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from '@/store/modules/user'

// 用户信息
export default function UserAvatar() {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  
  const editPwdModalRef = useRef(null)
  const items = [
    {
      key: '1',
      label: <span>首页</span>,
      onClick: () => navigate('/home/index')
    },
    {
      key: '2',
      label: '个人中心',
      onClick: () => navigate('/userCenter')
    },
    {
      key: '3',
      label: '修改密码',
      onClick: () => {
        editPwdModalRef && editPwdModalRef.current && editPwdModalRef.current.showModal({ name: 11 })
      }
    },
    {
      type: 'divider'
    },
    {
      key: '4',
      label: '退出登录',
      onClick: () => {
        Modal.confirm({
          title: '温馨提示',
          content: '是否确认退出登录？',
          async onOk() {
            await dispatch(userActions.logout())
            const fullPath = `${location.pathname}${location.search}`
            navigate(`/login?redirect=${fullPath}`)
          },
          onCancel() {}
        })
      }
    }
  ]
  return (
    <>
      <Dropdown
        placement="bottomLeft"
        menu={{
          items
        }}
      >
        <Avatar className="poi" size={32} icon={<UserOutlined className="anticon" />} />
      </Dropdown>
      <EditPwdModal innerRef={editPwdModalRef} />
    </>
  )
}
