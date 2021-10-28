import React from 'react'
import Flickity from "react-flickity-component";
import { Link } from 'react-router-dom'

import './styles/services.scss'

let flickityOptions = {
  initialIndex: 0,
  wrapAround: false,      // para no mostrar ni caer en inifintos slides
  setGallerySize: true,
  cellAlign: "left",
  prevNextButtons: false,
  adaptiveHeight: true,
  pageDots: false,
  draggable: true
}

const Services = () => {
  if (window.matchMedia('screen and (min-width: 768px)').matches) {
    flickityOptions.draggable = false;
  }

  return (
    <div className="services_container">

      <div className="intro_services_wrapper">
        <div className="intro_services_layer">
          <div className="intro_services_text_wrapper">
            <div className="middle_layer_helper">
              <span> Por que elegir a <strong>studioaqp</strong> ?</span>
              <h2>Como podemos ayudarte</h2>
            </div>
          </div>
          <div className="services_intro_text_wrapper">
            <p> Si deseas resultados en lina claros, honestos y tangibles con las oportunidad de aprender como se logran, pongase en contacto ahora ver como podemos ayudar. Brindamos un servicio personalizado y apasionado a todos y cada uno de nuestros clientes, grandes o pequenhos, con sede en Arequipa atendemos a todo el Peru. </p>
          </div>
        </div>
      </div>

      <div className="services_slider_container">
        <Flickity
          className={'carousel-services'} // default ''
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate={false} // default false
          static={true} // default false

        >
          <div className="service_cell">
            <div className="services_black_layer">
              <div className="service_cover_img_wrapper" style={{ backgroundImage: `url(https://studio-front.s3.amazonaws.com/desarrollo_grafico.jpg)` }}>
              </div>
            </div>
            <div className="text_wrapper_services">
              <div className="services_show_text">
                <span>01</span>
                <h4> Desarrollo de <strong>Identidad</strong> <br /> Grafica</h4>
              </div>

              <div className="services_hover_show_text">
                <p>Diseño de Logotipos, Brochures, papeleria corporativa y mas!</p>
                <Link to="/servicios/identidad-grafica">
                  <svg xmlns="http://www.w3.org/2000/svg" width="27.001" height="10.018" viewBox="0 0 27.001 10.018"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M0 5.123h25.553"></path><path d="M21.827.51l4.153 4.5-4.153 4.5"></path></g></svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="service_cell">
            <div className="services_black_layer">
              <div className="service_cover_img_wrapper" style={{ backgroundImage: `url(https://studio-front.s3.amazonaws.com/desarrollo_web.jpg)` }}>
              </div>
            </div>
            <div className="text_wrapper_services">
              <div className="services_show_text">
                <span>02</span>
                <h4> Diseño y desarrollo de <br /> <strong>aplicaciones web</strong> </h4>
              </div>

              <div className="services_hover_show_text">
                <p>Diseño de Logotipos, Brochures, papeleria corporativa y mas!</p>
                <Link to="/servicios/desarrollo-web">
                  <svg xmlns="http://www.w3.org/2000/svg" width="27.001" height="10.018" viewBox="0 0 27.001 10.018"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M0 5.123h25.553"></path><path d="M21.827.51l4.153 4.5-4.153 4.5"></path></g></svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="service_cell">
            <div className="services_black_layer">
              <div className="service_cover_img_wrapper" style={{ backgroundImage: `url(https://studio-front.s3.amazonaws.com/asesorias.jpg)` }}>
              </div>
            </div>
            <div className="text_wrapper_services">
              <div className="services_show_text">
                <span>03</span>
                <h4> Asesoria en <strong>Marketing </strong> <br /> y presencia digital</h4>
              </div>

              <div className="services_hover_show_text">
                <p>Diseño de Logotipos, Brochures, papeleria corporativa y mas!</p>
                <Link to="/servicios/marketing-digital">
                  <svg xmlns="http://www.w3.org/2000/svg" width="27.001" height="10.018" viewBox="0 0 27.001 10.018"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M0 5.123h25.553"></path><path d="M21.827.51l4.153 4.5-4.153 4.5"></path></g></svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="service_cell">
            <div className="services_black_layer">
              <div className="service_cover_img_wrapper" style={{ backgroundImage: `url(https://studio-front.s3.amazonaws.com/redes.jpg)` }}>
              </div>
            </div>
            <div className="text_wrapper_services">
              <div className="services_show_text">
                <span>04</span>
                <h4> Manejo de <strong>Redes sociales</strong> <br /> en general</h4>
              </div>

              <div className="services_hover_show_text">
                <p>Diseño de Logotipos, Brochures, papeleria corporativa y mas!</p>

                <Link to="/servicios/redes-sociales">
                  <svg xmlns="http://www.w3.org/2000/svg" width="27.001" height="10.018" viewBox="0 0 27.001 10.018"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M0 5.123h25.553"></path><path d="M21.827.51l4.153 4.5-4.153 4.5"></path></g></svg>
                </Link>
              </div>
            </div>
          </div>
        </Flickity>
      </div>


    </div>
  )
}

export default Services
