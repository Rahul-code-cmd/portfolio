import React from 'react'
import bannerimg from "../assets/menimage.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faBehance } from '@fortawesome/free-brands-svg-icons';  
import { Link } from 'react-router-dom';



const Banner = () => {
  return (
<section className='bannerSection'>
<div className="container">
    <div className="row align-items-center">
        <div className="col-lg-6">
        <div className='name'>
    <h3 className='h5'>Hi I am</h3>
    <h2 className='h4'>Rahul Dixit</h2>
    <h1 className='gradinet_color h1'>UI/UX designer</h1>
   <ul className='banner_social_icons' >
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
   <div className="hireme_div">
    <button className='button_primary'>Hello Me</button>
    <button className='notbutton_primary'>Download Me</button>
   </div>
  <div className='experience_wrap'>
    <div className='experience leftborder'>
<h5 className='count'>5+</h5>
<h5>Experiences</h5>
    </div>
    <div className='project leftborder'>
<h5  className='count'>20+</h5>
<h5>Project Done</h5>
    </div>
    <div className='client leftborder'>
<h5  className='count'>80+</h5>
<h5>Happy clients</h5>
    </div>
  </div>
      
    </div>
        </div>
        <div className="col-lg-6">
        <div className='men_image_div'>
          <div className='men_circle_hover'></div>
   <img src={bannerimg} alt="image"  className='men_image w-100'/>
      
    </div>
        </div>
    </div>
</div>
</section>
  )
}

export default Banner
