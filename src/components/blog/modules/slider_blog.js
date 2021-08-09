import React, { Component } from 'react'
import Flickity from "react-flickity-component";
import posts_blog from '../../../faker/blogFaker'

const flickityOptions = {
  initialIndex: 1,
  wrapAround: true,      // para no mostrar ni caer en inifintos slides
  setGallerySize: true,
  // cellAlign: "left",
  prevNextButtons: false,
  adaptiveHeight: true,
  pageDots: false
}

class SliderBlog extends Component {
  constructor() {
    super()
    this.state = {
      currentSlide: 1,
      totalSlides: posts_blog.length,
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
        // totalSlides: posts_blog.length
      })
    })
  }

  handleBlogNext = () => {
    this.flkty.next()
  }

  handleBlogPrev = () => {
    this.flkty.previous()
  }

  render() {
    return (
      <div className="blog_slider_wrapper" >
        <Flickity
          flickityRef={c => this.flkty = c}
          className={'carousel-blog'} // default ''
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate={false} // default false
          static={true} // default false
        >
          {
            posts_blog.map((post, index) => (
              <div className="post_cell_blog" key={index}>
                <div className="post_container_blog">
                  <div className="cover_post_blog" style={{ backgroundImage: `url(${post.cover})` }}>
                  </div>
                  <div className="blog_body">
                    <div className="blog_body_text_wrapper">
                      <span>{post.date}</span>
                      <h3> {post.title} </h3>
                      <p> {post.abstract} </p>
                      <a href="/" className="btn_outline"> Leer Mas </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </Flickity>

        <div className="blog_navigation_slider_buttons">
          <span className="prev_post" onClick={()=> this.handleBlogPrev()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="27.001" height="10.018" viewBox="0 0 27.001 10.018"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M0 5.123h25.553"></path><path d="M21.827.51l4.153 4.5-4.153 4.5"></path></g></svg>
          </span>

          <span className="current_slide_of">
            0{ this.state.currentSlide + 1 } - 0{ this.state.totalSlides}
          </span>

          <span className="next_post" onClick={()=> this.handleBlogNext()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="27.001" height="10.018" viewBox="0 0 27.001 10.018"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M0 5.123h25.553"></path><path d="M21.827.51l4.153 4.5-4.153 4.5"></path></g></svg>
          </span>
        </div>

      </div>
    )
  }
}

export default SliderBlog