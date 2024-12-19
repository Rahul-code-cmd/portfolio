import React, { useContext, useRef } from "react";
import portfolioimg from '../assets/project2.jpg'
import { useMyContext } from "../hooks/context";
import Design from "./Design";
import { useGSAP } from "@gsap/react";
import Accordion from "./Accordion";


const Portfolio = () => {
  const {portfoliodata}=useMyContext()
  console.log(portfoliodata,"portdata");
  
  const portfolio_wrap=useRef();

  // useGSAP(()=>{
  //   portfolio_wrap.current=useRef()
  //   .timeline()
  //   .from(".portfolio_wrap",{
  //     x:20,
  //     opacity:0,
  //     duration:1,
  //     delay:2
  //   })
  // })
  
  return (
  <>
    <section className="portfolio_wrap p50" >
      <div className="portfolio">
        <h1 className="text-center">My Portfolio Frontend Projects</h1>
        <p className="text-center py-3">These are my frontend live projects </p>
        <div className="container">
          <div className="row">
         {
          portfoliodata.map((value,index)=>(
            <div className="col-lg-4" key={index}>
            <div className="gallery">
              {/* <img src={value?.img} alt="img"  /> */}
              <iframe src={value.url} height="100%" width="100%" allowFullScreen  frameBorder="0" allow="clipboard-write" 
              className="portimg"></iframe>
             <div className="gallery_txt">
             <p>{value?.name}</p>
             <p>{value?.category}</p>
             </div>
            </div>
          </div>
          ))
         }
          </div>
        </div>
      </div>
      <Design/>
     
    </section>
    </>
  );
};

export default Portfolio;
