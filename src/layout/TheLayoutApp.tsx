import React from 'react'
import { Layout } from 'antd'

import { LayoutProps } from '../utils/interface'

const { Header, Content, Footer } = Layout

function LayoutBase(props: LayoutProps) {

  return (
    <Layout className="layout">
      <Header>
        <div>LOGO</div>
      </Header>
      <Content>
        { props.children }
      </Content>
      <Footer>
        2019 @ nuctech
      </Footer>
    </Layout>
  )
}

export default LayoutBase
