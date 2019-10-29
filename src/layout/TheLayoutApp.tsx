import React from 'react'
import { Layout, Row, Col } from 'antd'

import { LayoutProps } from '../model/interface'
import { AppHeader } from '../components/Header'


export default function LayoutApp(props: LayoutProps) {
  return (
    <Layout className="app-container">
      <AppHeader />
      <Row className="app-main" type="flex" justify="center">
        <Col className="app-content" sm={24} md={20} lg={18}>
          { props.children }
        </Col>
      </Row>
    </Layout>
  )
}
