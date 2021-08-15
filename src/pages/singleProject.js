import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SingleProject = (props) => {
  const [project, setProject] = useState({})
  const slug_project = props.match.params.slug

  useEffect(() => {
    getProject()
  }, [])

  const getProject = async() => {
    await axios.get(`https://dashboard.studioaqp.com/front/${slug_project}`, {})
      .then((response) => {
        setProject(response.data)
      }).catch((error) => {
        console.log(error)
      })
  }
  
  return (
    <div>
      {project.title} <br/>
      {project.background} <br/>
      {project.objetive} <br/>
      {project.start_point} <br/>
      {project.dev_date} <br/>
    </div>
  )
}

export default SingleProject
