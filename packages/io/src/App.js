import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import IndexRoute from './routes'

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={IndexRoute} />
    </Switch>
  </Router>
)

export default App
