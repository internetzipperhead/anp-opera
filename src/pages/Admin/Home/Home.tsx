import React, { useCallback, useEffect } from 'react'
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
            cover={<img alt="example" src="https://picsum.photos/id/642/150/150?blur" />}
          >
            <Card.Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col xs={12} sm={8} md={8} lg={8} xl={6}>
          <Card
            hoverable
            cover={<img alt="example" src="https://picsum.photos/id/824/150/150" />}
          >
            <Card.Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col xs={12} sm={8} md={8} lg={8} xl={6}>
          <Card
            hoverable
            cover={<img alt="example" src="https://picsum.photos/id/522/150/150" />}
          >
            <Card.Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Home
