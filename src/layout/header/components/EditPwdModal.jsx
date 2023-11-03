// 修改密码Modal

import { Modal, Form, Input } from 'antd'
import { useState, useImperativeHandle } from 'react'

const layout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 20
  }
}
export default function EditPwdModal(props) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [form] = Form.useForm()
  useImperativeHandle(props.innerRef, () => {
    return { showModal }
  })
  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    form.validateFields().then(() => {
      setConfirmLoading(true)
      setTimeout(() => {
        setConfirmLoading(false)
        setIsModalOpen(false)
      }, 2000)
    })
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const handleAfterClose = () => {
    console.log('handleAfterClose')
  }

  return (
    <Modal title="修改密码" maskClosable={false} confirmLoading={confirmLoading} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} destroyOnClose={true} afterClose={handleAfterClose}>
      <Form form={form} {...layout}>
        <Form.Item name="pwd" label="原始密码" rules={[{ required: true, message: '请输入原始密码' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item name="newPwd" label="新密码" rules={[{ required: true, message: '请输入新密码' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item name="confirmNewPwd" label="确认密码" rules={[{ required: true, message: '请输入确认密码' }]}>
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  )
}
