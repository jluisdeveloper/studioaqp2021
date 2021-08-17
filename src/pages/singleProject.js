import React, { useState, useEffect } from 'react'
import useCrud from '../hooks/useCrud'
import SinglePortfolio from '../components/portfolio/single'

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
  const [project, setProject] = useState(initialProject)
  const slug_project = props.match.params.slug
  const url = `https://dashboard.studioaqp.com/front/${slug_project}`

  const { setData } = useCrud(url)

  useEffect(() => {
    setData(setProject)
  }, [])

  return (
    <div>
      <SinglePortfolio
        project={project}
      />
    </div>
  )
}

export default SingleProject
