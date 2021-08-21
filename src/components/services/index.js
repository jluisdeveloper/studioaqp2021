import React, { useState, useEffect } from 'react'
import IdentityApart from './modules/identity/Identityapart'

import './styles/index.scss'

const IndexServices = () => {
  const [slides, setSlides]= useState([])

  const setByCategory = () => {
    
  }

  return (
    <div className="services_page_container">
      <div className="services_page_wrapper">
        <div className="title_services_page_wrapper">
          <h2>
            Definición de categorías + ayudando a organizaciones ambiciosas a moverse a la velocidad de la cultura.
          </h2>
        </div>

        <IdentityApart
          slides={null}
        />
      </div>
    </div>
  )
}

export default IndexServices
