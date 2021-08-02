import React from 'react'
import '../styles/button.scss'

const NavButton = (props) => {
  const { navStatus, handleChangeMenu, toggleMenu } = props


  return (
    <div className="toggle_menu" style={ navStatus ? { height: "153px" } : { height: "100px" } } onClick={()=> handleChangeMenu() } > 
      <div className="animation" >
        <div className="icon" >
          <div className={ toggleMenu ? "activeMenuLines" : "lines" } >
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavButton
