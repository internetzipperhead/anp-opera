// import React, { useState, useEffect } from 'react'
// import {
//   Chart,
//   Geom,
//   Tooltip,
//   Coord,
//   Shape,
// } from 'bizcharts'
// import DataSet from '@antv/data-set'
// import axios from 'axios'

// function getTextAttrs(cfg) {
//   return Object.assign(
//     {},
//     cfg.style,
//     {
//       fillOpacity: cfg.opacity,
//       fontSize: cfg.origin._origin.size,
//       rotate: cfg.origin._origin.rotate,
//       text: cfg.origin._origin.text,
//       textAlign: 'center',
//       fontFamily: cfg.origin._origin.font,
//       fill: cfg.color,
//       textBaseline: 'Alphabetic'
//     }
//   )
// } // 给point注册一个词云的shape

// Shape.registerShape && Shape.registerShape('point', 'cloud', {
//   drawShape(cfg, container) {
//     const attrs = getTextAttrs(cfg)
//     return container.addShape('text', {
//       attrs: Object.assign(attrs, {
//         x: cfg.x,
//         y: cfg.y
//       })
//     })
//   }
// })

// function ApiRequest() {

//   let [loaded, setLoaded] = useState(false)
//   let [dv, setDv] = useState(null)
//   useEffect(() => {
//     axios.get('https://alifd.alibabausercontent.com/materials/@bizcharts/other-word-cloud/0.3.5/mock.json')
//       .then(res => {
//         console.log(9999, res)
//         const dataV = new DataSet.View().source(res.data.slice(0, 30))
//         const dvRange = dataV.range('value')
//         setDv(dataV)
//         const min = dvRange[0]
//         const max = dvRange[1]
//         setLoaded(true)

//         dataV.transform({
//           type: 'tag-cloud',
//           fields: ['x', 'value'],
//           size: [600, 500],
//           font: 'Verdana',
//           padding: 10,
//           timeInterval: 5000,

//           // max execute time
//           rotate() {
//             let random = ~~(Math.random() * 4) % 4
//             if (random === 2) {
//               random = 0
//             }
//             return random * 90 // 0, 90, 270
//           },

//           fontSize(d) {
//             if (d.value) {
//               const divisor = (max - min) !== 0 ? (max - min) : 1
//               return ((d.value - min) / divisor) * (80 - 24) + 24
//             }

//             return 0
//           }
//         })
//       })
//       .catch(err => console.log(err))
//   }, [])

//   const scale = {
//     x: {
//       nice: false
//     },
//     y: {
//       nice: false
//     }
//   }

//   return (
//     <div>
//       {
//         loaded
//         ? <Chart
//             height={500}
//             width={700}
//             data={dv}
//             scale={scale}
//             padding={0}
//             forceFit
//           >
//             <Tooltip showTitle={false} />
//             <Coord reflect='y' />
//             <Geom
//               type='point'
//               position='x*y'
//               color='category'
//               shape='cloud'
//               tooltip='value*category'
//             />
//           </Chart>
//         : null
//       }
//     </div>
//   )
// }

// export default ApiRequest

export default function a(){}
