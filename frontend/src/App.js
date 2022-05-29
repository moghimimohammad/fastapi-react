import React from 'react'
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"
import User from './components/User'

const App = () => {
  return (
  <>
    <Router>
      <div>
        <Switch>
          <Route path="/user/:user_id">
            <User /> 
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  )
}

export default App