import React from 'react'
import IndexServices from '../components/services'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'

const ServicesPage = () => {
  return (
    <div>
      <Header
        menuType='newPage'
      />
      <IndexServices />
      <Footer />
    </div>
  )
}

export default ServicesPage
