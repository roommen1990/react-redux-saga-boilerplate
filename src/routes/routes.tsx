import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../containers/Home'

export const routes = (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={Home} />
    </Switch>
  </>
)
