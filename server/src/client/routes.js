import React from 'react'
import { Route } from 'react-routing-dom'
import Home from './components/Home'

export default () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
    </div>
  )
}


