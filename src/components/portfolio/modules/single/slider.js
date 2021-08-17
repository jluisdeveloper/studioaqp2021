import React, { Component } from 'react'
import Flickity from "react-flickity-component";

const flickityOptions = {
  initialIndex: 1,
  wrapAround: true,      // para no mostrar ni caer en inifintos slides
  setGallerySize: true,
  // cellAlign: "left",
  prevNextButtons: false,
  adaptiveHeight: true,
  pageDots: false
}

 class SingleProjectSlider extends Component {
  constructor(props) {
    super()
  }
  render() {
    const { slides } = this.props
    return (
      <div className="project_slider_single_container">
      {
        slides.length > 0 ?
          <Flickity
            flickityRef={c => this.flkty = c}
            className={'carousel_single_project'} // default ''
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate={false} // default false
            static={true} // default false
          >
            {
              slides.map((slide) => (
                <div className="slide_cell_single_project" style={{ backgroundImage: `url(${slide.image.url})` }} key={slide.id}>
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

export default SingleProjectSlider
