import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

import { News } from './screens'

function App() {
  return (
    <Provider store={store}>
      <News />
    </Provider>
  )
}

export default App
