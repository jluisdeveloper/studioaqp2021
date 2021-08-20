import React from 'react'

const Contact = () => {
  return (
    <div className="contact_form_footer_wrapper" id="contact">
      <div className="contact_form_wrapper">
        <form action="">
          <div className="footer_form_group">
            <div className="contact_input_group">
              <label htmlFor="email">Correo</label>
              <input type="email" name="email" id="email" placeholder="Ingresa tu correo electrónico" required />
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
}

export default Contact
