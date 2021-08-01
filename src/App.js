import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from './pages/home'
import SinglePostPage from './pages/singlePost'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} name="index" component={HomePage} />
        <Route path="/post" exact={true} name="singlePost" component={SinglePostPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

