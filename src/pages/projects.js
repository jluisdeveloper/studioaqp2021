import React, {useEffect} from 'react'
import LazyLoad from 'react-lazyload'

import useCrud from '../hooks/useCrud'
import IndexPortfolio from '../components/portfolio'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

import Placeholder from '../components/loader/spiner'

const ProjectsPage = () => {
  const url = `https://dashboard.studioaqp.com/front/projects/index`
  const { data } = useCrud(url, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
          projectsList={data}
        />
      </LazyLoad>
      <Footer />
    </div>
  )
}

export default ProjectsPage
