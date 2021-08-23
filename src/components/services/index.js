import React from 'react'
import IdentityApart from './modules/identity/Identityapart'
import WebApart from './modules/web/Webapart'
import MarketingApart from './modules/marketing/Marketingapart'
import SocialApart from './modules/social/Socialapart'

import useCrud from '../../hooks/useCrud'
import './styles/index.scss'


const IndexServices = () => {
  const url = "https://dashboard.studioaqp.com/front/projects/index"
  const { data } = useCrud(url, [])

  /*
    id: 1 = Desarrollo Web
    id: 2 = Manejo de Redes Sociales
    id: 3 = Desarrollo Corporativo
    id: 4 = Asesoria en Marketing
  */

  const setByCategory = (category_id) => {
    let slidesFiltered = data.filter(slide => slide.category_project_id === category_id)
    if (slidesFiltered.length === 0) {
      slidesFiltered = data.slice(0, 5)
    }
    return slidesFiltered
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
          slides={setByCategory(3)}
        />

        <WebApart
          slides={setByCategory(1)}
        />

        <MarketingApart
          slides={setByCategory(4)}
        />

        <SocialApart
          slides={setByCategory(2)}
        />

      </div>
    </div>
  )
}

export default IndexServices
