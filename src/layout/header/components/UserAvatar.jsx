import { Avatar, Dropdown } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import EditPwdModal from './EditPwdModal'
import { useRef, useState } from 'react'

// 用户信息
export default function UserAvatar() {
  const navigate = useNavigate()
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
      label: '退出登录'
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
