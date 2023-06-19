import { Link } from 'react-router-dom'
import services from '../../data/serviceData'

function Services() {
  return (
    <>
      <h1 className="page-heading">Services</h1>
      <p>**2023 no classic or hybrid sets for new clients**</p>
      <div>
        {services.map((service) => {
          return (
            <>
              {/* // eslint-disable-next-line react/jsx-key */}
              <div className="service">
                <div>
                  <img src={service.img} alt="" className="service-img" />
                </div>
                <div className="service-info">
                  <h2>{service.name}</h2>
                  <h3>
                    {service.time} @ NZ${service.price}.00
                  </h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default Services
