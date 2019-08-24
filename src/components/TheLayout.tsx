import React from 'react'
// import {  } from 'antd'

import { LayoutProps } from '../utils/interface'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'


function Layout(props: LayoutProps) {

  return (
    <div className="app-container">
      <Sidebar />
      <main className="app-main">
        <Header />
        <section className="app-content">
          {props.children}
        </section>
      </main>
    </div>
  )
}

export default Layout
