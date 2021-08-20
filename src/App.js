import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import StudioAQP from './pages/studioaqp'
import SingleProject from './pages/singleProject'
import Projects from './pages/projects'
import SinglePostPage from './pages/singlePost'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} name="index" component={StudioAQP} />
        <Route path="/portafolio" exact={true} name="index" component={Projects} />
        <Route path="/portafolio/:slug" exact={true} name="index" component={SingleProject} />
        <Route path="/blog/:slug" exact={true} name="singlePost" component={SinglePostPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

