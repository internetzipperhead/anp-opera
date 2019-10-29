import React, { useEffect } from 'react'
import G2 from '@antv/g2'
import DataSet from '@antv/data-set'
import axios from 'axios'

function getTextAttrs(cfg) {
  return Object.assign(
    {},
    cfg.style,
    {
      fillOpacity: cfg.opacity,
      fontSize: cfg.origin._origin.size,
      rotate: cfg.origin._origin.rotate,
      text: cfg.origin._origin.text,
      textAlign: 'center',
      fontFamily: cfg.origin._origin.font,
      fill: cfg.color,
      textBaseline: 'Alphabetic'
    }
  )
} // 给point注册一个词云的shape

G2.Shape.registerShape && G2.Shape.registerShape('point', 'cloud', {
  drawShape(cfg, container) {
    const attrs = getTextAttrs(cfg)
    return container.addShape('text', {
      attrs: Object.assign(attrs, {
        x: cfg.x,
        y: cfg.y
      })
    })
  }
})

function ApiRequest() {

  useEffect(() => {
    axios.get('https://alifd.alibabausercontent.com/materials/@bizcharts/other-word-cloud/0.3.5/mock.json')
      .then(res => {
        const container = document.getElementById('mountNode') as HTMLDivElement
        const { width, height } = container.getBoundingClientRect()
        const dv = new DataSet.View().source(res.data.slice(0, 30))
        const range = dv.range('value')
        const min = range[0]
        const max = range[1]

        dv.transform({
          type: 'tag-cloud',
          title: '很好',
          fields: ['x', 'value'],
          size: [width, height],
          font: 'Verdana',
          padding: 0,
          timeInterval: 5000,

          // max execute time
          rotate() {
            let random = ~~(Math.random() * 4) % 4
            if (random === 2) {
              random = 0
            }
            return 0 // 0, 90, 270
          },

          fontSize(d) {
            if (d.value) {
              const divisor = (max - min) !== 0 ? (max - min) : 1
              return ((d.value - min) / divisor) * (80 - 24) + 24
            }
            return 0
          }
        })
        const chart = new G2.Chart({
          container,
          height,
          width,
          forceFit: true,
          padding: 0
        })
        chart.source(dv, {
          x: {
            nice: false
          },
          y: {
            nice: false
          }
        })
        chart.legend(false)
        chart.axis(false)
        chart.tooltip({
          showTitle: false
        })
        chart.coord('rect').reflect()
        chart.point().position('x*y').color('category').shape('cloud').tooltip('value*category')
        chart.render()
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div id="mountNode" style={{ width: '100%', height: '500px'}}></div>
  )
}

export default ApiRequest
