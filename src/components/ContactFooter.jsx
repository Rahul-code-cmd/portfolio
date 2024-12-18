import React from 'react'
import { Link } from 'react-router-dom';
import { faInstagram, faFacebook, faBehance } from '@fortawesome/free-brands-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons/faMailBulk';
import { faMailForward } from '@fortawesome/free-solid-svg-icons/faMailForward';
import { faEnvelope, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const ContactFooter = () => {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col">
                <ul className='footer_social_icons' >
    <li>
   <Link to="/" >
   <FontAwesomeIcon icon={faInstagram} />
   </Link>
    </li>
    <li>
    <Link to="/">
   <FontAwesomeIcon icon={faFacebook} />
   </Link>
    </li>
    <li>
    <Link to="/services">
   <FontAwesomeIcon icon={faBehance} />
   </Link>
    </li>
   </ul>
                </div>
                <div className="gmail_wrap">
                    <div className="gmail ">
                    <p><FontAwesomeIcon icon={faEnvelope} /></p>
                    <p>Mahmood.fazile7005@gmail.com</p>
                    </div>
                    <div className="gmail ">
                    <p><FontAwesomeIcon icon={faPhoneAlt} /></p>
                    <p>+93 729 107 005</p>
                    </div>
                </div>
                <p className='designedby'>Designed by @mahmood.fazile UI/UX designer</p>
            </div>
        </div>
        
      
    </footer>
  )
}

export default ContactFooter
