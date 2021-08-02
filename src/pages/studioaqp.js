import React, { useState, useEffect } from 'react'

import Header from '../components/header/header'
import HomePage from '../components/home/HomePage'

const StudioAQP = () => { 
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
      <Header 
        navStatus= { navStatus }
      />
      <main>
        <HomePage />
      </main>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default StudioAQP
