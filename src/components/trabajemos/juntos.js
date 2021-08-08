import React from 'react'
import './styles/juntos.scss'

import { useSpring, animated } from 'react-spring'

const TrabajemosJuntos = () => {
  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
  const [move, setMove] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  const translateCoords = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`

  return (
    <div
      className="juntos_container"
      onMouseMove={({ clientX: x, clientY: y }) => setMove({ xy: calc(x, y) })}
    >
      <div className="juntos_layer_black">
        <div className="juntos_wrapper">
          <div className="juntos_text_wrapper">
            <h2>
              Porque mas que una WEB <br />
              desarrollamos herramientas <br />
              de comunicacion
            </h2>

            <p>
              Diseñamos, construimos sitios web y propiedades digitales innovadoras que abren nuevas fuentes de ingresos para nuestros clientes.
            </p>
            <a href="/" className="btn_outline">
              Trabajemos juntos
              <svg xmlns="http://www.w3.org/2000/svg" width="27.001" height="10.018" viewBox="0 0 27.001 10.018"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M0 5.123h25.553"></path><path d="M21.827.51l4.153 4.5-4.153 4.5"></path></g></svg>
            </a>
          </div>
        </div>        
      </div>
      <animated.div className="juntos_bg_parallax" style={{ transform: move.xy.to(translateCoords) }} />
    </div>
  )
}

export default TrabajemosJuntos
