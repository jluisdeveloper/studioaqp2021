import React from 'react'
import HTMLReactParser from 'html-react-parser';
import LazyLoad from 'react-lazyload'

import Placeholder from '../loader/spiner';
import { Link } from 'react-router-dom'
import { Zoom } from 'react-awesome-reveal';

import './styles/index.scss'

const IndexPortfolio = ({ projectsList }) => {
  return (
    <div className="index_portfolio_container">
      <div className="index_portfolio_wrapper">
        <div className="top_index_wrapper">
          <div className="title_portfolio_wrapper">
            <h1>
              Creatividad, estrategia y tecnología basada en lo digital y el poder de la expresión humana. Vea nuestro trabajo en acción.
            </h1>
          </div>
          <div className="phrase_portfolio_wrapper">
            <p>
              A través de una estrategia, diseño y desarrollo de marca pioneros, descubrimos las tensiones culturales y las experiencias humanas que ayudan a las marcas a destacarse y representar algo.
            </p>
          </div>
        </div>

        <LazyLoad
          once={true}
          height={200}
          offset={[-200, 0]}
          placeholder={<Placeholder />}
          debounce={500}
        >
          <section className="index_portfolio_body_cards">
            {
              projectsList.length > 0 ?
                projectsList.map(project => (
                  <Zoom
                    cascade
                    triggerOnce
                    key={project.id}
                  >
                    <Link to={`/portafolio/${project.slug}`}>
                      <div className="card_portfolio_wrapper">
                        <div className="cover_card_portfolio_wrapper">
                          <img src={project.cover.url} alt={project.customer.name} />
                        </div>
                        <div className="text_card_portfolio_wrapper">
                          <h3>{project.title}</h3>
                          <p>{HTMLReactParser(project.abstract)}</p>
                        </div>
                        <div className="button_to_portfolio_wrapper">
                        <Link to={`/portafolio/${project.slug}`} className="fast_link" style={{ float: 'right', marginTop: '20px' }}>
                          Ver Proyecto
                        </Link>
                        </div>
                      </div>
                    </Link>
                  </Zoom>
                )
                )
                :
                null
            }
          </section>
        </LazyLoad>
      </div>
    </div >
  )
}

export default IndexPortfolio
