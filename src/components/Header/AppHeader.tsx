import React, { useState, useCallback, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Icon, Menu } from 'antd'

import logo from '../../assets/logo.jpg'
import { context } from '../../store'

export default function AppHeader() {

  const [current, setCurrent] = useState('home')
  const { userinfo } = useContext(context)

  const history = useHistory()
  const logout = useCallback(() => {
    history.push('/login')
  }, [history])

  const handleClick = (e):void => {
    console.log(e)
    setCurrent(e.key)
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
      </Menu>
  )

  return (
    <div className="app-header">
      <span className="app-logo">
        <img src={logo} alt="logo"/>
      </span>
      { generateMenu() }
      <div className="userinfo">
        <span>{ userinfo.state.username }</span>
        <Icon onClick={logout} type="logout" />
      </div>
    </div>
  )
}
