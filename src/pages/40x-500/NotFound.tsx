import React, { useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import notFoundImg from '../../assets/404.jpg'
import { context } from '../../store'

function NotFound() {

  const { userinfo: { state: { isAdmin } } } = useContext(context)
  const history = useHistory()
  const location = useLocation()
  const isAdminPath = location.pathname.includes('admin/')
  const isWebPath = location.pathname.includes('web/')

  const backToHome = () => {
    isAdmin ? history.push('/admin/home') : history.push('/')
  }

  const backToPrev = () => {
    history.go(-1)
  }

  const style = {
    background: 'url( '+ notFoundImg + ')',
    backgroundSize: 'cover',
  }

  return (
    <div className="m-404-500" style={style}>
      <div className="header">
        <span className="logo"></span>
        {
          isAdminPath || isWebPath
          ? null
          : <div className="back">
              <span onClick={backToHome}>首页</span>
              <span onClick={backToPrev}>返回</span>
            </div>
        }
      </div>
    </div>
  )
}

export default NotFound
