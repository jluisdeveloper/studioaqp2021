import React, { useEffect } from 'react'
import IndexServices from '../../components/services'

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
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
