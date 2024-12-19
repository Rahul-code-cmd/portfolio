import React, { useRef } from 'react'
import bannerimg from "../assets/menimage.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faBehance,faLinkedin  } from '@fortawesome/free-brands-svg-icons';  
import { Link } from 'react-router-dom';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



const Banner = () => {
  const hireme_div=useRef();
  const name=useRef()

   useGSAP(()=>{
      hireme_div.current=gsap
      .timeline()
      .from(".flatcolor_div p",{
        y:40,
        opacity:0,
        duration:.5,
        stagger:0.5,
        delay:.5
      })

    })


  return (
    <section className='bannerSection'>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-8 mx-auto">
          <div className='name' useRef={name}>
            <h3 className='h5'>Hi I am</h3>
            <h2 className='h4'>Rahul Dixit</h2>
            <h1 className='gradinet_color h1'>Senior Frontend Developer | UI/UX Lead</h1>
            <p className='p2'>Experienced Senior Frontend Developer and UI/UX Designer with expertise in React.js for building dynamic web applications and Figma for crafting intuitive and engaging user interfaces. Skilled in bridging the gap between design and development to deliver seamless digital experiences.</p>
            <ul className='banner_social_icons' >
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </li>
              <li>
                <Link to="https://www.behance.net/michaelbutterfield">
                  <FontAwesomeIcon icon={faBehance} />
                </Link>
              </li>
            </ul>
            <div className="hireme_div">
              <button className='button_primary'>Download </button>
           
            </div>
            <div className='experience_wrap'>
              <div className='experience leftborder'>
                <h5 className='count'>5+</h5>
                <h5>Experiences</h5>
              </div>
              <div className='project leftborder'>
                <h5 className='count'>50+</h5>
                <h5>Projects Done</h5>
              </div>
              <div className='client leftborder'>
                <h5 className='count'>2</h5>
                <h5>Worked in Companies</h5>
              </div>
            </div>

          </div>
        </div>
        {/* <div className="col-lg-6">
          <div className='men_image_div'>
            <div className='men_circle_hover'></div>
            <img src={bannerimg} alt="image" className='men_image w-100' />

          </div>
        </div> */}
      </div>
    </div>
  </section>
  )
}

export default Banner
