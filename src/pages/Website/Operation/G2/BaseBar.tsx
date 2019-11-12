import React, { useState, useEffect } from 'react'
import G2 from '@antv/g2'


// - 基础柱状图
function BaseBar(props) {

  const { renderData } = props
  const [chart, setChart] = useState()

  useEffect(() => {
    const container = document.getElementById('apiNode') as HTMLDivElement
    const { width, height } = container.getBoundingClientRect()
    if (!chart) {
      const chartG2 = new G2.Chart({
        container,
        height,
        width,
        forceFit: true,
        padding: [20, 20, 40, 60]
      })
      setChart(chartG2)
      return
    }
    chart.source(renderData, {
      value: {
        alias: '调用量',
        min: 0
      }
    })
    chart.legend(false)
    chart.scale('value', {
      alias: '调用量'
    })
    chart.axis('value', {
      label: {
        textStyle: {
          fill: '#ddd'
        }
      }
    })
    chart.axis('name', {
      label: {
        textStyle: {
          fill: '#ddd',
          fontWeight: 'bold'
        }
      }
    })
    chart.tooltip(true)
    chart.interval().position('name*value').color('name', ['#7f8da9', '#fec514', '#db4c3c', '#daf0fd'])
    chart.render()

    return () => {
      chart.clear()
    }

  }, [renderData, chart])

  return (
    <div id="apiNode" style={{ width: '100%', height: '400px' }}></div>
  )
}

export default BaseBar
