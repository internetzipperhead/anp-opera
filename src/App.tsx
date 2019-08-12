import React from 'react'

import Provider from './store'
import Router from './router'

const App: React.FC = () => {
  return (
    <Provider>
      <Router />
    </Provider>
  )
}

export default App
