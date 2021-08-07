import React from 'react'
import { Link } from 'react-scroll'

import '../styles/overlay.scss'

const MenuOverlay = (props) => {
  const { toggleMenu, handleChangeMenu, navStatus } = props

  return (
    <div className={ toggleMenu ? "menu_out_active" : "menu_out" } style={ navStatus ? { height: "100vh" } : { height: "0px" } } > 
      <div className={ toggleMenu ? "menu_overlay_active" : "menu_overlay" } onClick={ ()=>handleChangeMenu() } > </div>

      <div className="menu_inner" >
        <a href="/" className="logo_in_overlay_menu" >
          <img src="./img/logo-studioaqp-blanco.png" alt="studioaqp" />
        </a>
        <nav>
          <div className={ toggleMenu ? "menu_item_container_active" : "menu_item_container" }>            
            <Link to="home" className={ toggleMenu ? "menu_item_active" : "menu_item" } smooth={true} duration={300} onClick={ ()=>setTimeout( () => handleChangeMenu(), 400 ) } > Inicio </Link>
          </div>
          <div className={ toggleMenu ? "menu_item_container_active" : "menu_item_container" }>
            <Link to="portfolio" className={ toggleMenu ? "menu_item_active" : "menu_item"} smooth={true} duration={300} onClick={ ()=>setTimeout( () => handleChangeMenu(), 400 ) } > Portafolio </Link>
          </div>
          <div className={ toggleMenu ? "menu_item_container_active" : "menu_item_container" }>
            <Link to="philosophy" className={ toggleMenu ? "menu_item_active" : "menu_item"} smooth={true} duration={300} onClick={ ()=>setTimeout( () => handleChangeMenu(), 400 ) } > Filosofia </Link>
          </div>
          <div className={ toggleMenu ? "menu_item_container_active" : "menu_item_container" }>
            <Link to="blog" className={ toggleMenu ? "menu_item_active" : "menu_item"} smooth={true} duration={300} onClick={ ()=>setTimeout( () => handleChangeMenu(), 400 ) } > Blog </Link>
          </div>
          <div className={ toggleMenu ? "menu_item_container_active" : "menu_item_container" }>
            <Link to="services" className={ toggleMenu ? "menu_item_active" : "menu_item"} smooth={true} duration={300} onClick={ ()=>setTimeout( () => handleChangeMenu(), 400 ) } > Servicios </Link>
          </div>
          <div className={ toggleMenu ? "menu_item_container_active" : "menu_item_container" }>
            <Link to="contact" className={ toggleMenu ? "menu_item_active" : "menu_item"} smooth={true} duration={300} onClick={ ()=>setTimeout( () => handleChangeMenu(), 400 ) } > Contacto </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default MenuOverlay
