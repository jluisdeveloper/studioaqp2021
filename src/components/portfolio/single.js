import React from 'react'
import LazyLoad from 'react-lazyload';
import Placeholder from '../loader/spiner';
import SingleProjectSlider from './modules/single/slider'
import HTMLReactParser from 'html-react-parser'
import { normalizeDate } from '../../helpers/normalizes'

import './styles/single.scss'

const SinglePortfolio = ({ project }) => {
  return (
    <div className="project_single_container">
      <div className="presentation_container">
        <div className="wrapper_title_cover">
          <div className="project_single_title_wrapper">
            <h1> {HTMLReactParser(project.title)}</h1>
          </div>
          <div className="project_single_cover_wrapper">
            <img src={project.cover.url} alt={project.title} />
          </div>
        </div>
      </div>

      <div className="project_xplain_container">
        <div className="project_cliente_bg_wrapper">
          <div className="project_client_data_wrapper">
            <div className="project_client_logo">
              <a target="_blank" rel="noopener noreferrer" href={project.customer.website} >
                <img src={project.customer.logo.url} alt={project.customer.name} />
              </a>
              <div className="project_customer_data">
                <h4>Cliente:</h4>
                <p>{HTMLReactParser(project.customer.name)}</p>
              </div>
              <div className="project_customer_data">
                <h4>Sitio web:</h4>
                <a target="_blank" rel="noopener noreferrer" href={project.customer.website} >
                  <p>{HTMLReactParser(project.customer.website)}</p>
                </a>
              </div>
              <div className="project_customer_data">
                <h4>Fecha de Contrato:</h4>
                <p>{normalizeDate(project.dev_date)}</p>
              </div>
              <div className="project_customer_data">
                <h4>Rubro:</h4>
                <p>{project.customer.field}</p>
              </div>
            </div>
            <div className="project_body_bg_wrapper">
              {HTMLReactParser(project.background)}
            </div>
          </div>
        </div>
      </div>

      <LazyLoad
        once={true}
        height={200}
        offset={[-200, 0]}
        placeholder={<Placeholder />}
        debounce={500}
      >
        <SingleProjectSlider
          slides={project.slide_projects}
          customer={project.customer}
        />
      </LazyLoad>

      <div className="full_project_xplain_objetive">
        <div className="wrapper_project_full_xplanation">          
          <div className="project_xplain_text_container">
            <div className="start_point_project_container">
              <div className="start_point">
                {HTMLReactParser(project.start_point)}
              </div>
              <div className="objetive_project">
                {HTMLReactParser(project.objetive)}
              </div>
            </div>
          </div>
          <div className="project_lateral_image_container">
            <img src={project.lateral_img.url} alt={project.title} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default SinglePortfolio
