import React, { useState, useEffect } from 'react'

import Header from '../components/header/header'
import HomePage from '../components/home/HomePage'
import PortfolioPage from '../components/portfolio/portfolio'

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
    <div id="home" >
      <Header 
        navStatus= { navStatus }
      />
      <main>
        <HomePage />
        <PortfolioPage />
      </main>

    </div>
  )
}

export default StudioAQP
