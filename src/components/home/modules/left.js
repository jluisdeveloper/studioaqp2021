import React from 'react'
import { Link } from 'react-router-dom'
import { animated } from 'react-spring'

import '../styles/left.scss'

const LeftSection = (props) => {
  const { move } = props
  const translateCoords = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`
  

  return (
    <div className="left_section" >
      { /* ACA EMPIEZA EL PARALLAX CHECAR AMS ADELANTE */}
      <div 
        className="description_container"
        style={{ "transform": "matrix(1, 0, 0, 1, 2.058, -8.512)" }}
      >
        <h3 className="description_title">
          Lleva tu Negocio a otro <br />  Nivel
        </h3>
        <p className="description_text">
          Tener una web hoy, no es una alternativa es una necesidad y en Studioaqp lo sabemos, es por ello que trabajamos constantemente en ofrecerte servicios acorde a tus requerimientos.
        </p>
        <Link target="_blank" rel="noopener noreferrer" to="#" className="fast_link" > Enterate cómo </Link>
      </div>
      <animated.div className="bg_left_section" style={{ transform: move.xy.to(translateCoords) }} />
      { /* ACA TERMINA EL PARALLAX */}
    </div>
  )
}

export default LeftSection
