import React from 'react'
import './styles/blog.scss'

import SliderBlog from './modules/slider_blog'

const Blog = () => {
  return (
    <div className="blog_container">
      <div className="intro_blog_wrapper">
        <div className="intro_blog_layer">
          <div className="intro_text_wrapper">
            <span>
              Vamos mas alla de <strong>Diseñar paginas web</strong>
            </span>
            <h2>
              Buscamos que tu negocio <strong>Crezca</strong>
            </h2>
            <p>
              Sabemos que con la creacion de una pagina web el trabajo no esta aun terminado para tu posicionamiento en la web, el camino es largo y conociendo que puedes implementar estrategias a traves de nuestros articulos. Nos importa nuestro compromiso con la excelencia y la entrega de resultados de calidad.
            </p>
          </div>
          <div className="btn_container">
            <a href="/" className="btn_outline">
              Visitar Blog
              <svg xmlns="http://www.w3.org/2000/svg" width="27.001" height="10.018" viewBox="0 0 27.001 10.018"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M0 5.123h25.553"></path><path d="M21.827.51l4.153 4.5-4.153 4.5"></path></g></svg>
            </a>
          </div>
        </div>
      </div>

      <SliderBlog/>
    </div>
  )
}

export default Blog
