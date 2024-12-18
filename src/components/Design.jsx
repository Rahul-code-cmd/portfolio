import React from 'react'
import { useMyContext } from '../hooks/context';

const Design = () => {
      const {designingcontent}=useMyContext()
      console.log(designingcontent,"portfoliodata");
  return (
    <section className="design_wrap p50">
    <div className="design">
      <h1 className="text-center">My Portfolio Designing Projects</h1>
      <p className="text-center py-3">These are my frontend live projects </p>
      <div className="container-fluid">
        <div className="row">
    
       <div className="gallery_wrap d-flex gap-4">

     {
        designingcontent.map((value,index)=>(
            <>
                   <div className="gallery">
              <img src="https://images.pexels.com/photos/18884059/pexels-photo-18884059/free-photo-of-woman-lying-on-bed-with-laptop-and-candle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img"  />
             <div className="gallery_txt">
             <p>Name</p>
             <p>Category</p>
             </div>
            </div>
            </>
        ))
     }
       </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Design
