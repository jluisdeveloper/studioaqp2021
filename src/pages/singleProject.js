import React, { useState, useEffect } from 'react'
import useCrud from '../hooks/useCrud'

import Header from '../components/header/header'
import SinglePortfolio from '../components/portfolio/single'
import Footer from '../components/footer/footer'

const initialProject = {
  id: 0,
  title: '',
  cover: {
    url: ''
  },
  lateral_img: {
    url: ''
  },
  background: '',
  abstract: '',
  objetive: '',
  start_point: '',
  show_rate: '',
  dev_date: '',
  customer_id: 0,
  category_project_id: 0,
  created_at: '',
  updated_at: '',
  slide_projects: [],
  customer: {
    id: 0,
    name: '',
    website: '',
    contract_date: '',
    field: '',
    contact_name: '',
    contact_phone: '',
    contact_email: '',
    logo: {
      url: ''
    },
    created_at: '',
    updated_at: ''
  }
}


const SingleProject = (props) => {
  const [projects, setProjects] = useState(initialProject)
  const slug_project = props.match.params.slug
  const url = `https://dashboard.studioaqp.com/front/${slug_project}`
  const { setData } = useCrud(url)

  const [navStatus, setNavStatus] = useState(true)

  const updateShowNav = () => {
    setNavStatus(window.pageYOffset > 0 ? false : true);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", updateShowNav);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", updateShowNav);
    };
  });

  useEffect(() => {
    setData(setProjects)
  }, [])

  return (
    <div>
      <Header
        navStatus={navStatus}
        menuType='newPage'
      />
      <SinglePortfolio
        project={projects}
      />
      <Footer/>
    </div>
  )
}

export default SingleProject
