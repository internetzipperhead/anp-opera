import React from 'react'

import { LayoutProps } from '../utils/interface'


const Layout = (props: LayoutProps) => {

  return (
    <div>
      <header>歌剧院</header>
      {props.children}
    </div>
  )
}

export default Layout
