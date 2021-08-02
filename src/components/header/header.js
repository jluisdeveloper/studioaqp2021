import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import SocialBar from './modules/socialbar'
import NavButton from './modules/button'
import MenuOverlay from './modules/overlay'

import './styles/header.scss'

const Header = (props) => {
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

        <MenuOverlay 
          navStatus={ navStatus }
          toggleMenu={ toggleMenu }
          handleChangeMenu={ handleChangeMenu }
        />

        <h1 className="logo_inner_title">
          <Link to="/" >
            <img src="./img/logo-studioaqp-blanco.png" alt="studioaqp" />
          </Link>
        </h1>
      </div>      
    </header>
  )
}

export default Header