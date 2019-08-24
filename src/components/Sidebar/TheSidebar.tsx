import React, { useState } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Avatar, Icon, Menu } from 'antd'

import { menuRoutes } from '../../router/appRoute'


interface IProps {
  location: any,
  history: any
}

interface IMenuItem {
  item: any,
  key: string
}


function Sidebar(props: IProps) {

  console.log(props)

  const [collapsed, setCollapsed] = useState(false)

  function onMenuClick({ key }: IMenuItem) {
  // const onMenuClick = (menuItem:any) => {
    let curRoute = props.location.pathname
    if (curRoute === key) {
    // if (curRoute === menuItem.key) {
      props.history.push('/refresh')
    } else {
      let route = menuRoutes.filter(item => '/' + item.path === key)
      // let route = menuRoutes.filter(item => '/' + item.path === menuItem.key)
      // props.appStore.updateNavBreadcrumb(route)
      props.history.push(key)
      // props.history.push(menuItem.key)
    }
  }

  const path = props.location.pathname

  return (
    <aside className="app-sidebar">
      <div className="app-logo">
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size="large" />
      </div>
      <Menu
        className="app-menu"
        onClick={onMenuClick}
        defaultSelectedKeys={[path]}
        selectedKeys={[path]}
        mode="inline"
        inlineCollapsed={collapsed}
      >
        {
          menuRoutes.map(item => (
            <Menu.Item key={`/${item.path}`}>
              <Icon type={item.icon} />
              <span>{item.name}</span>
            </Menu.Item>
          ))
        }
      </Menu>
    </aside>
  )
}

export default withRouter(Sidebar)
