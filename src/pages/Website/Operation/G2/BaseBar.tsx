import React, { useEffect } from 'react'
import G2 from '@antv/g2'

const data = [
  { method: 'POST.', count: 69, city: 'pkyo' },
  { method: 'GET.', count: 169, city: 'okkyo' },
  { method: 'PUT.', count: 69, city: 'tkyo' },
  { method: 'DELETE.', count: 49, city: 'tyo' }
]


// - 基础柱状图
function BaseBar() {

  useEffect(() => {
    const container = document.getElementById('apiNode') as HTMLDivElement
    const { width, height } = container.getBoundingClientRect()
    const chart = new G2.Chart({
      container,
      height,
      width,
      forceFit: true,
      padding: [20, 20, 40, 60]
    })
    chart.source(data, {
      count: {
        alias: '调用量',
        min: 0
      }
    })
    chart.legend(false)
    chart.scale('count', {
      alias: '调用量'
    })
    chart.axis('count', {
      label: {
        textStyle: {
          fill: '#ddd'
        }
      }
    })
    chart.axis('method', {
      label: {
        textStyle: {
          fill: '#ddd',
          fontWeight: 'bold'
        }
      }
    })
    chart.tooltip(true)
    chart.interval().position('method*count').color('method', ['#7f8da9', '#fec514', '#db4c3c', '#daf0fd'])
    // chart.point().position('method*count').size(60).shape('method')
    chart.render()
  }, [])

  return (
    <div id="apiNode" style={{ width: '100%', height: '400px' }}></div>
  )
}

export default BaseBar
