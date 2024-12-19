import React, { useRef } from 'react'
import aboutimg from '../assets/aboutme.png'
import Loader from './Loader'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Card from './Card';
import Accordion from './Accordion';


const AboutMe = () => {

  const abouthead=useRef()
  useGSAP(()=>{
    abouthead.current=gsap
    .timeline()
    .from(".abouthead_div",{
      duration: 10,
      // rotationY: 360, // 3D rotation
      color:"#23e1d1", // New color
      ease: "power2.inOut", // Smooth easing
      // repeat: -1, // Infinite loop
      yoyo: true, 
    })

  })


  return (
<>
<section className='aboutme_wrap p50'>
     <div>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5">
            <img src={aboutimg} alt="aboutimg"  className='w-100'/>
          </div>
          <div className="col-lg-7">
   <div className="row">
    <div className="col-lg-12">
     <div className="abouthead_div" ref={abouthead}>
     <h6>About</h6>
      <h1 className='text-white'>Privileged
Working With
MENA's
Brightest</h1>
     </div>
    </div>
    <div className="col-lg-12">
    <div className='abouttext'>
              <p>
              Over the past 15 years, I've had the privilege of collaborating with MENA titans like Gucci, Emirates NBD, MG Motors, Museum of the Future and an array of other visionary leaders.
              </p>
              <p>
              From the ground-breaking to the game-changing, I've supported businesses to raise the bar of user experience.
              </p>
              <p>
           
               Currently working at TCS Interactive as UX/UI Design Lead, Where I guide an exceptional talented team on a mission to craft astonishing solutions for TCS partners.
              </p>
            
              {/* <h2 className='text-white py-4 text-center'>My working </h2> */}
      <Accordion/>
            </div>
    </div>
      <button className='button_primary '>Download CV</button>
   </div>
          </div>
        {/* <Loader percentage={75} size={120} strokeWidth={8}/>
        <Loader percentage={50} size={100} strokeWidth={10}/> */}
        {/* <Card/> */}
        </div>
      </div>
    </div>
 </section>
</>
  )
}


export default AboutMe