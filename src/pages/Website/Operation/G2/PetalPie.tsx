import React, { useState, useEffect } from 'react'
import G2 from '@antv/g2'


function getPoint(p0, p1, ratio) {
  return {
    x: (1 - ratio) * p0.x + ratio * p1.x,
    y: (1 - ratio) * p0.y + ratio * p1.y
  }
}

// -花瓣饼图
function PetalPie(props) {

  let { renderData } = props
  const [chart, setChart] = useState()

  let pointRatio = 0.7 // 设置开始变成圆弧的位置 0.7
  let sliceNumber = 0.005

  let shapeObj = G2.Shape && G2.Shape.registerShape && G2.Shape.registerShape('interval', 'platelet', {
    draw: function draw(cfg, container) {
      cfg.points[1].y = cfg.points[1].y - sliceNumber
      cfg.points[2].y = cfg.points[2].y - sliceNumber
      let centerPoint = {
        x: cfg.points[3].x,
        y: (cfg.points[2].y + cfg.points[3].y) / 2
      }
      centerPoint = shapeObj && shapeObj.parsePoint(centerPoint)
      let points = shapeObj && shapeObj.parsePoints(cfg.points)
      let path: Array<Array<string | number>> = []
      let tmpPoint1 = getPoint(points[0], points[3], pointRatio)
      let tmpPoint2 = getPoint(points[1], points[2], pointRatio)
      path.push(['M', points[0].x, points[0].y])
      path.push(['L', tmpPoint1.x, tmpPoint1.y])
      path.push(['Q', points[3].x, points[3].y, centerPoint.x, centerPoint.y])
      path.push(['Q', points[2].x, points[2].y, tmpPoint2.x, tmpPoint2.y])
      path.push(['L', points[1].x, points[1].y])
      path.push(['z'])
      return container.addShape('path', {
        attrs: {
          fill: cfg.color,
          path: path,
          color: '#fff'
        }
      })
    }
  })

  useEffect(() => {
    if (!chart) {
      const chartG2 = new G2.Chart({
        container: 'home-g2',
        forceFit: true,
        height: 400,
        padding: ['40', '0']
      })
      setChart(chartG2)
      return
    }
    chart.source(renderData)
    chart.coord('theta')
    chart.tooltip({
      title: 'name',
      itemTpl: `<li data-index={index}>
        <span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>
        数量<span style="margin-left: 20px;">{value}</span>
      </li>`
    })
    chart.intervalStack().position('value').color('name').shape('platelet').label('name', {
      textStyle: {
        fill: '#ddd',
      }
    })
    chart.render()
    return () => {
      chart.clear()
    }
  }, [renderData, chart])

  return (
    <div id="home-g2" className="m-g2"></div>
  )
}

export default PetalPie
