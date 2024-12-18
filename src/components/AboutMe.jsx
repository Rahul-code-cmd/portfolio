import React from 'react'
import aboutimg from '../assets/aboutme.png'
import Loader from './Loader'

const AboutMe = () => {
  return (
 <section className='aboutme_wrap p50'>
     <div>
      <h2 className='text-center'>About me</h2>
      <p className='text-center'>User Interface and User Experience and Also video editing </p>

      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5">
            <img src={aboutimg} alt="aboutimg"  className='w-100'/>
          </div>
          <div className="col-lg-6">
            <div>
              <p>
              A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code, sculpting intangible structures that shape our technological world. With fingers poised over keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms and solutions.Their canvas is a screen, a vast expanse where lines of code dance in intricate patterns, weaving the fabric of programs and applications. Each keystroke is a brushstroke, crafting intricate architectures and breathing life into innovative designs.In this digital atelier, they don the mantle of problem solvers, confronting bugs and glitches like valiant knights in an ever-evolving quest for perfection. Debugging becomes a noble pursuit, unraveling the mysteries hidden within the tangled webs of code. designs.In this digital atelier.
              </p>
              <button className='button_primary '>Download CV</button>
            </div>
          </div>
        {/* <Loader percentage={75} size={120} strokeWidth={8}/>
        <Loader percentage={50} size={100} strokeWidth={10}/> */}
        </div>
      </div>
    </div>
 </section>
  )
}


export default AboutMe