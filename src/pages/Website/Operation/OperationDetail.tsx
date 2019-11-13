import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Row, Col, Icon, Tag } from 'antd'

import api from '@/api'
import ApiRequest from './G2/BaseBar'
import WordCloud from './G2/WordCloud'
import PetalPie from './G2/PetalPie'
import HorizontalBar from './G2/HorizontalBar'
import '@/styles/views/operation.less'

interface OperationData {
  id: string;
  weekIndex: string;
}

interface ChartData {
  type: string;
  value: number;
}

function Operation() {

  const history = useHistory()
  const { id } = useParams()
  const [data, setData] = useState({
    id: null,
    weekIndex: '',
    startData: '2019/11/04',
    endData: '2019/11/10',
    commnet: '这里描述一下这周的运维情况',
    pageView: 76,
    description: '',
    createTime : '2019-11-10T17:43:05.886Z',
    modifyTime : '2019-11-10T17:45:09.064Z',
    api: [],
    business: [],
    tenements: []
  })

  const goBack = () => {
    history.go(-1)
  }

  useEffect(() => {
    api.fetchOperationDetailById(id).then((res: any) => {
      console.log(res)
      if (res.result) {
        setData(res.data)
      }
    }).catch(console.log)
  }, [id])

  const businessData = data.business.map((item: any) => {
    let obj: ChartData = {
      type: '',
      value: 0
    }
    obj.type = item.method + item.name + item.cName
    obj.value = item.value
    return obj
  }).sort((a, b) => a.value - b.value)
  const { api: apiData, tenements } = data

  return (
    <div className="m-operation-detail">
      <Row type="flex" justify="center">
        <Col xs={22} sm={20} md={18} lg={15} style={{ color: '#fff' }}>
          <header className="operation-header">
            <h2>第{ data.weekIndex }周运维数据报告</h2>
            <div>
              <Icon type="clock-circle" title="统计时间" /> 2019/10/20 -- 2019/10/26
              <Icon type="eye" title="浏览次数" style={{ marginLeft: '10px' }} />
              { ' ' + data.pageView }
              <span onClick={goBack}>返回</span>
            </div>
          </header>
          <Tag color="#108ee9"><Icon type="pie-chart" /> 业务请求</Tag>
          <HorizontalBar renderData={businessData} />
          <Tag color="#108ee9"><Icon type="bar-chart" /> 接口请求</Tag>
          <ApiRequest renderData={apiData} />
          <Tag color="#108ee9"><Icon type="bar-chart" /> 业务请求</Tag>
          <PetalPie renderData={apiData} />
          <Tag color="#108ee9"><Icon type="dot-chart" /> 租户使用云图</Tag>
          <WordCloud renderData={tenements} />
        </Col>
      </Row>
    </div>
  )
}

export default Operation
