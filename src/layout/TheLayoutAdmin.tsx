import React from 'react'
// import {  } from 'antd'

import { LayoutProps } from '../model/interface'
import { AdminHeader } from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function LayoutAdmin(props: LayoutProps) {

  return (
    <div className="admin-container">
      <Sidebar />
      <main className="admin-main">
        <AdminHeader />
        <section className="admin-content">
          {props.children}
        </section>
      </main>
    </div>
  )
}
