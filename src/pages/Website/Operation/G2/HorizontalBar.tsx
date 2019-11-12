import React, { useEffect } from 'react'
import G2, { Chart } from '@antv/g2'


// - 基础柱状图
function BaseBar(props) {

  let { drViewData } = props

  let chart: Chart

  const data = [
    {
      type: '汽车',
      value: 34
    }, {
      type: '建材家居',
      value: 85
    }, {
      type: '住宿旅游',
      value: 103
    }, {
      type: '交通运输与仓储邮政',
      value: 142
    }, {
      type: '建筑房地产',
      value: 251
    }, {
      type: '教育',
      value: 367
    }, {
      type: 'IT 通讯电子',
      value: 491
    }, {
      type: '社会公共管理',
      value: 672
    }, {
      type: '医疗卫生',
      value: 868
    }, {
      type: '金融保险',
      value: 1234
    }
  ]

  useEffect(() => {
    chart = new G2.Chart({
      container: 'home-dr-g2',
      forceFit: true,
      height: 350,
      padding: [20, 40, 50, 124]
    })
    chart.source(data, {
      value: {
        max: 1300,
        min: 0,
        nice: false,
        alias: '请求数量'
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
        // alignWithLabel: false,
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
  }, [])

  const stopChartRender = () => chart.clear()

  useEffect(() => stopChartRender, [])

  return (
    <div id="home-dr-g2" className="m-g2"></div>
  )
}

export default BaseBar
