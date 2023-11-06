import { Form, Input, Card, Button, message } from 'antd'
import './index.scss'
import { useState } from 'react'
import { login } from '@/api/data'
import { useNavigate } from 'react-router-dom'
import { HOME_URL } from '@/config'
export default function Login() {
  const navigate = useNavigate()
  const [loginLoading, setsetLoginLoading] = useState(false)

  const onFinish = async (values) => {
    setsetLoginLoading(true)
    const { code } = await login(values).finally(() => setsetLoginLoading(false))
    if (code === 200) {
      message.success('登录成功！')
      navigate(HOME_URL, { replace: true })
    }
  }
  return (
    <div className="login-container flex-center-center">
      <Card title="React18-admin" bordered={false} style={{ width: 420 }}>
        <Form autoComplete="off" onFinish={onFinish}>
          <Form.Item label="帐号" name="username" rules={[{ required: true, message: '请输入用户名' }]}>
            <Input placeholder="admin" />
          </Form.Item>
          <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码' }]}>
            <Input.Password placeholder="admin" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loginLoading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
