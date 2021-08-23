import React from 'react'

import useCrud from '../../hooks/useCrud'
import SingleCorporativeIdentity from '../../components/services/modules/identity/single'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'


const CorporativeIdentityPage = () => {
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
    <div>
      <Header
        menuType='newPage'
      />
      <SingleCorporativeIdentity
        slides={setByCategory(3)}
      />
      <Footer />
    </div>
  )
}

export default CorporativeIdentityPage


