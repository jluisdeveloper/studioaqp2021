import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import StudioAQP from './pages/studioaqp'
import SinglePostPage from './pages/singlePost'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} name="index" component={StudioAQP} />
        <Route path="/post" exact={true} name="singlePost" component={SinglePostPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

