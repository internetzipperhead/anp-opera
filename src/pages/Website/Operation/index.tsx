import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { Row, Col } from 'antd'
import '../../../styles/views/operation.less'

function Operation() {

  const history = useHistory()
  const params = useParams()
  console.log(params)
  return (
    <div className="m-operation">

      <Row type="flex" justify="center">
        <Col md={18} lg={15} style={{ color: '#fff' }}>
          gsdfgfg
        </Col>
      </Row>
    </div>
  )
}

export default Operation
