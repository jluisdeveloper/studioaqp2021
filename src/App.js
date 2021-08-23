import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import StudioAQP from './pages/studioaqp'
import SingleProjectPage from './pages/singleProject'
import ProjectsPage from './pages/projects'
import SinglePostPage from './pages/singlePost'
import ServicesPage from './pages/services/servicesIndex'
import CorporativeIdentityPage from './pages/services/corporativeIdentity'
import WebDevelopmentPage from './pages/services/webDevelopment'
import DigitalMarketingPage from './pages/services/digitalMarketing'
import ManageSocialNetworkPage from './pages/services/manageSocialNetwork'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} name="index" component={StudioAQP} />
        <Route path="/portafolio" exact={true} name="portafolio" component={ProjectsPage} />
        <Route path="/portafolio/:slug" exact={true} name="portafolio-single" component={SingleProjectPage} />
        <Route path="/blog/:slug" exact={true} name="singlePost" component={SinglePostPage} />
        <Route path="/servicios" exact={true} name="servicios" component={ServicesPage} />
        <Route path="/servicios/identidad-corporativa" exact={true} name="servicios" component={CorporativeIdentityPage} />
        <Route path="/servicios/desarrollo-web" exact={true} name="servicios" component={WebDevelopmentPage} />
        <Route path="/servicios/redes-sociales" exact={true} name="servicios" component={ManageSocialNetworkPage} />
        <Route path="/servicios/marketing-digital" exact={true} name="servicios" component={DigitalMarketingPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

