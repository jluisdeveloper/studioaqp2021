import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/overlay.scss'

const MenuOverlayNewPage = (props) => {
  const { toggleMenu, handleChangeMenu, navStatus } = props

  return (
    <div className={ toggleMenu ? "menu_out_active" : "menu_out" } style={ navStatus ? { height: "100vh" } : { height: "0px" } } > 
      <div className={ toggleMenu ? "menu_overlay_active" : "menu_overlay" } onClick={ ()=>handleChangeMenu() } > </div>

      <div className="menu_inner" >
        <a href="/" className="logo_in_overlay_menu" >
          <img src="/img/logo-studioaqp-blanco.png" alt="studioaqp" />
        </a>
        <nav>
          <div className={ toggleMenu ? "menu_item_container_active" : "menu_item_container" }>            
            <Link to="/" className={ toggleMenu ? "menu_item_active" : "menu_item" } > Inicio </Link>
          </div>
          <div className={ toggleMenu ? "menu_item_container_active" : "menu_item_container" }>
            <Link to="/portfalio" className={ toggleMenu ? "menu_item_active" : "menu_item"} > Portafolio </Link>
          </div>
          <div className={ toggleMenu ? "menu_item_container_active" : "menu_item_container" }>
            <Link to="/nosotros" className={ toggleMenu ? "menu_item_active" : "menu_item"} > Nosotros </Link>
          </div>
          <div className={ toggleMenu ? "menu_item_container_active" : "menu_item_container" }>
            <Link to="/blog" className={ toggleMenu ? "menu_item_active" : "menu_item"} > Blog </Link>
          </div>
          <div className={ toggleMenu ? "menu_item_container_active" : "menu_item_container" }>
            <Link to="/servicios" className={ toggleMenu ? "menu_item_active" : "menu_item"} > Servicios </Link>
          </div>
          <div className={ toggleMenu ? "menu_item_container_active" : "menu_item_container" }>
            <Link to="/contacto" className={ toggleMenu ? "menu_item_active" : "menu_item"} > Contacto </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default MenuOverlayNewPage
