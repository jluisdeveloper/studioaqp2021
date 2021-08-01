import React, { useState } from 'react'
import SocialBar from './socialbar'
import { Link } from 'react-router-dom'

import NavButton from './button'

import './styles/navGeneral.scss'

const LateralMenu = (props) => {
  const { navStatus } = props  // para los estilos de estiramiento
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleChangeMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <header className="header_main ">
      <div className="header_container" >
        <div className="navigation" style={ navStatus ? { height: "100vh" } : { height: "100px" } } > 
          <NavButton
            navStatus={ navStatus }
            handleChangeMenu= { handleChangeMenu }
            toggleMenu={ toggleMenu }
          />
          <SocialBar/>
        </div>

        <div className={ toggleMenu ? "menu_out_active" : "menu_out" } style={ navStatus ? { height: "100vh" } : { height: "0px" } } > 
          <div className={ toggleMenu ? "menu_overlay_active" : "menu_overlay" } onClick={ ()=>handleChangeMenu() } > </div>

          <div className="menu_inner" >
            { /* a => logo studio checar mas adelante */ }
            <Link to="/" className="logo_in_overlay_menu" >
              <img src="./img/logo-studioaqp-blanco.png" alt="studioaqp" />
            </Link>
            <nav>
              <div className={ toggleMenu ? "menu_item_container_active" : "menu_item_container" }>
                <Link to="#" className={ toggleMenu ? "menu_item_active" : "menu_item" } > Inicio </Link>
              </div>
              <div className={ toggleMenu ? "menu_item_container_active" : "menu_item_container" }>
                <Link to="#" className={ toggleMenu ? "menu_item_active" : "menu_item"} > Proyectos Realizados </Link>
              </div>
              <div className={ toggleMenu ? "menu_item_container_active" : "menu_item_container" }>
                <Link to="#" className={ toggleMenu ? "menu_item_active" : "menu_item"} > Proyectos Realizados </Link>
              </div>
              <div className={ toggleMenu ? "menu_item_container_active" : "menu_item_container" }>
                <Link to="#" className={ toggleMenu ? "menu_item_active" : "menu_item"} > Proyectos Realizados </Link>
              </div>
            </nav>
          </div>
        </div>

        <h1 className="logo_inner_title">
          <Link to="/" >
            <img src="./img/logo-studioaqp-blanco.png" alt="studioaqp" />
          </Link>
        </h1>
      </div>      
    </header>
  )
}

export default LateralMenu
