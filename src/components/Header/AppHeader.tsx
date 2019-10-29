import React, { useState, useCallback, useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Icon, Menu } from 'antd'

import logo from '../../assets/logo.png'
import { context } from '../../store'
import { logout } from '../../store/redux/user/actionCreator'

export default function AppHeader() {

  const { pathname } = useLocation()
  const [current, setCurrent] = useState(pathname.split('/')[2])
  const { userinfo: { state, dispatch } } = useContext(context)

  const history = useHistory()
  const handleLogout = useCallback(() => {
    dispatch(logout())
    history.push('/login')
  }, [history, dispatch])

  const handleClick = (e):void => {
    setCurrent(e.key)
    if (e.key === 'admin') {
      return history.push('/admin/home')
    }
    history.push(e.key)
  }

  const generateMenu = () => (
    <Menu className="app-nav" onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home">
          <Icon type="home" />
          Home
        </Menu.Item>
        <Menu.Item key="about">
          <Icon type="cloud" />
          About
        </Menu.Item>
        <Menu.Item key="opera">
          <Icon type="crown" />
          Opera
        </Menu.Item>
        <Menu.Item key="admin">
          <Icon type="crown" />
          Admin
        </Menu.Item>
      </Menu>
  )

  return (
    <div className="app-header">
      <span className="app-logo">
        <img src={logo} alt="logo"/>
      </span>
      { generateMenu() }
      <div className="userinfo">
        <span>{ state.username }</span>
        <Icon onClick={handleLogout} type="logout" />
      </div>
    </div>
  )
}
