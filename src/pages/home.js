import React, { useState, useEffect } from 'react'
import LateralMenu from '../components/navigation/navbar'

const HomePage = () => {
  const [navStatus, setNavStatus] = useState(true)

  const updateShowNav = () => {
    setNavStatus(window.pageYOffset > 0 ? false : true);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", updateShowNav);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", updateShowNav);
    };
  });
  return (
    <div>
      <LateralMenu 
        navStatus= { navStatus }
      />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default HomePage
