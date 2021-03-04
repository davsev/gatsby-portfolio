import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {



  const serviceLoop = services.map((service) => {
    const {id, icon, title, text} = service
    return(
     
      <article key={id} className="service">
        <span>{icon}</span>
        <h3>{title}</h3>
        <p>{text}</p>
      </article>
    )
  })
  
  return <section className="section bg-grey">
    <Title title="Services" />
    <div className="section-center services-center">
    {serviceLoop}
    </div>
  </section>
}

export default Services
