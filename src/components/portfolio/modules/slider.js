import React, { Component } from 'react'
import Flickity from "react-flickity-component";
import sliders_portfolio from '../../../faker/slidersFake'

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
      currentSlide: 0
    }
  }



  componentDidMount = () => {
    this.dumpLol()
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
    return (
      <div className="portfolio_wrapper_slider" >
        <div className="layer_bg_loop" style={{ backgroundImage: `url(${sliders_portfolio[this.state.currentSlide].img})` }} > {/* */}

        </div>
        <Flickity
          flickityRef={c => this.flkty = c}
          className={'carousel'} // default ''
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate={false} // default false
          static={true} // default false
        >
          {
            sliders_portfolio.map((slide, index) => (
              <div className="slide_cell" key={index}>
                <div className="cover" style={{ backgroundImage: `url(${slide.img})` }}>
                </div>
                <div className="slide_misc_container">
                  <h3> {slide.client_name} </h3>
                  <p> {slide.description} </p>
                  <a href="/" className="fast_link"> Ver proyecto </a>
                </div>
              </div>
            ))
          }
        </Flickity>
      </div>
    )
  }
}

export default PortfolioSlider
