import React from 'react'
import { Chart, Axis, Legend, Tooltip, Geom } from 'bizcharts'

const data = [
  { month: 'Jan.', count: 69, city: 'pkyo' },
  { month: 'Jane.', count: 169, city: 'okkyo' },
  { month: 'dan.', count: 69, city: 'tkyo' },
  { month: 'ren.', count: 49, city: 'tyo' }
]
const scale = {
  month: { alias: 'Month' },
  count: { alias: 'Sales' }
}

function ApiRequest() {
  return (
    <Chart height={400} data={data} scale={scale} forceFit>
      <Axis title name="month" />
      <Axis title name="count" />
      <Legend />
      <Tooltip crosshairs={{ type: 'rect' }} />
      <Geom type="interval" position="month*count" color="month" />
    </Chart>
  )
}

export default ApiRequest
