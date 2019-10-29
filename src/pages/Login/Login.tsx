import React, { useContext } from 'react'
import { Form, Icon, Input, Button, Row, Col } from 'antd'
import { FormComponentProps } from 'antd/es/form'
import { RouteComponentProps } from 'react-router-dom'

import api from '../../api'
import { context } from '../../store'
import { login } from '../../store/redux/user/actionCreator'
import Token from '../../utils/auth'

interface IProps extends RouteComponentProps, FormComponentProps {
  form: any;
  history: any;
}

interface loginInfo {
  username: string;
  password: string;
}

function Login(props: IProps) {

  const { userinfo: { dispatch } } = useContext(context)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    props.form.validateFields((err: any, values: loginInfo) => {
      if (!err) {
        console.log('Received values of form: ', values)
        api.loginByNuctech(values).then((res: any) => {
          console.log(res)
          let { username, userID, userType, avatar, accessToken } = res.data
          let userinfo = {
            username,
            userID,
            avatar,
            isAdmin: userType === 2 ? true : false
          }
          Token.setToken(accessToken)
          dispatch(login(userinfo))
          props.history.push('/')
        }).catch(err => console.log(err))
      }
    })
  }

  const { getFieldDecorator } = props.form

  return (
    <Row type="flex" justify="center" align="middle" className="m-login">
      <Col xs={20} sm={12} md={12} lg={10} xl={7} className="login-wrapper">
        <h1 className="login-title">运维数据平台</h1>
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
      </Col>
    </Row>
  )
}

export default Form.create({ name: 'normal_login' })(Login)
