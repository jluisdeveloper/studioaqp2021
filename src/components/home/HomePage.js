import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

import './styles/home.scss'

const HomePage = () => {
  // for parallax effect with mouse
  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
  const trans1 = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`

  const [move, setMove] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

  return (
    <div
      id="home"
      className="home_wrapper"
      onMouseMove={({ clientX: x, clientY: y }) => setMove({ xy: calc(x, y) })}
    >
      <div className="content" >
        <div className="left_section" >
          { /* ACA EMPIEZA EL PARALLAX CHECAR AMS ADELANTE */}
          <div className="description_container"
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
          <animated.div className="bg_left_section" style={{ transform: move.xy.to(trans1) }} />

          { /* ACA TERMINA EL PARALLAX */}
        </div>
        <div className="right_section">
          <div className="message_container" >
            <div className="message_text" >
              <h2 className="message_text_inner">
                Crezcamos Juntos. <br />
                Despegar, Crecer. <br />
                Lanzar.
              </h2>
            </div>
            <span className="arrow_bottom" >
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
