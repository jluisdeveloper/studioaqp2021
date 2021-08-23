import React from 'react'
import { Link } from 'react-router-dom'

import SliderApart from '../slider/sliderApart'

const WebApart = ({ slides }) => {
  return (
    <div className="apart_container">
      <div className="left_apart_service_wrapper">
        <div className="divider_service">
        </div>
        <div className="body_apart_service_wrapper">
          <span>02</span>
          <h3>Diseño y desarrollo de APLICACIONES WEB</h3>
          <p>
            Diseño de Logotipos, Brochures, papeleria corporativa y mas! <br />

            Desde el principio, hemos creído que el software puede cambiar el mundo. Combinando el desarrollo ágil con el pensamiento estratégico, nuestros productos y servicios digitales cierran la brecha entre las experiencias físicas y digitales para hacer realidad las ambiciones digitales de los clientes.
          </p>
          <ul>
            <li>Hojas de ruta de productos MVP +</li>
            <li>Validación de mercado</li>
            <li>Creación de prototipos</li>
            <li>Pruebas de usabilidad</li>
          </ul>

          <Link to="/servicios/desarrollo-web" className="btn_outline_service">
            Saber más
            <svg xmlns="http://www.w3.org/2000/svg" width="27.001" height="10.018" viewBox="0 0 27.001 10.018"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M0 5.123h25.553"></path><path d="M21.827.51l4.153 4.5-4.153 4.5"></path></g></svg>
          </Link>
        </div>
      </div>

      <div className="right_apart_service_wrapper">
        <SliderApart
          slides={slides}
        />
      </div>
    </div>
  )
}

export default WebApart
