import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/overlay.scss'

const MenuOverlay = (props) => {
  const { toggleMenu, handleChangeMenu, navStatus } = props

  return (
    <div className={ toggleMenu ? "menu_out_active" : "menu_out" } style={ navStatus ? { height: "100vh" } : { height: "0px" } } > 
      <div className={ toggleMenu ? "menu_overlay_active" : "menu_overlay" } > </div>

      <div className="menu_inner" >
        <Link to="/" className="logo_in_overlay_menu" >
          <img src="./img/logo-studioaqp-blanco.png" alt="studioaqp" />
        </Link>
        <nav>
          <div className={ toggleMenu ? "menu_item_container_active" : "menu_item_container" }>
            <a href="#home" className={ toggleMenu ? "menu_item_active" : "menu_item" } onClick={ ()=>setTimeout( () => handleChangeMenu(), 300 ) } > Inicio </a>
          </div>
          <div className={ toggleMenu ? "menu_item_container_active" : "menu_item_container" }>
            <a href="#portfolio" className={ toggleMenu ? "menu_item_active" : "menu_item"} onClick={ ()=>setTimeout( () => handleChangeMenu(), 300 ) } > Proyectos Realizados </a>
          </div>
          <div className={ toggleMenu ? "menu_item_container_active" : "menu_item_container" }>
            <a href="#philosophy" className={ toggleMenu ? "menu_item_active" : "menu_item"} onClick={ ()=>setTimeout( () => handleChangeMenu(), 300 ) } > Nuestra Filosofia </a>
          </div>
          <div className={ toggleMenu ? "menu_item_container_active" : "menu_item_container" }>
            <a href="#blog" className={ toggleMenu ? "menu_item_active" : "menu_item"} onClick={ ()=>setTimeout( () => handleChangeMenu(), 300 ) } > Blog StudioAQP </a>
          </div>
          <div className={ toggleMenu ? "menu_item_container_active" : "menu_item_container" }>
            <a href="#services" className={ toggleMenu ? "menu_item_active" : "menu_item"} onClick={ ()=>setTimeout( () => handleChangeMenu(), 300 ) } > Servicios de StudioAQP </a>
          </div>
          <div className={ toggleMenu ? "menu_item_container_active" : "menu_item_container" }>
            <a href="#contact" className={ toggleMenu ? "menu_item_active" : "menu_item"} onClick={ ()=>setTimeout( () => handleChangeMenu(), 300 ) } > Contacta a StudioAQP </a>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default MenuOverlay
