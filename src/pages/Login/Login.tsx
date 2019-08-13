import React, { useContext } from 'react'
import { Form, Icon, Input, Button } from 'antd'
import { FormComponentProps } from 'antd/es/form'

import { context } from '../../store'
import { login } from '../../store/redux/user/actionCreator'
import '../../styles/views/login.less'
import { RouteComponentProps } from 'react-router-dom'

interface UserFormProps extends FormComponentProps {
  age: number;
  name: string;
}

interface IProps extends RouteComponentProps, FormComponentProps {
  form: any,
  history: any
}

function Login(props: IProps) {

  const {userinfo: {dispatch}} = useContext(context)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values)
        dispatch(login({...values, avatar: ''}))
        props.history.push('/')
      }
    })
  }
  const { getFieldDecorator } = props.form
  return (
    <div className="m-login">
      <div className="login-form">
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Form.create({ name: 'normal_login' })(Login)
