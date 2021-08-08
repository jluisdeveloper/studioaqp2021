import React, { useState, useEffect} from 'react'
import LazyLoad from 'react-lazyload';
import Placeholder from '../components/loader/spiner'
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
        <LazyLoad 
          once={true}
          height={200}
          offset={[-200, 0]}
          placeholder={<Placeholder />}
          debounce={500}           
        >
          <HomePage />
        </LazyLoad>
        
        <div id="portfolio">
          <LazyLoad 
            once={true}
            height={200}
            offset={[-200, 0]}
            placeholder={<Placeholder />}
            debounce={500}           
          >
            <PortfolioPage />
          </LazyLoad>
        </div>
        <br/> <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/> <br/> <br/> <br/>
        <br/> <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/> <br/> <br/> <br/>
      </main>

    </div>
  )
}

export default StudioAQP
