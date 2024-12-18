import React from "react";
import { useMyContext } from "../hooks/context";

const Services = () => {
  const { serviceData } = useMyContext();  
  const { items } = serviceData; 


  return (
    <section className="services_wrap">
      <div className="container">
        <div className="row">
          <div>
            <h2>My Skills</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Imperdiet convallis
              blandit felis ligula aliquam
            </p>
          </div>
          {items.map((value, index) => (
            <div className="col-lg-4" key={index}>
              <div className="service_card">
                <img src={value?.img} alt="image" />
                <h4>{value?.name}</h4>
                <p>{value?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
