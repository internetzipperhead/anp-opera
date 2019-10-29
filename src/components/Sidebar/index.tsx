import React, { useState, useCallback, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { Avatar, Icon, Menu } from 'antd'

import { adminMenuRoutes } from '../../router/adminRoute'
import { context } from '../../store'
import { logout } from '../../store/redux/user/actionCreator'


interface IProps {
  location: any,
  history: any
}

interface IMenuItem {
  item: any,
  key: string
}


function Sidebar(props: IProps) {

  const [collapsed, setCollapsed] = useState(false)
  const { userinfo: { state, dispatch } } = useContext(context)

  function onMenuClick({ key }: IMenuItem) {
    console.log(key)
    let curRoute = props.location.pathname
    if (curRoute === key) {
      props.history.push('refresh')
    } else {
      props.history.push(key)
    }
  }

  const handleLogout = useCallback(() => {
    dispatch(logout())
    props.history.push('/login')
  }, [props.history])

  const path = props.location.pathname

  return (
    <aside className="admin-sidebar" style={{ width: collapsed ? '80px' : '200px' }}>
      <div className="admin-logo" onClick={() => setCollapsed(!collapsed)}>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size="large" />
      </div>
      <Menu
        className="admin-menu"
        onClick={onMenuClick}
        defaultSelectedKeys={[path]}
        selectedKeys={[path]}
        mode="inline"
        inlineCollapsed={collapsed}
      >
        {
          adminMenuRoutes.map(item => (
            <Menu.Item key={`/admin/${item.path}`}>
              <Icon type={item.icon} style={{ color: '#aaa' }} />
              <span>{ item.name }</span>
            </Menu.Item>
          ))
        }
      </Menu>
      <div className="admin-logout">
        <span>{ state.username }</span>
        <Icon onClick={handleLogout} type="logout" />
      </div>
    </aside>
  )
}

export default withRouter(Sidebar)
