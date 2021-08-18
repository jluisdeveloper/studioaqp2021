import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import SocialBar from './modules/socialbar'
import NavButton from './modules/button'
import MenuOverlay from './modules/overlay'
import MenuOverlayNewPage from './modules/overlatNewPage'

import './styles/header.scss'
import './styles/responsive.scss'

const Header = (props) => {
  const { navStatus, menuType } = props  // para los estilos de estiramiento
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleChangeMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <header className="header_main">
      <div className="header_container" >
        <div className="navigation" style={navStatus ? { height: "100vh" } : { height: "100px" }} >
          <NavButton
            navStatus={navStatus}
            handleChangeMenu={handleChangeMenu}
            toggleMenu={toggleMenu}
          />
          <SocialBar />
        </div>

        {
          menuType === 'newPage' ?
            <MenuOverlayNewPage
              navStatus={navStatus}
              toggleMenu={toggleMenu}
              handleChangeMenu={handleChangeMenu}
            />
            :
            <MenuOverlay
              navStatus={navStatus}
              toggleMenu={toggleMenu}
              handleChangeMenu={handleChangeMenu}
            />
        }

        {
          menuType !== 'newPage' ?
            <h1 className="logo_inner_title">
              <Link to="/" >
                <img src="/img/logo-studioaqp-blanco.png" alt="studioaqp" />
              </Link>
            </h1>
            : 
            <h1 className="logo_inner_title only_mobile">
              <Link to="/" >
                <img src="/img/logo-studioaqp-blanco.png" alt="studioaqp" />
              </Link>
            </h1>
        }

      </div>
    </header>
  )
}

export default Header