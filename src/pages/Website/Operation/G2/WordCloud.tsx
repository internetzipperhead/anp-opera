import React, { useState, useEffect } from 'react'
import G2 from '@antv/g2'
import DataSet from '@antv/data-set'

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

function WordCloud(props) {

  const { renderData } = props
  const [chart, setChart] = useState()
  console.log(renderData, 888)

  useEffect(() => {
    const container = document.getElementById('mountNode') as HTMLDivElement
    const { width, height } = container.getBoundingClientRect()
    if (!chart) {
      const chartG2 = new G2.Chart({
        container,
        height,
        width,
        forceFit: true,
        padding: 0
      })
      setChart(chartG2)
      return
    }
    if (renderData && renderData.length === 0) {
      return
    }
    const dv = new DataSet.View().source(renderData)
    const range = dv.range('value')
    console.log(range, 777)
    const min = range[0]
    const max = range[1]

    dv.transform({
      type: 'tag-cloud',
      title: '很好',
      fields: ['name', 'value'],
      size: [width, height],
      font: 'Verdana',
      padding: 0,
      timeInterval: 5000,
      rotate() {
        let random = ~~(Math.random() * 4) % 4
        if (random === 2) {
          random = 0
        }
        return random * 30 // 0, 90, 270
      },
      fontSize(d) {
        return (d.value - min) / (max - min) * (42 - 8) + 14
      }
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
    chart.coord().reflect()
    chart.point().position('x*y').color('text').shape('cloud').tooltip('name*value')
    chart.render()

    return () => {
      chart.clear()
    }

  }, [renderData, chart])

  return (
    <div id="mountNode" style={{ width: '100%', height: '500px'}}></div>
  )
}

export default WordCloud
