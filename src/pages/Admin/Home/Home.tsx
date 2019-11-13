import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { Row, Col, Card } from 'antd'

function Home() {

  const history = useHistory()
  const handleClick = useCallback(() => {
    history.push('/operation/123')
  }, [history])

  return (
    <div className="m-home">
      <Row gutter={10}>
        <Col xs={12} sm={8} md={8} lg={8} xl={6}>
          <Card
            onClick={handleClick}
            hoverable
            cover={<img alt="example" src="https://picsum.photos/id/145/150/150" />}
          >
            <Card.Meta title="第45周运维报告" description="桂林访问量增加" />
          </Card>
        </Col>
        <Col xs={12} sm={8} md={8} lg={8} xl={6}>
          <Card
            hoverable
            cover={<img alt="example" src="https://picsum.photos/id/304/150/150" />}
          >
            <Card.Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col xs={12} sm={8} md={8} lg={8} xl={6}>
          <Card
            hoverable
            cover={<img alt="example" src="https://picsum.photos/id/42/150/150" />}
          >
            <Card.Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Home
