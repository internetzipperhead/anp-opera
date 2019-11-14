import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Row, Col, Card, Avatar, Skeleton } from 'antd'
import QueueAnim from 'rc-queue-anim'

import api from '@/api'
import '@/styles/views/operation.less'


interface IOperationData {
  id: string;
  weekIndex: string;
  startData: string;
  endData: string;
  commnet: string;
  pageView: number;
  description: string;
  createTime : string;
  modifyTime : string;
  api?: [];
  business?: [];
  tenements?: [];
}

function OperationList() {

  const history = useHistory()
  const [loading, serLoading] = useState(true)
  const [data, setData] = useState<IOperationData[]>([])

  useEffect(() => {
    let fetchParams = {
      page: 1,
      limit: 10
    }
    api.fetchOperationList(fetchParams).then((res: any) => {
      console.log(res)
      if (res.result) {
        setData(res.data.operations)
        serLoading(false)
      }
    }).catch(console.log)
  }, [])

  const checkOperationDetail = (id: string) => {
    history.push(`/operation/${id}`)
  }

  return (
    <div className="m-operation-list">
      {
        loading
          ? <Skeleton active />
          : <Row gutter={[16, 16]}>
              <QueueAnim delay={100} type="top">
              {
                data.map((item, index) =>
                  <Col xs={24} sm={12} md={8} lg={8} xl={6} key={index}>
                    <Card
                      hoverable
                      onClick={() => checkOperationDetail(item.id)}
                      cover={<img alt="example" src={`https://picsum.photos/id/${item.weekIndex}/536/354`} />}
                    >
                      <Card.Meta
                          avatar={
                            <Avatar src={`https://dummyimage.com/36x36/f90/FFF.png&text=${item.weekIndex}`} />
                          }
                          title={`第${item.weekIndex}周运维周报`}
                          description={<span className="operation-des">{item.description || 'This is the description'}</span>}
                        />
                    </Card>
                  </Col>
                )
              }
              </QueueAnim>
            </Row>
      }
    </div>
  )
}

export default OperationList
