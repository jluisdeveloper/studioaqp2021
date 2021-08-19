import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import socialLinks from '../../socialLinks'


import './styles/footer.scss'

const Footer = () => {
  const { studioLinks } = socialLinks()
  return (
    <footer>
      <div className="footer_wrapper">
        <div className="contact_form_footer_wrapper" id="contact">
          <div className="contact_form_wrapper">
            <form action="">
              <div className="footer_form_group">
                <div className="contact_input_group">
                  <label htmlFor="email">Correo</label>
                  <input type="email" name="email" id="email" placeholder="Ingresa tu correo electrónico" required/>
                </div>
                <div className="contact_input_group">
                  <label htmlFor="full_name">Nombres</label>
                  <input type="text" name="full_name" id="full_name" placeholder="Ingresa tus nombres" />
                </div>
                <div className="contact_input_group">
                  <label htmlFor="coupon">Cupón</label>
                  <input type="text" name="coupon" id="coupon" placeholder="¿Tienes un código? Ingrésalo aquí Ingrésalo aquí" />
                </div>
              </div>
              <div className="footer_form_button">
                <button>Enviar</button>
              </div>
            </form>
          </div>
          <div className="contact_tip_wrapper">
            <img src="/img/rocket_tips.png" alt="studioaqp" />
          </div>
        </div>

        <div className="footer_divider"></div>

        <div className="footer_fast_link_info_wrapper">
          <div className="wrapper_colums_footer">
            <div className="footer_location_info_wrapper">
              <img src="/img/logo-studioaqp-blanco.png" alt="studioaqp" />
              <h4>Arequipa | Perú</h4>
              <p>
                Cerro Colorado <br />
                +51 949 175 343
              </p>
            </div>

            <div className="footer_objetive_wrapper">
              <h4>Comprometidos coontigo</h4>
              <p>
                Creamos contenido de marca, organizamos campañas diseñadas para contar tu historia.
              </p>
            </div>

            <div className="footer_fast_links_wrapper">
              <h4>Links Rapidos</h4>
              <nav className="footer_nav">
                <ul>
                  <li><Link to="/" className="fast_link"> Inicio </Link></li>
                  <li><Link to="/portafolio" className="fast_link"> Portafolio </Link></li>
                  <li><Link to="/nosotros" className="fast_link"> Nosotros </Link></li>
                </ul>

                <ul style={{ textAlign: 'right' }}>
                  <li><Link to="/blog" className="fast_link"> Blog </Link></li>
                  <li><Link to="/servicios" className="fast_link"> Servicios </Link></li>
                  <li><Link to="/contacto" className="fast_link"> Contacto </Link></li>
                </ul>
              </nav>
            </div>

            <div className="contact_means_wrapper">
              <div className="footer_email_contact_wrapper">
                <h4>Contáctanos</h4>
                <p>hola@studioaqp.com</p>
              </div>
              <div className="footer_social_links_wrapper">
                <h4>Nuestras Redes Sociales</h4>
                <a target="_blank" rel="noopener noreferrer" href={studioLinks.whatsapp} > <FontAwesomeIcon icon={['fab', 'whatsapp']} /> </a>
                <a target="_blank" rel="noopener noreferrer" href={studioLinks.youtube} > <FontAwesomeIcon icon={['fab', 'youtube']} /> </a>
                <a target="_blank" rel="noopener noreferrer" href={studioLinks.instagram} > <FontAwesomeIcon icon={['fab', 'instagram']} /> </a>
                <a target="_blank" rel="noopener noreferrer" href={studioLinks.twitter} > <FontAwesomeIcon icon={['fab', 'twitter']} /> </a>
                <a target="_blank" rel="noopener noreferrer" href={studioLinks.facebook} > <FontAwesomeIcon icon={['fab', 'facebook']} /> </a>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright_footer_wrapper">
          &copy; StudioAQP todos los derechos reservados.
        </div>

      </div>
    </footer>
  )
}

export default Footer;
