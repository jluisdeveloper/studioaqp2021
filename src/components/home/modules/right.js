import React from 'react'
import {Link} from 'react-scroll'
import '../styles/right.scss'

const RightSection = () => {
  return (
    <div className="right_section">
      <div className="message_container" >
        <div className="message_text" >
          <h2 className="message_text_inner">
            Crezcamos Juntos. <br />
            Despegar, Crecer. <br />
            Lanzar.
          </h2>
        </div>        
      </div>
      <Link to="portfolio" smooth={true} duration={1000} ><span className="arrow_bottom" >
      </span></Link>
    </div>
  )
}

export default RightSection
