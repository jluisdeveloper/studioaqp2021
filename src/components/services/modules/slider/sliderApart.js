import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Flickity from "react-flickity-component";
import HTMLReactParser from 'html-react-parser';

import '../../styles/slider_by_service.scss'

const flickityOptions = {
  initialIndex: 0,
  wrapAround: true,      // para no mostrar ni caer en inifintos slides
  setGallerySize: true,
  cellAlign: "left",
  prevNextButtons: false,
  adaptiveHeight: true,
  lazyLoad: true,
  pageDots: false
}

class SliderApart extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    const { slides } = this.props
    return (
      <div className="slide_services_container">
        {
          slides.length > 0 ?
            <Flickity
              className={'carousel_by_service'} // default ''
              options={flickityOptions} // takes flickity options {}
              disableImagesLoaded={false} // default false
              reloadOnUpdate={false} // default false
              static={true} // default false
            >
              {
                slides.map((slide) => (
                  <div className="container_slide_service_index" key={slide.id}>
                    <div className="contenst_slide_services_index">
                      <div className="contenst_slide_services_index_overlay"></div>
                      <img className="contenst_slide_services_index_image" src={slide.cover.url} alt={slide.customer.name} />
                      <div className="contenst_slide_services_index_details fadeIn_top_effect_services">
                        <h3> {HTMLReactParser(slide.customer.name)} </h3>
                        <p>{HTMLReactParser(slide.title)}</p>

                        <Link to={ `/portafolio/${slide.slug}` } className="btn_outline_service_by_slider">
                          Ver Proyecto                          
                        </Link>
                      </div>
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

export default SliderApart
