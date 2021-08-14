import React, { useState, useEffect} from 'react'
import LazyLoad from 'react-lazyload';
import Placeholder from '../components/loader/spiner'
import Header from '../components/header/header'
import HomePage from '../components/home/HomePage'
import PortfolioPage from '../components/portfolio/portfolio'
import TrabajemosJuntos from '../components/trabajemos/juntos';
import Blog from '../components/blog/blog';
import Services from '../components/services/services';
import Footer from '../components/footer/footer';


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

        <div id="juntos">          
          <LazyLoad 
            once={true}
            height={200}
            offset={[-200, 0]}
            placeholder={<Placeholder />}
            debounce={500}           
          >
            <TrabajemosJuntos/>
          </LazyLoad>
        </div>

        <div id="blog">          
          <LazyLoad 
            once={true}
            height={200}
            offset={[-200, 0]}
            placeholder={<Placeholder />}
            debounce={500}           
          >
            <Blog/>
          </LazyLoad>
        </div>

        <div id="services">          
          <LazyLoad 
            once={true}
            height={200}
            offset={[-200, 0]}
            placeholder={<Placeholder />}
            debounce={500}           
          >
            <Services/>
          </LazyLoad>
        </div>

        <div id="contacto">          
          <LazyLoad 
            once={true}
            height={200}
            offset={[-200, 0]}
            placeholder={<Placeholder />}
            debounce={500}           
          >
            <Footer/>
          </LazyLoad>
        </div>
      </main>

    </div>
  )
}

export default StudioAQP
