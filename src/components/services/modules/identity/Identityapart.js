import React from 'react'
import { Link } from 'react-router-dom'

import SliderApart from '../slider/sliderApart'

const IdentityApart = ({slides}) => {
  return (
    <div className="apart_container">
      <div className="left_apart_service_wrapper">
        <div className="divider_service">
        </div>
        <div className="body_apart_service_wrapper">
          <span>01</span>
          <h3>Desarrollo de Identidad</h3>
          <p>
            Los clientes de hoy esperan que las marcas con las que interactúan tengan una opinión. Tomar una postura. Para dar poco. <br/>

            Diseñamos marcas que conectan con las audiencias a través de una cultura y valores compartidos, y que exploran las tensiones culturales que determinan las lealtades y los comportamientos.
          </p>
          <ul>
            <li>Estrategia de marca</li>
            <li>Denominación de marca</li>
            <li>Mensajes de marca</li>
            <li>Identidad visual</li>
          </ul>

          <Link to="/servicios/identidad" className="btn_outline_service">
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

export default IdentityApart
