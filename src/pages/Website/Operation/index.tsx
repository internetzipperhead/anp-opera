import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Row, Col, Icon, Tag } from 'antd'

import ApiRequest from './G2/BaseBar'
import WordCloud from './G2/WordCloud'
import PetalPie from './G2/PetalPie'
import HorizontalBar from './G2/HorizontalBar'
import '../../../styles/views/operation.less'

function Operation() {

  const history = useHistory()
  const params = useParams()

  const goBack = () => {
    history.go(-1)
  }

  console.log(params)
  return (
    <div className="m-operation">
      <Row type="flex" justify="center">
        <Col xs={22} sm={20} md={18} lg={15} style={{ color: '#fff' }}>
          <header className="operation-header">
            <h2>第36周运维数据报告</h2>
            <div>
              <Icon type="clock-circle" title="统计时间" /> 2019/10/20 -- 2019/10/26
              <Icon type="eye" title="浏览次数" style={{ marginLeft: '10px' }} /> 72
              <span onClick={goBack}>返回</span>
            </div>
          </header>
          <Tag color="#108ee9">业务请求</Tag>
          <HorizontalBar />
          <Tag color="#108ee9">接口请求</Tag>
          <ApiRequest />
          <Tag color="#108ee9">业务请求</Tag>
          <PetalPie />
          <Tag color="#108ee9">租户使用云图</Tag>
          <WordCloud />
        </Col>
      </Row>
    </div>
  )
}

export default Operation
