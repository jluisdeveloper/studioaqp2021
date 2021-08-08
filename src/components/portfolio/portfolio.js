import React from 'react'

import IntroPortfolio from './modules/intro';
import PortfolioSlider from './modules/slider';



import './styles/portfolio.scss'

const PortfolioPage = () => {

  return (
    <div className="portfolio_container">
      <IntroPortfolio/>

      {/* FILA DE SLIDER */}
      <div className="portfolio_slider_container">
        <div className="slider_portfolio_wrapper">
          <div className="portfolio_wrapper_project_intro">
            <div className="portfolio_text_container_slider">
              <span>
                Nuestro trabajo
              </span>
              <h3>
                Proyectos <br /> Realizados
              </h3>
              <p>
                Todos nuestros proyectos estan orientados a brindar a nuestros clientes la satisfaccion de sus Paginas Web, Asi mismo apoyamos a todos nuestros clientes en el desarrollo de cada detalle de su Web desde los textos hasta las imagenes.
              </p>
              <br />
              <a href="/" className="btn_outline">
                Ver todo
                <svg xmlns="http://www.w3.org/2000/svg" width="27.001" height="10.018" viewBox="0 0 27.001 10.018"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M0 5.123h25.553"></path><path d="M21.827.51l4.153 4.5-4.153 4.5"></path></g></svg>
              </a>
            </div>
          </div>
          
          <PortfolioSlider/>
        </div>
      </div>
    </div>
  )
}

export default PortfolioPage
