import React, { useEffect, useState } from 'react'
import G2 from '@antv/g2'


// - 基础柱状图
function BaseBar(props) {

  const { renderData } = props
  const [chart, setChart] = useState()

  useEffect(() => {
    if (!chart) {
      let chartG2 = new G2.Chart({
        container: 'home-dr-g2',
        forceFit: true,
        height: 350,
        padding: [20, 40, 50, 124]
      })
      setChart(chartG2)
      return
    }
    if (renderData.length === 0) {
      return
    }
    const max = Math.max(...renderData.map(item => item.value))
    chart.source(renderData, {
      value: {
        max: max + max / 20,
        min: 0,
        nice: false,
        alias: '请求数量（次）'
      }
    })
    chart.axis('type', {
      label: {
        textStyle: {
          fill: '#8d8d8d',
          fontSize: 12
        }
      },
      tickLine: {
        alignWithLabel: false,
        length: 0
      },
      line: {
        lineWidth: 0
      }
    })
    chart.axis('value', {
      title: {
        offset: 30,
        textStyle: {
          fontSize: 12,
          fontWeight: 300
        }
      }
    })
    chart.legend(false)
    chart.coord('rect').transpose()
    chart.interval().position('type*value').size(26).opacity(1).label('value', {
      textStyle: {
        fill: '#8d8d8d'
      },
      lineStyle: {
        fill: '#ddd'
      },
      offset: 10
    })
    chart.render()

    return () => {
      chart.clear()
    }

  }, [renderData, chart])

  return (
    <div id="home-dr-g2" className="m-g2"></div>
  )
}

export default BaseBar
