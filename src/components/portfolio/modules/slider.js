import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Flickity from "react-flickity-component";
import ReactHtmlParser from 'html-react-parser';
import axios from 'axios';

const flickityOptions = {
  initialIndex: 0,
  wrapAround: false,      // para no mostrar ni caer en inifintos slides
  setGallerySize: true,
  cellAlign: "left",
  prevNextButtons: false,
  adaptiveHeight: true,
  pageDots: false
}

class PortfolioSlider extends Component {
  constructor() {
    super()
    this.state = {
      currentSlide: 0,
      projects: []
    }
  }

  componentDidMount = async () => {
    await this.getPortfolioInHome()
    this.dumpLol()    
  }

  getPortfolioInHome = async () => {
    await axios.get('https://dashboard.studioaqp.com/front/projects/in_home', {})
      .then((response) => {
        this.setState({
          projects: response.data
        })
      }).catch((error) => {
        console.log(error)
      })
  }

  dumpLol = () => {
    this.flkty.on('settle', () => {
      this.setState({
        ...this.state,
        currentSlide: this.flkty.selectedIndex,
      })
    })
  }

  render() {
    const { projects } = this.state
    return (
      <div className="portfolio_wrapper_slider" >
        {
          projects.length > 0 ?
            <div className="layer_bg_loop" style={{ backgroundImage: `url(${projects[this.state.currentSlide].cover.url})` }} > {/* */}

            </div>
          : null
      }
        
        {
          projects.length > 0 ?
            <Flickity
              flickityRef={c => this.flkty = c}
              className={'carousel'} // default ''
              options={flickityOptions} // takes flickity options {}
              disableImagesLoaded={false} // default false
              reloadOnUpdate={false} // default false
              static={true} // default false
            >
              {
                projects.map((slide) => (
                  <div className="slide_cell" key={slide.id}>
                    <div className="cover" style={{ backgroundImage: `url(${slide.cover.url})` }}>
                    </div>
                    <div className="slide_misc_container">
                      <h3> {slide.customer.name} </h3>
                      { ReactHtmlParser(slide.abstract) }
                      <Link to={`/proyectos/${slide.slug}`} className="fast_link"> Ver proyecto </Link>
                    </div>
                  </div>
                ))
              }
            </Flickity> 
            : null
        }
      </div>
    )
  }
}

export default PortfolioSlider
