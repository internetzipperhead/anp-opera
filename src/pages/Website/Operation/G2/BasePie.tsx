import React, { useEffect } from 'react'
import G2, { Chart } from '@antv/g2'


// - 基础饼图
function BasePie(props) {

  let { drViewData } = props

  let chart: Chart

  const data = [{
    type: '单视角',
    value: drViewData[0]
  }, {
    type: '双视角',
    value: drViewData[1]
  }]

  useEffect(() => {
    chart = new G2.Chart({
      container: 'home-dr-g2',
      forceFit: true,
      height: 350,
      padding: [40, 0, 40, 0]
    })
    chart.source(data, {
      percent: {
        formatter: function formatter(val) {
          val = val * 100 + '%';
          return val;
        }
      }
    })
    chart.coord('theta', {
      radius: 0.75
    })
    chart.intervalStack().position('percent').color('item').label('percent', {
      formatter: function formatter(val, item) {
        return item.point.item + ': ' + val;
      }
    }).tooltip('item*percent', function(item, percent) {
      percent = percent * 100 + '%';
      return {
        name: item,
        value: percent
      }
    }).style({
      lineWidth: 1,
      stroke: '#fff'
    })
    chart.render()
  }, [])

  const stopChartRender = () => chart.clear()

  useEffect(() => stopChartRender, [])

  return (
    <div id="home-dr-g2" className="m-g2"></div>
  )
}

export default BasePie
