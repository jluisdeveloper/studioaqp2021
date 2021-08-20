import React, { useState, useEffect } from 'react'
import LazyLoad from 'react-lazyload'

import useCrud from '../hooks/useCrud'
import IndexPortfolio from '../components/portfolio'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

import Placeholder from '../components/loader/spiner'

const Projects = () => {
  const [projectsList, setProjectsList] = useState([])
  const url = `https://dashboard.studioaqp.com/front/projects/index`
  const { setData } = useCrud(url)

  useEffect(() => {
    setData(setProjectsList)
  }, [])


  return (
    <div>
      <Header
        menuType='newPage'
      />
      <LazyLoad
        once={true}
        height={200}
        offset={[-200, 0]}
        placeholder={<Placeholder />}
        debounce={500}
      >
        <IndexPortfolio
          projectsList={projectsList}
        />
      </LazyLoad>
      <Footer />
    </div>
  )
}

export default Projects
