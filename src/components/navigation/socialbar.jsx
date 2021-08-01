import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import socialLinks from '../../socialLinks'

import './styles/social.scss'

const SocialBar = () => {
  const { studioLinks } = socialLinks()
  return (
    <div className=" social_links_container " >
      <div className=" social_links_links_wrapper " >
        <a target="_blank" rel="noopener noreferrer" href={ studioLinks.whatsapp } > <FontAwesomeIcon icon={['fab', 'whatsapp']} /> </a>
        <a target="_blank" rel="noopener noreferrer" href={ studioLinks.youtube } > <FontAwesomeIcon icon={['fab', 'youtube']} /> </a>
        <a target="_blank" rel="noopener noreferrer" href={ studioLinks.instagram } > <FontAwesomeIcon icon={['fab', 'instagram']} /> </a>
        <a target="_blank" rel="noopener noreferrer" href={ studioLinks.twitter } > <FontAwesomeIcon icon={['fab', 'twitter']} /> </a>
        <a target="_blank" rel="noopener noreferrer" href={ studioLinks.facebook } > <FontAwesomeIcon icon={['fab', 'facebook']} /> </a>
      </div>
    </div>
  )
}

export default SocialBar
